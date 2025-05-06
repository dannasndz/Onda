// app/api/usuarioGeneros/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/db';

interface CustomSession {
    user: {
        id: string;
        nombre: string;
        correo: string;
        email?: string;
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions) as CustomSession | null;
        console.log('Sesión completa:', JSON.stringify(session, null, 2)); // Log para depuración

        if (!session || !session.user) {
            return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
        }

        // Obtener datos del request
        const body = await req.json();
        const generos = body.generos;

        if (!Array.isArray(generos) || generos.length === 0) {
            return NextResponse.json({ error: 'Formato inválido o sin géneros seleccionados' }, { status: 400 });
        }

        // Acceder al correo directamente desde session.user.correo
        const usuarioCorreo = session.user.email;
        console.log('Correo del usuario:', usuarioCorreo);

        if (!usuarioCorreo) {
            return NextResponse.json({
                error: 'No se pudo identificar el correo del usuario',
                sessionInfo: {
                    hasUser: !!session.user,
                    userProps: Object.keys(session.user || {})
                }
            }, { status: 400 });
        }

        // Buscar usuario en la base de datos
        const usuario = await prisma.usuario.findUnique({
            where: { correo: usuarioCorreo },
        });

        if (!usuario) {
            return NextResponse.json({
                error: 'Usuario no encontrado en la base de datos',
                correo: usuarioCorreo
            }, { status: 404 });
        }

        // Limpiar géneros anteriores
        await prisma.usuarioGenero.deleteMany({
            where: { usuarioId: usuario.id },
        });

        // Crear nuevas relaciones
        const createdRelations = await prisma.usuarioGenero.createMany({
            data: generos.map((generoId: number) => ({
                usuarioId: usuario.id,
                generoId,
            })),
        });

        return NextResponse.json({
            message: 'Géneros guardados correctamente',
            count: createdRelations.count
        });
    } catch (error) {
        console.error('Error al guardar géneros:', error);
        return NextResponse.json({
            error: 'Error interno del servidor',
            message: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}