
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const artist = searchParams.get('artist');
  const tipo = searchParams.get('tipo');

  if (!name || !artist || !tipo) {
    return NextResponse.json({ error: 'Faltan parámetros obligatorios' }, { status: 400 });
  }

  const reviews = await prisma.reseña.findMany({
    where: {
      name,
      artist,
      tipo,
    },
    include: {
      user: {
        select: { nombre: true },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const mapped = reviews.map(r => ({
    id: r.id,
    estrellas: r.estrellas,
    contenido: r.contenido,
    user: {
      name: r.user.nombre 
    },
  }));

  return NextResponse.json(mapped);

  return NextResponse.json(reviews);
}
