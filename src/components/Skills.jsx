import React from 'react'

const techs = [
  { name: 'Golang' },
  { name: 'Dart' },
  { name: 'Python' },
  { name: 'Rust' },
  { name: 'PostgreSQL' },
  { name: 'Flutter' },
  { name: 'C/C++' },
  { name: 'Git' },
  { name: 'React', learning: true },
  { name: 'TypeScript', learning: true },
]

function TechPill({ name, learning }) {
  return (
    <span
      className="inline-flex items-center px-[14px] py-[8px] rounded-[8px] text-[16px] text-white font-normal whitespace-nowrap transition-colors duration-150 hover:border-white"
      style={{
        border: '1px dashed #808080',
        background: 'black',
      }}
    >
      {name}{learning && <span className="text-[#808080] ml-[2px]"> *</span>}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-[122px] pt-[80px] pb-[80px] max-md:px-[38px] max-md:pt-[60px] max-md:pb-[60px]">
      <h2
        className="font-semibold text-[#808080] mb-[40px] leading-tight"
        style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
      >
        Skills &amp; Technologies
      </h2>

      <div className="flex flex-wrap gap-3">
        {techs.map(t => (
          <TechPill key={t.name} name={t.name} learning={t.learning} />
        ))}
      </div>

      <p className="mt-5 text-[#808080] text-[14px] font-normal">
        Note: Technologies with asterisk mean I'm still learning them. React and TS have always been pain points for me.
      </p>
    </section>
  )
}
