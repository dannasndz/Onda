import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/db';
import { getTopAlbumsByGenre, getTopTracksByGenre } from '@/lib/lastfm';

const DEFAULT_IMAGE_URLS = [
  'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
  'https://lastfm.freetls.fastly.net/i/u/ar0/2a96cbd8b46e442fc41c2b86b821562f.png',
];

function isDefaultImage(url: string): boolean {
  if (!url) return true;
  return DEFAULT_IMAGE_URLS.includes(url) || url.includes('2a96cbd8b46e442fc41c2b86b821562f');
}

async function getItunesCover(artist: string, track: string, album?: string): Promise<string | null> {
  try {

    const query = `${artist} ${track} ${album || ''}`.trim();
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1`;
    const response = await fetch(url);

    if (!response.ok) {
      console.warn('iTunes API error:', response.status);
      return null;
    }

    const text = await response.text();
    if (!text) return null;

    const data = JSON.parse(text);

    if (data.results?.length > 0) {
      return data.results[0].artworkUrl100.replace('100x100', '300x300');
    }

    return null;
  } catch (error) {
    console.error('Error fetching iTunes cover:', error);
    return null;
  }
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  const usuario = await prisma.usuario.findUnique({
    where: { correo: session.user.email },
    include: {
      generos: {
        where: { tipo: { in: ['actual', 'gustaria'] } },
        include: { genero: true },
      },
    },
  });

  if (!usuario) return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });

  const generos = usuario.generos.map((g) => g.genero.nombre);
  let recomendaciones: any[] = [];

  for (const genero of generos) {
    const albums = await getTopAlbumsByGenre(genero, 50);
    const tracks = await getTopTracksByGenre(genero, 50);

    for (const album of albums) {
      let imagen = album.image?.find((img: any) => img.size === 'large')?.['#text'] || '';

      if (isDefaultImage(imagen)) {
        const itunesCover = await getItunesCover(album.artist.name, '', album.name);
        if (itunesCover) {
          imagen = itunesCover;
        } else {
          continue; 
        }
      }

      recomendaciones.push({
        tipo: 'album',
        nombre: album.name,
        artista: album.artist.name,
        imagen,
        genero,
      });
    }

    for (const track of tracks) {
      let imagen = track.image?.find((img: any) => img.size === 'large')?.['#text'] || '';

      if (isDefaultImage(imagen)) {
        const itunesCover = await getItunesCover(track.artist.name, track.name);
        if (itunesCover) {
          imagen = itunesCover;
        } else {
          continue; 
        }
      }

      recomendaciones.push({
        tipo: 'cancion',
        nombre: track.name,
        artista: track.artist.name,
        imagen,
        genero,
      });
    }
  }

  recomendaciones = recomendaciones.sort(() => Math.random() - 0.5);
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = recomendaciones.slice(start, end);

  return NextResponse.json({ recomendaciones: paginated });
}