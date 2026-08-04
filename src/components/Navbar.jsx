import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-[134px] max-md:px-6 border-b border-[#808080] transition-all duration-300"
      style={{ background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(5px)' : 'none' }}
    >
      <span className="font-bold text-2xl text-white tracking-tight">tobi.</span>
      <div className="hidden md:flex gap-10 text-[#808080] text-[14px] font-normal tracking-widest">
        <a href="#about"    className="hover:text-white transition-colors duration-150">ABOUT</a>
        <a href="#projects" className="hover:text-white transition-colors duration-150">PROJECTS</a>
        <a href="#contact"  className="hover:text-white transition-colors duration-150">CONTACT</a>
      </div>
      {/* Mobile: hamburger placeholder */}
      <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
        <span className="block w-6 h-[1.5px] bg-white"></span>
        <span className="block w-6 h-[1.5px] bg-white"></span>
        <span className="block w-4 h-[1.5px] bg-white"></span>
      </div>
    </nav>
  )
}
