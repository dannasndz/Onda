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

function getRandomSample<T>(array: T[], size: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
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
    const albums = await getTopAlbumsByGenre(genero, 500);
    const tracks = await getTopTracksByGenre(genero, 500);

    const albumRecs = albums.map((album: any) => ({
      tipo: 'album',
      nombre: album.name,
      artista: album.artist.name,
      imagen: album.image?.find((img: any) => img.size === 'extralarge')?.['#text'] || '',
      genero,
    }));

    const trackRecs = tracks.map((track: any) => ({
      tipo: 'cancion',
      nombre: track.name,
      artista: track.artist.name,
      imagen: track.image?.find((img: any) => img.size === 'extralarge')?.['#text'] || '',
      genero,
    }));

    recomendaciones.push(
      ...albumRecs.filter((item: { imagen: string; }) => !isDefaultImage(item.imagen)),
      ...trackRecs.filter((item: { imagen: string; }) => !isDefaultImage(item.imagen))
    );
  }

  // Mezcla total
  recomendaciones = recomendaciones.sort(() => Math.random() - 0.5);

  // Aplica paginación
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = recomendaciones.slice(start, end);

  return NextResponse.json({ recomendaciones: paginated });
}
