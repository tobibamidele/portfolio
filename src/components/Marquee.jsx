import React from 'react'

const techs = ['GO', 'GIT', 'RUST', 'DART', 'MYSQL', 'PYTHON', 'GOLANG', 'FLUTTER', 'FIREBASE', 'SUPABASE', 'POSTGRESQL']

export default function Marquee() {
  const items = [...techs, ...techs] // doubled for seamless loop

  return (
    <div className="border-t border-b border-[#2a2a2a] py-[15px] overflow-hidden -mx-[122px] max-md:-mx-[38px]">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="text-[#808080] text-sm max-md:text-base font-normal tracking-widest mx-10 whitespace-nowrap">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
