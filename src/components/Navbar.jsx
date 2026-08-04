import React, { useEffect, useState } from 'react'

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-[134px] max-md:px-6 border-b border-[#808080] transition-[background-color,backdrop-filter] duration-300"
      style={{ background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(5px)' : 'none' }}
    >
      <span className="font-bold text-2xl text-white tracking-tight">tobi.</span>

      <div className="hidden md:flex gap-10 text-[#808080] text-[14px] font-normal tracking-widest">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-white transition-colors duration-150">{l.label}</a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="md:hidden flex flex-col gap-1.5 p-2 -m-2 cursor-pointer"
      >
        <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-200 ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-200 ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
      </button>

      {/* Mobile menu */}
      <div className={`absolute top-full left-0 right-0 md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col bg-black/95 border-b border-[#808080]" style={{ backdropFilter: 'blur(5px)' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#808080] text-[14px] font-normal tracking-widest py-3 hover:text-white transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
