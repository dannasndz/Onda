import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const reseña = await prisma.reseña.findUnique({
    where: { id: parseInt(params.id) },
    include: { usuario: true, cancion: true, album: true },
  });

  if (!reseña) return NextResponse.json({ error: 'No encontrada' }, { status: 404 });

  return NextResponse.json(reseña);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { contenido } = await req.json();

  try {
    const reseña = await prisma.reseña.update({
      where: { id: parseInt(params.id) },
      data: { contenido },
    });

    return NextResponse.json(reseña);
  } catch {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await prisma.reseña.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}
