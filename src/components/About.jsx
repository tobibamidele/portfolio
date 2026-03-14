import React from 'react'

export default function About() {
  return (
    <section id="about" className="px-[122px] pt-[80px] pb-[80px] max-md:px-[38px] max-md:pt-[60px] max-md:pb-[60px]">
      <h2
        className="font-semibold text-[#808080] mb-[40px] leading-tight"
        style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
      >
        About
      </h2>
      <div
        className="font-normal text-white leading-[1.7] space-y-4"
        style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', maxWidth: '868px' }}
      >
        <p>
          I started learning Python about three years ago out of curiosity. In SS2, a teacher of mine encouraged
          my interest in programming, and I spent time learning and experimenting through resources like W3Schools.
        </p>
        <p>
          After taking a break to focus on my external exams, I came back wanting to build real applications.
          That led me to mobile development with Flutter and Dart.
        </p>
        <p>
          As I kept exploring, I became interested in backend systems and cybersecurity. I've experimented with
          C and Rust to understand performance and memory safety, and I also learned Go while working on backend
          projects. I'm still early in the journey, but I enjoy building and learning how systems work under the hood.
        </p>
      </div>
    </section>
  )
}
