import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { contenido, cancionId, albumId } = await req.json();

  if (!contenido || (!cancionId && !albumId)) {
    return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
  }

  try {
    const reseña = await prisma.reseña.create({
      data: {
        contenido,
        usuario: { connect: { correo: session.user?.email! } },
        ...(cancionId && { cancion: { connect: { id: cancionId } } }),
        ...(albumId && { album: { connect: { id: albumId } } }),
      },
    });
    return NextResponse.json(reseña);
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear la reseña' }, { status: 500 });
  }
}

export async function GET() {
  const reseñas = await prisma.reseña.findMany({
    include: {
      usuario: true,
      cancion: true,
      album: true,
    },
    orderBy: { creadoEn: 'desc' },
  });
  return NextResponse.json(reseñas);
}
