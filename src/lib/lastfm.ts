const API_KEY = process.env.LASTFM_API_KEY!;
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

export async function getTopAlbumsByGenre(genero: string, limit = 100) {
  const url = `${BASE_URL}?method=tag.gettopalbums&tag=${encodeURIComponent(genero)}&api_key=${API_KEY}&format=json&limit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.albums?.album || [];
}

export async function getTopTracksByGenre(genero: string, limit = 100) {
  const url = `${BASE_URL}?method=tag.gettoptracks&tag=${encodeURIComponent(genero)}&api_key=${API_KEY}&format=json&limit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.tracks?.track || [];
}

export async function searchArtists(nombre: string, limit = 25) {
  const url = `${BASE_URL}?method=artist.search&artist=${encodeURIComponent(nombre)}&api_key=${API_KEY}&format=json&limit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results?.artistmatches?.artist || [];
}
