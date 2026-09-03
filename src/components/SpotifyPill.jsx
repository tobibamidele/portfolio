import React, { useState } from 'react'
import useNowPlaying from '../hooks/useNowPlaying'

export default function SpotifyPill() {
  const { track, loading, error } = useNowPlaying()
  const [expanded, setExpanded] = useState(false)

  if (loading || error || !track) return null

  const artists = track.artists?.join(', ') || ''

  return (
    <div className="fixed bottom-6 right-6 z-50 max-md:bottom-4 max-md:right-4">
      <div className="flex items-center gap-1 bg-[#0b0b0b] border border-[#808080] rounded-[16px] py-2 pl-2 pr-2 hover:border-[#1DB954] transition-colors duration-200">
        <a
          href={track.songUrl || undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Now playing ${track.title} by ${artists}`}
          className="flex items-center gap-3 min-w-0"
        >
          {track.albumArt && (
            <img
              src={track.albumArt}
              alt=""
              className="w-10 h-10 rounded-[10px] object-cover shrink-0 ring-1 ring-white/10"
            />
          )}

          <span
            className={`flex flex-col min-w-0 transition-[max-width,opacity] duration-200 ${
              expanded
                ? 'max-w-[240px] opacity-100'
                : 'max-md:max-w-0 max-md:opacity-0 max-md:overflow-hidden'
            }`}
          >
            <span className="flex items-center gap-1.5 text-[10px] text-[#1DB954] font-normal tracking-widest uppercase whitespace-nowrap">
              <span className="flex items-end gap-[2px] h-[10px]">
                <span className="w-[2px] bg-[#1DB954] eq-bar" />
                <span className="w-[2px] bg-[#1DB954] eq-bar eq-bar-2" />
                <span className="w-[2px] bg-[#1DB954] eq-bar eq-bar-3" />
              </span>
              Now playing
            </span>
            <span className="text-[14px] font-medium text-white truncate max-w-[200px]">
              {track.title}
            </span>
            <span className="text-[12px] text-[#808080] truncate max-w-[200px]">{artists}</span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? 'Collapse now playing' : 'Expand now playing'}
          aria-expanded={expanded}
          className="md:hidden shrink-0 grid place-items-center w-7 h-7 rounded-full text-[#808080] hover:text-white hover:bg-white/10 transition-colors -mr-1"
        >
          {expanded ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 9L6 5L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 3L6 7L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
