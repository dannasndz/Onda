import { NextResponse } from 'next/server';

const API_KEY = process.env.LASTFM_API_KEY!;
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

// Imágenes predeterminadas de Last.fm
const DEFAULT_IMAGE_URLS = [
    'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
    'https://lastfm.freetls.fastly.net/i/u/ar0/2a96cbd8b46e442fc41c2b86b821562f.png',
];

function isDefaultImage(url: string): boolean {
    return !url || DEFAULT_IMAGE_URLS.includes(url) || url.includes('2a96cbd8b46e442fc41c2b86b821562f');
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q');
    const tipo = searchParams.get('tipo');

    if (!q || !tipo) {
        return NextResponse.json({ error: 'Parámetros faltantes' }, { status: 400 });
    }

    try {
        let resultados: any[] = [];

        if (tipo === 'cancion') {
            const res = await fetch(`${BASE_URL}?method=track.search&track=${q}&api_key=${API_KEY}&format=json`);
            const data = await res.json();
            const tracks = data.results?.trackmatches?.track || [];

            resultados = tracks
                .map((track: any) => {
                    const imagen = track.image?.find((img: any) => img.size === 'extralarge')?.['#text'] || '';
                    return {
                        tipo: 'cancion',
                        nombre: track.name,
                        artista: track.artist,
                        imagen,
                    };
                })
                .filter((item: { imagen: string; }) => !isDefaultImage(item.imagen));
        }

        else if (tipo === 'album') {
            const res = await fetch(`${BASE_URL}?method=album.search&album=${q}&api_key=${API_KEY}&format=json`);
            const data = await res.json();
            const albums = data.results?.albummatches?.album || [];

            resultados = albums
                .map((album: any) => {
                    const imagen = album.image?.find((img: any) => img.size === 'extralarge')?.['#text'] || '';
                    return {
                        tipo: 'album',
                        nombre: album.name,
                        artista: album.artist,
                        imagen,
                    };
                })
                .filter((item: { imagen: string; }) => !isDefaultImage(item.imagen));
        }

        else if (tipo === 'artista') {
            const res = await fetch(`${BASE_URL}?method=artist.search&artist=${q}&api_key=${API_KEY}&format=json`);
            const data = await res.json();
            const artists = data.results?.artistmatches?.artist || [];

            resultados = artists
                .map((artist: any) => {
                    const imagen = artist.image?.find((img: any) => img.size === 'extralarge')?.['#text'] || '';
                    return {
                        tipo: 'artista',
                        nombre: artist.name,
                        imagen,
                    };
                })
                .filter((item: { imagen: string; }) => !isDefaultImage(item.imagen));
        }

        return NextResponse.json({ resultados });
    } catch (error) {
        console.error('Error en la búsqueda:', error);
        return NextResponse.json({ error: 'Error al buscar' }, { status: 500 });
    }
}
