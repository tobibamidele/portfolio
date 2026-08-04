import React, { useEffect, useState } from 'react'

const avatarUrl = "/images/avatar.png"

const roles = ['student dev', 'cyb student', 'gamer', 'creative nerd']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timeout
    const interval = setInterval(() => {
      // fade out, swap text, fade in
      setVisible(false)
      timeout = setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length)
        setVisible(true)
      }, 300)
    }, 2400)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="px-[122px] pt-[60px] pb-0 max-md:px-[38px] max-md:pt-[40px] mb-20 mt-20 max-md:mt-56">
      {/* Avatar */}
      <div className="animate-fade-up mb-5">
        <img
          src={avatarUrl}
          alt="Tobi"
          className="w-[50px] h-[50px] rounded-full object-cover ring-1 ring-white/10"
        />
      </div>

      {/* Role pill */}
      <div className="animate-fade-up animation-delay-100 mb-5">
        <span
          className="inline-block border border-[#808080] rounded-[16px] px-[14px] py-[10px] text-[12px] text-white font-normal transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {roles[roleIndex]}
        </span>
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up animation-delay-200 font-semibold text-white tracking-[-0.64px] leading-tight mb-0"
        style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', maxWidth: '977px' }}
      >
        <span className="block">Hi. I'm Tobi.</span>
        <span className="block">The dev you've been looking for.</span>
      </h1>

      {/* Subheading */}
      <p
        className="animate-fade-up animation-delay-300 font-normal text-[#808080] mt-[24px] leading-relaxed"
        style={{ fontSize: 'clamp(16px, 1.8vw, 24px)', maxWidth: '977px' }}
      >
        I love logic and building highly scalable, efficient, and secure backend systems that can withstand high-throughput environments.
      </p>

      {/* CTA */}
      <a
        href="mailto:franklintobi09@gmail.com"
        className="animate-fade-up animation-delay-400 inline-flex items-center mt-[40px] bg-[#d9d9d9] text-black font-semibold rounded-[32px] px-8 py-[18px] transition-[background-color,transform] duration-200 hover:bg-white hover:scale-[1.03] active:scale-[0.96]"
        style={{ fontSize: 'clamp(16px, 1.4vw, 24px)' }}
      >
        Get in touch
      </a>
    </section>
  )
}
