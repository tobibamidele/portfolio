import React from 'react'

// Social icon assets from Figma
const githubIconUrl  = '/icons/github_icon.svg'
const twitterIconUrl = '/icons/x_icon.svg'
const mediumIconUrl  = '/icons/medium_icon.svg'

const socials = [
  { label: 'GitHub',    icon: githubIconUrl,  href: 'https://github.com/tobibamdele' },
  { label: 'Twitter/X', icon: twitterIconUrl, href: 'https://twitter.com' },
  { label: 'Medium',    icon: mediumIconUrl,  href: 'https://medium.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="px-[140px] max-md:px-6 py-[160px] text-center">
      {/* Big heading */}
      <h2
        className="font-medium text-white leading-tight mb-6 mx-auto"
        style={{ fontSize: 'clamp(40px, 7vw, 70px)', maxWidth: '890px' }}
      >
        Have an idea?<br />Let's build together.
      </h2>

      <p className="text-white font-medium text-[20px] max-md:text-[16px] leading-relaxed mb-12 mx-auto max-w-[585px]">
        Open to full time roles, freelance work, long term projects, research work, and collaborations
      </p>

      {/* CTA Button */}
      <a
        href="mailto:franklintobi09@gmail.com"
        className="inline-flex items-center justify-center bg-[#d9d9d9] text-black font-semibold text-base rounded-[32px] px-8 py-[18px] mb-[80px] transition-[background-color,transform] duration-200 hover:bg-white hover:scale-[1.03] active:scale-[0.96]"
      >
        SEND AN EMAIL
      </a>

      {/* Socials */}
      <div className="flex justify-center gap-[71px] flex-wrap">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <img
              src={s.icon}
              alt={s.label}
              className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-white font-normal text-[20px] group-hover:text-[#808080] transition-colors">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
