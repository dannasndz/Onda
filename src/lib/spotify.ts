let cachedToken: string | null = null
let tokenExpiresAt: number | null = null

export async function getSpotifyAccessToken() {
  const now = Date.now()

  if (cachedToken && tokenExpiresAt && now < tokenExpiresAt) {
    return cachedToken 
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Error getting token: ${err}`)
  }

  const data = await res.json()

  cachedToken = data.access_token
  tokenExpiresAt = now + data.expires_in * 1000 - 60000 

  return cachedToken
}