import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/authOptions';
import { prisma } from "@/lib/db";

export async function PUT( // actualizar resenia
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const id = params.id;
  const body = await req.json();
  const { titulo, contenido, estrellas } = body;

  if (!titulo || !contenido || !estrellas) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }

  try {
    const existingReview = await prisma.reseña.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!existingReview || existingReview.user.correo !== session.user?.email) {
      return NextResponse.json({ error: "No autorizado para editar esta reseña" }, { status: 403 });
    }

    const updatedReview = await prisma.reseña.update({
      where: { id },
      data: {
        titulo,
        contenido,
        estrellas,
      },
    });

    return NextResponse.json(updatedReview, { status: 200 });
  } catch (error) {
    console.error("Error al actualizar reseña:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
