import { NextResponse } from 'next/server';

const API_KEY = process.env.LASTFM_API_KEY!;
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';
const PLACEHOLDER_IMAGE = '/placeholder-music.png';

const DEFAULT_IMAGE_URLS = [
  'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
  'https://lastfm.freetls.fastly.net/i/u/ar0/2a96cbd8b46e442fc41c2b86b821562f.png',
];

const itunesCache = new Map<string, string | null>();

function isDefaultImage(url: string): boolean {
  if (!url) return true;
  return DEFAULT_IMAGE_URLS.includes(url) || url.includes('2a96cbd8b46e442fc41c2b86b821562f');
}

async function getItunesCover(artist: string, track: string, album?: string): Promise<string | null> {
  try {
    const cacheKey = `${artist}-${track}-${album || ''}`.toLowerCase();

    if (itunesCache.has(cacheKey)) {
      return itunesCache.get(cacheKey) || null;
    }

    const query = `${artist} ${track} ${album || ''}`.trim();
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn('iTunes API error:', response.status);
        itunesCache.set(cacheKey, null);
        return null;
      }

      const data = await response.json();

      if (data.results?.length > 0) {
        const coverUrl = data.results[0].artworkUrl100.replace('100x100', '200x200');
        itunesCache.set(cacheKey, coverUrl);
        return coverUrl;
      }

      itunesCache.set(cacheKey, null);
      return null;
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === 'AbortError') {
        console.warn('iTunes request timed out');
      } else {
        console.error('iTunes fetch error:', err);
      }
      itunesCache.set(cacheKey, null);
      return null;
    }
  } catch (error) {
    console.error('Error en getItunesCover:', error);
    return null;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');
  const tipo = searchParams.get('tipo');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '50', 50);

  if (!q || !tipo) {
    return NextResponse.json({ error: 'Parámetros faltantes' }, { status: 400 });
  }

  try {
    let method: string;
    let responseKey: string[];
    let entityParam: string;

    switch (tipo) {
      case 'cancion':
        method = 'track.search';
        responseKey = ['results', 'trackmatches', 'track'];
        entityParam = 'track';
        break;
      case 'album':
        method = 'album.search';
        responseKey = ['results', 'albummatches', 'album'];
        entityParam = 'album';
        break;
      case 'artista':
        method = 'artist.search';
        responseKey = ['results', 'artistmatches', 'artist'];
        entityParam = 'artist';
        break;
      default:
        return NextResponse.json({ error: 'Tipo de búsqueda no válido' }, { status: 400 });
    }

    const searchUrl = `${BASE_URL}?method=${method}&${entityParam}=${encodeURIComponent(q)}&page=${page}&limit=${limit}&api_key=${API_KEY}&format=json`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(searchUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return NextResponse.json({ error: `Error en API de Last.fm: ${res.status}` }, { status: res.status });
    }

    const data = await res.json();

    let items: any[] = [];
    let currentObj = data;

    for (const key of responseKey) {
      if (!currentObj || !currentObj[key]) {
        break;
      }
      currentObj = currentObj[key];
    }

    if (Array.isArray(currentObj)) {
      items = currentObj;
    } else {
      items = [];
    }

    const resultados = await Promise.all(
      items.map(async (item: any) => {
        let resultado: any = {
          tipo,
          nombre: item.name,
        };

        if (tipo !== 'artista') {
          resultado.artista = item.artist;
        }

        let imagen = '';
        if (item.image && Array.isArray(item.image)) {
          const extraLargeImg = item.image.find((img: any) => img.size === 'extralarge');
          imagen = extraLargeImg?.['#text'] || '';
        }

        if (isDefaultImage(imagen)) {
          let itunesCover: string | null = null;

          switch (tipo) {
            case 'cancion':
              itunesCover = await getItunesCover(item.artist, item.name);
              break;
            case 'album':
              itunesCover = await getItunesCover(item.artist, '', item.name);
              break;
            case 'artista':
              itunesCover = await getItunesCover(item.name, '', '');
              break;
          }

          imagen = itunesCover || PLACEHOLDER_IMAGE;
        }

        resultado.imagen = imagen;

        return resultado;
      })
    );

    return NextResponse.json({ resultados });
  } catch (error) {
    console.error('Error en la búsqueda:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
