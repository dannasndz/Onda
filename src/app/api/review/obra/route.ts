
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
        select: { nombreUsuario: true },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const mapped = reviews.map(r => ({
    id: r.id,
    titulo: r.titulo,
    estrellas: r.estrellas,
    contenido: r.contenido,
    createdAt: r.createdAt,
    user: {
      name: r.user.nombreUsuario 
    },
  }));

  return NextResponse.json(mapped);
}
