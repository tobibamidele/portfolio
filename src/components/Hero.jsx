import React from 'react'

export default function Hero() {
  return (
    <section className="px-[122px] pt-[200px] pb-0 max-md:px-[38px] max-md:pt-[161px]">
      {/* Avatar / profile dot */}
      <div className="animate-fade-up mb-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
        <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
          <circle cx="2" cy="2" r="2" fill="#808080"/>
          <circle cx="8" cy="2" r="2" fill="#808080"/>
          <circle cx="14" cy="2" r="2" fill="#808080"/>
        </svg>
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up animation-delay-100 font-semibold text-white tracking-[-0.64px] leading-tight mb-0"
        style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', maxWidth: '977px' }}
      >
        <span className="block">Hi. I'm Tobi.</span>
        <span className="block">The dev you've been looking for.</span>
      </h1>

      {/* Subheading */}
      <p
        className="animate-fade-up animation-delay-200 font-normal text-[#808080] mt-[24px] leading-relaxed"
        style={{ fontSize: 'clamp(16px, 1.8vw, 24px)', maxWidth: '977px' }}
      >
        I love logic and building highly scalable, efficient, and secure backend systems that can withstand high-throughput environments.
      </p>

      {/* CTA Button */}
      <a
        href="mailto:franklintobi09@gmail.com"
        className="animate-fade-up animation-delay-300 inline-flex items-center mt-[40px] mb-[40px] bg-[#d9d9d9] text-black font-semibold rounded-[32px] px-8 py-[18px] text-[18px] transition-all duration-200 hover:bg-white hover:scale-[1.03] active:scale-[0.98]"
        style={{ fontSize: 'clamp(16px, 1.4vw, 24px)' }}
      >
        Get in touch
      </a>
    </section>
  )
}
