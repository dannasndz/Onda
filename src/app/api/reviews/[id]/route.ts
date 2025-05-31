import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/authOptions';
import { prisma } from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const reviewId = params.id;

  if (!reviewId) {
    return NextResponse.json({ error: "ID de reseña requerido" }, { status: 400 });
  }

  try {
    // Buscar el usuario actual
    const user = await prisma.usuario.findUnique({
      where: { correo: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    const review = await prisma.reseña.findUnique({
      where: { id: reviewId },
    });

    if (!review) {
      return NextResponse.json({ error: "Reseña no encontrada" }, { status: 404 });
    }

    if (review.userId !== user.id) {
      return NextResponse.json({ error: "No tienes permisos para eliminar esta reseña" }, { status: 403 });
    }

    await prisma.reseña.delete({
      where: { id: reviewId },
    });

    return NextResponse.json({ message: "Reseña eliminada exitosamente" }, { status: 200 });
  } catch (error) {
    console.error("Error al eliminar la reseña:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
} 