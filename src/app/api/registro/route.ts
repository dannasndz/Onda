import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { correo, nombreUsuario, contraseña, nombre } = await req.json()

    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [{ correo }, { nombreUsuario }]
      }
    })

    if (usuarioExistente) {
      return NextResponse.json({ error: 'El usuario ya existe' }, { status: 400 })
    }

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        correo,
        nombreUsuario,
        contraseña,
        nombre,
      }
    })

    return NextResponse.json(nuevoUsuario)
  } catch (error) {
    return NextResponse.json({ error: 'Error al registrar' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany()

    return NextResponse.json(usuarios)
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener los usuarios' }, { status: 500 })
  }
}