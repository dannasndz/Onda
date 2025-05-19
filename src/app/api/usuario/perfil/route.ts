import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/authOptions';
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const usuario = await prisma.usuario.findUnique({
      where: {
        correo: session.user.email,
      },
      select: {
        id: true,
        nombreUsuario: true,
        correo: true,
        createdAt: true,
        generos: {
          select: {
            genero: {
              select: { nombre: true }
            }
          }
        },
        _count: {
          select: {
            reseñas: true
          }
        }
      }
    });

    if (!usuario) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(usuario);
  } catch (error) {
    console.error("Error al obtener perfil:", error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}