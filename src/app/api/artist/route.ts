import { NextResponse } from 'next/server'
import { getSpotifyAccessToken } from '@/lib/spotify'

export async function GET() {
  try {
    const token = await getSpotifyAccessToken()

    const artistId = '4Z8W4fKeB5YxbusRsdQVPb' // Radiohead
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener el artista' }, { status: 500 })
  }
}