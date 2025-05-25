import { NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const artist = searchParams.get('artist');
  const tipo = searchParams.get('tipo');

  if (!name || !artist || !tipo) {
    return new Response(JSON.stringify({ error: 'Parámetros inválidos' }), { status: 400 });
  }

  const reseñas = await prisma.reseña.findMany({
    where: { name, artist, tipo },
    select: { estrellas: true },
  });

  if (reseñas.length === 0) {
    return new Response(
      JSON.stringify({
        promedio: null,
        mensaje: 'Aún no hay calificación para esta obra. ¡Sé el primero en dejar tu opinión!',
      }),
      { status: 200 }
    );
  }

  const suma = reseñas.reduce((acc, r) => acc + r.estrellas, 0);
  const promedio = suma / reseñas.length;

  return new Response(
    JSON.stringify({
      promedio: Number(promedio.toFixed(2)),
      cantidad: reseñas.length,
      mensaje: null,
    }),
    { status: 200 }
  );
}
