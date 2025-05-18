import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {prisma} from "@/lib/db";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const body = await req.json();
  const { titulo, contenido, estrellas, song } = body;

  try {
    const review = await prisma.reseña.create({
      data: {
        titulo,
        contenido,
        estrellas,
        name: song.name,
        artist: song.artist,
        album: song.album,
        genre: song.genre,
        coverUrl: song.coverUrl,
        tipo: song.tipo,
        user: { connect: { correo: session.user?.email! } },
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear la reseña" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const artist = searchParams.get("artist");
  const tipo = searchParams.get("tipo");

  if (!name || !artist || !tipo) {
    return NextResponse.json({ error: "Faltan parámetros" }, { status: 400 });
  }

  try {
    const review = await prisma.reseña.findFirst({
      where: {
        name,
        artist,
        tipo,
        user: {
          correo: session.user?.email!,
        },
      },
    });

    return NextResponse.json(review, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al buscar la reseña" }, { status: 500 });
  }
}
