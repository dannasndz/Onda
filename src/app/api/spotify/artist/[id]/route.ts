// app/api/spotify/artist/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!
  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams({ grant_type: 'client_credentials' }),
    {
      headers: {
        Authorization: `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  return response.data.access_token
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return NextResponse.json({ error: 'Missing artist ID' }, { status: 400 })
  }

  try {
    const token = await getAccessToken()

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
