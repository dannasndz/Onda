import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST() {
    const apiKey = process.env.LASTFM_API_KEY;
    const url = `http://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=${apiKey}&format=json`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const tags = data.toptags?.tag || [];

        const genreNames = tags
            .filter((tag: { name: string; }) => tag.name && tag.name.trim() !== "")
            .map((tag: { name: string; }) => tag.name.toLowerCase());

        const created = [];

        for (const name of genreNames) {
            const exists = await prisma.genero.findUnique({ where: { nombre: name } });
            if (!exists) {
                const genre = await prisma.genero.create({ data: { nombre: name } });
                created.push(genre);
                console.log("Creado:", name);
            } else {
                console.log("Ya existe:", name);
            }
        }

        return NextResponse.json({
            message: "Géneros importados correctamente",
            total: created.length,
        });
    } catch (err) {
        console.error("Error importando géneros:", err);
        return NextResponse.json({ error: "Error al importar géneros" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function GET() {
    try {
        const generos = await prisma.genero.findMany({
            orderBy: { id: "asc" },
        });
        return NextResponse.json(generos);
    } catch (error) {
        console.error("Error al obtener generos:", error);
        return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}