import { NextResponse } from 'next/server';
import type { TopArtistasResponse } from '@/types/lastfm'; 

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const genero = searchParams.get('genero');
    const limit = searchParams.get('limit') || '3'; 
    const page = searchParams.get('page') || '1'; 
    const apiKey = process.env.LASTFM_API_KEY;
    
    if (!genero) {
        return NextResponse.json({ error: 'Género no especificado' }, { status: 400 });
    }
    if (!apiKey) {
        return NextResponse.json({ error: 'API key de Last.fm no configurada' }, { status: 500 });
    }

    try {
        const lastFmUrl = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${encodeURIComponent(genero)}&api_key=${apiKey}&format=json&limit=${limit}&page=${page}`;

        const response = await fetch(lastFmUrl, { cache: 'no-store' }); 

        if (!response.ok) {
            console.error('Error Last.fm (Top Artists):', response.status, await response.text());
            return NextResponse.json({ error: 'Error al contactar Last.fm' }, { status: response.status });
        }

        const data: TopArtistasResponse = await response.json();

        if (data.topartists && data.topartists.artist) {
            return NextResponse.json(data.topartists.artist);
        } else {
            console.warn('No se encontraron artistas para el género:', genero, data);
            return NextResponse.json([]);
        }

    } catch (error) {
        console.error('Error interno fetching top artists:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}