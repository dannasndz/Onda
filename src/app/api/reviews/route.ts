import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

  const { contenido, estrellas, cancionId, albumId } = await req.json();

  if (!contenido || (!cancionId && !albumId)) {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }

  try {
    const reseña = await prisma.reseña.create({
      data: {
        contenido,
        usuario: { connect: { correo: session.user?.email! } },
        cancion: cancionId ? { connect: { id: cancionId } } : undefined,
        album: albumId ? { connect: { id: albumId } } : undefined,
      },
    });

    if (estrellas) {
      await prisma.calificacion.create({
        data: {
          estrellas,
          usuario: { connect: { correo: session.user?.email! } },
          cancion: cancionId ? { connect: { id: cancionId } } : undefined,
          album: albumId ? { connect: { id: albumId } } : undefined,
        },
      });
    }

    return NextResponse.json(reseña, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al crear reseña' }, { status: 500 });
  }
}
