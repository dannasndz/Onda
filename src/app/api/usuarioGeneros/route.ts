import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const body = await req.json();
    const actuales: number[] = body.actuales;
    const gustaria: number[] = body.gustaria;

    if (!Array.isArray(actuales) || !Array.isArray(gustaria)) {
      return NextResponse.json({ error: 'Datos de géneros inválidos' }, { status: 400 });
    }

    const usuarioCorreo = (session.user as any).email;

    const usuario = await prisma.usuario.findUnique({
      where: { correo: usuarioCorreo },
    });

    if (!usuario) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    if (actuales.length > 0) {
      await prisma.usuarioGenero.deleteMany({
        where: {
          usuarioId: usuario.id,
          tipo: 'actual',
        },
      });
    }

    if (gustaria.length > 0) {
      await prisma.usuarioGenero.deleteMany({
        where: {
          usuarioId: usuario.id,
          tipo: 'gustaria',
        },
      });
    }

    const dataToCreate = [
      ...actuales.map((generoId) => ({
        usuarioId: usuario.id,
        generoId,
        tipo: 'actual'
      })),
      ...gustaria.map((generoId) => ({
        usuarioId: usuario.id,
        generoId,
        tipo: 'gustaria'
      }))
    ];

    const created = await prisma.usuarioGenero.createMany({
      data: dataToCreate,
    });

    return NextResponse.json({
      message: 'Géneros guardados correctamente',
      total: created.count
    });
  } catch (error) {
    console.error('Error al guardar géneros:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}


export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const usuario = await prisma.usuario.findUnique({
    where: { correo: session.user.email },
    select: {
      generos: {
        include: {
          genero: true
        }
      }
    }
  });

  if (!usuario) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }

  const actuales = usuario.generos
    .filter((g) => g.tipo === 'actual')
    .map((g) => ({ id: g.genero.id, nombre: g.genero.nombre }));

  const gustaria = usuario.generos
    .filter((g) => g.tipo === 'gustaria')
    .map((g) => ({ id: g.genero.id, nombre: g.genero.nombre }));

  return NextResponse.json({ actuales, gustaria });
}