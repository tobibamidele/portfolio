const SPOTIFY_ACCOUNTS = 'https://accounts.spotify.com'
const SPOTIFY_API = 'https://api.spotify.com/v1'

let cachedToken = null
let cachedTokenExpiry = 0

function base64Encode(str) {
  return Buffer.from(str).toString('base64')
}

async function getAccessToken() {
  const now = Date.now()
  if (cachedToken && now < cachedTokenExpiry) {
    return cachedToken
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  const res = await fetch(`${SPOTIFY_ACCOUNTS}/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${base64Encode(`${clientId}:${clientSecret}`)}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to refresh token: ${res.status} ${text}`)
  }

  const data = await res.json()
  cachedToken = data.access_token
  cachedTokenExpiry = now + (data.expires_in - 60) * 1000
  return cachedToken
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const token = await getAccessToken()

    const spRes = await fetch(`${SPOTIFY_API}/me/player/currently-playing`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (spRes.status === 204 || spRes.status === 404) {
      return res.status(200).json({ is_playing: false })
    }

    if (spRes.status === 401) {
      cachedToken = null
      return res.status(200).json({ is_playing: false, error: 'unauthorized' })
    }

    if (!spRes.ok) {
      return res.status(200).json({ is_playing: false, error: `spotify_${spRes.status}` })
    }

    const data = await spRes.json()
    if (!data || !data.item) {
      return res.status(200).json({ is_playing: false })
    }

    const item = data.item
    const artists = (item.artists || []).map((a) => a.name)
    const albumArt = item.album?.images?.[0]?.url || null

    return res.status(200).json({
      is_playing: Boolean(data.is_playing),
      title: item.name,
      artists,
      album: item.album?.name || null,
      albumArt,
      songUrl: item.external_urls?.spotify || null,
      progress_ms: data.progress_ms || 0,
      duration_ms: item.duration_ms || 0,
    })
  } catch (err) {
    console.error('spotify api error', err)
    return res.status(200).json({ is_playing: false, error: 'server_error' })
  }
}
