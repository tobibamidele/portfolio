import { useEffect, useRef, useState } from 'react'

const POLL_INTERVAL = 15000

export default function useNowPlaying() {
  const [track, setTrack] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const timerRef = useRef(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true

    const fetchTrack = async () => {
      try {
        const res = await fetch('/api/spotify', { cache: 'no-store' })
        if (!res.ok) throw new Error('bad status')
        const data = await res.json()
        if (!mountedRef.current) return
        setTrack(data.is_playing ? data : null)
        setError(false)
      } catch (e) {
        if (!mountedRef.current) return
        setError(true)
      } finally {
        if (mountedRef.current) setLoading(false)
      }
    }

    fetchTrack()
    timerRef.current = setInterval(fetchTrack, POLL_INTERVAL)

    return () => {
      mountedRef.current = false
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return { track, loading, error }
}
