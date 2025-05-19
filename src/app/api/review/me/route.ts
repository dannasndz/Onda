import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/authOptions';
import { prisma } from "@/lib/db";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const user = await prisma.usuario.findUnique({
      where: { correo: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    const reseñas = await prisma.reseña.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const songs: Record<string, any> = {};

    reseñas.forEach((r) => {
      songs[r.id] = {
        name: r.name,
        artist: r.artist,
        album: r.album || '',
        genre: r.genre || '',
        coverUrl: r.coverUrl || '',
        tipo: r.tipo as "cancion" | "album" | "otro", // 🔥 Aquí forzamos el tipo correcto
      };
    });


    return NextResponse.json({
      reviews: reseñas,
      songs,
    });
  } catch (error) {
    console.error("Error al obtener reseñas del usuario:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
