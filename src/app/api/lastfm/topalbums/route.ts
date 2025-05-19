import { NextResponse } from 'next/server';
import type { TopAlbumesResponse } from '@/types/lastfm'; // Ajusta la ruta si es necesario

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const genero = searchParams.get('genero');
    const apiKey = process.env.LASTFM_API_KEY;

    if (!genero) {
        return NextResponse.json({ error: 'Género no especificado' }, { status: 400 });
    }
    if (!apiKey) {
        return NextResponse.json({ error: 'API key de Last.fm no configurada' }, { status: 500 });
    }

    try {
        const lastFmUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${encodeURIComponent(genero)}&api_key=${apiKey}&format=json&limit=3`;
        const response = await fetch(lastFmUrl, { cache: 'no-store' }); // Puedes ajustar la caché

        if (!response.ok) {
            console.error('Error Last.fm (Top Albums):', response.status, await response.text());
            return NextResponse.json({ error: 'Error al contactar Last.fm' }, { status: response.status });
        }

        const data: TopAlbumesResponse = await response.json();

        if (data.albums && data.albums.album) {
            return NextResponse.json(data.albums.album);
        } else {
            console.warn('No se encontraron álbumes para el género:', genero, data);
            return NextResponse.json([]);
        }

    } catch (error) {
        console.error('Error interno fetching top albums:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}