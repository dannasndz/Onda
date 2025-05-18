import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/db';
import { getTopAlbumsByGenre, getTopTracksByGenre } from '@/lib/lastfm';

const DEFAULT_IMAGE_URLS = [
  'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
  'https://lastfm.freetls.fastly.net/i/u/ar0/2a96cbd8b46e442fc41c2b86b821562f.png',
];

const PLACEHOLDER_IMAGE = '/placeholder-music.png';

const itunesCache = new Map<string, string | null>();

function isDefaultImage(url: string): boolean {
  if (!url) return true;
  return DEFAULT_IMAGE_URLS.includes(url) || url.includes('2a96cbd8b46e442fc41c2b86b821562f');
}

async function getItunesCover(artist: string, track: string, album?: string): Promise<string | null> {
  try {
    const cacheKey = `${artist}-${track}-${album || ''}`.toLowerCase();
    
    if (itunesCache.has(cacheKey)) {
      return itunesCache.get(cacheKey) || null;
    }

    const query = `${artist} ${track} ${album || ''}`.trim();
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1`;
    
    const response = await fetch(url, { 
      signal: AbortSignal.timeout(7000)
    });

    if (!response.ok) {
      console.warn('iTunes API error:', response.status);
      itunesCache.set(cacheKey, null);
      return null;
    }

    const data = await response.json();

    if (data.results?.length > 0) {
      const coverUrl = data.results[0].artworkUrl100.replace('100x100', '200x200');
      itunesCache.set(cacheKey, coverUrl);
      return coverUrl;
    }

    itunesCache.set(cacheKey, null);
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

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { correo: session.user.email },
      include: {
        generos: {
          where: { tipo: { in: ['actual', 'gustaria'] } },
          include: { genero: true },
        },
      },
    });

    if (!usuario) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const generos = usuario.generos.map((g) => g.genero.nombre);
    const seenItems = new Set<string>();
    
    const allRecomendaciones = await Promise.all(
      generos.map(async (genero) => {
        const [albums, tracks] = await Promise.all([
          getTopAlbumsByGenre(genero, 100), 
          getTopTracksByGenre(genero, 100)  
        ]);
        
        const recomendacionesGenero: any[] = [];

        for (const album of albums) {
          const key = `album-${album.name}-${album.artist.name}`.toLowerCase();
          if (seenItems.has(key)) continue;
          
          let imagen = album.image?.find((img: any) => img.size === 'large')?.['#text'] || '';
          
          if (isDefaultImage(imagen)) {
            const itunesCover = await getItunesCover(album.artist.name, '', album.name);
            imagen = itunesCover || PLACEHOLDER_IMAGE;
          }

          recomendacionesGenero.push({
            tipo: 'album',
            nombre: album.name,
            artista: album.artist.name,
            imagen,
            genero,
          });
          seenItems.add(key);
        }

        for (const track of tracks) {
          const key = `track-${track.name}-${track.artist.name}`.toLowerCase();
          if (seenItems.has(key)) continue;
          
          let imagen = track.image?.find((img: any) => img.size === 'large')?.['#text'] || '';
          
          if (isDefaultImage(imagen)) {
            const itunesCover = await getItunesCover(track.artist.name, track.name);
            imagen = itunesCover || PLACEHOLDER_IMAGE;
          }

          recomendacionesGenero.push({
            tipo: 'cancion',
            nombre: track.name,
            artista: track.artist.name,
            imagen,
            genero,
          });
          seenItems.add(key);
        }

        return recomendacionesGenero;
      })
    );

    const recomendaciones = allRecomendaciones.flat();
    
    for (let i = recomendaciones.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recomendaciones[i], recomendaciones[j]] = [recomendaciones[j], recomendaciones[i]];
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = recomendaciones.slice(start, end);

    return NextResponse.json({ 
      recomendaciones: paginated,
      totalItems: recomendaciones.length,
      totalPages: Math.ceil(recomendaciones.length / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Error al obtener recomendaciones:', error);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}