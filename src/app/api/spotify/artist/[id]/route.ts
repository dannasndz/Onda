import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { getSpotifyAccessToken } from '@/lib/spotify'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return NextResponse.json({ error: 'Missing artist ID' }, { status: 400 })
  }

  try {
    const token = await getSpotifyAccessToken()

    const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return NextResponse.json(response.data)
  } catch (error: any) {
    console.error('Error fetching artist:', error.response?.data || error.message)
    return NextResponse.json(
      { error: 'Failed to fetch artist data' },
      { status: error.response?.status || 500 }
    )
  }
}

