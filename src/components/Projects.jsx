import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Toris',
    description: 'Production-grade PostgreSQL backup, synchronization, failover, and restoration orchestration.',
    githubUrl: 'https://github.com/tobibamidele/toris',
    icon: '/icons/go_icon.svg',
  },
  {
    name: 'Polo',
    description: 'A stack-based bytecode-interpreted programming language',
    githubUrl: 'https://github.com/tobibamidele/polo-lang',
    icon: '/icons/go_icon.svg',
  },
  {
    name: 'Termflix',
    description: 'A high-performance terminal video renderer using Unicode half-block characters',
    githubUrl: 'https://github.com/tobibamidele/termflix',
    icon: '/icons/rust_icon.svg',
  },
  {
    name: 'VaultPAPI',
    description: 'A self-hostable zero-knowledge secure password manager complete with the Chrome extension',
    githubUrl: 'https://github.com/tobibamidele/vaultpapi',
    icon: '/icons/go_icon.svg',
  },
  {
    name: 'CloudPath',
    description: 'AWS Cloud Attack-Path Analyzer. Discovers AWS infra, identities, and permissions; builds a security graph and finds realistic attack paths.',
    githubUrl: 'https://github.com/tobibamidele/cloudpath',
    icon: '/icons/go_icon.svg',
  },
  {
    name: 'Gowa',
    description: 'Go client for interacting with the official WhatsApp Business API',
    githubUrl: 'https://github.com/tobibamidele/gowa',
    icon: '/icons/go_icon.svg',
  },
  {
    name: 'OpenCode Pipe',
    description: 'Coordinate independent OpenCode sessions through named communication channels ("pipes") without merging context windows, copying files, or starting a daemon.',
    githubUrl: 'https://github.com/tobibamidele/opencode-pipe',
    icon: '/icons/ts_icon.svg',
  },
  {
    name: 'FastJSON',
    description: 'An extremely fast, rust-based, JSON parsing library for Dart written in Rust and powered by SIMD',
    githubUrl: 'https://github.com/tobibamidele/fastjson',
    icon: '/icons/rust_icon.svg',
  },
  {
    name: 'Doth',
    description: 'A customizable OAuth 2.0 multi-provider library for dart servers.',
    githubUrl: 'https://github.com/tobibamidele/doth',
    icon: '/icons/dart_icon.svg',
  },
  {
    name: 'Idan',
    description: "Fast, lightweight, authentication library built on Go's net/http ideal for side projects.",
    githubUrl: 'https://github.com/tobibamidele/idan',
    icon: '/icons/go_icon.svg',
  },
  {
    name: 'mem_visualizer',
    description: 'A TUI that visualizes live memory usage across system processes with color-coded RSS stats and fuzzy search.',
    githubUrl: 'https://github.com/tobibamidele/mem_visualizer',
    icon: '/icons/rust_icon.svg',
  },
  {
    name: 'Dartbuster',
    description: 'A fast web bruteforcing tool written in dart. Inspired by gobuster and feroxbuster.',
    githubUrl: 'https://github.com/tobibamidele/dartbuster',
    icon: '/icons/dart_icon.svg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-[122px] pt-[80px] pb-[80px] max-md:px-[38px] max-md:pt-[60px] max-md:pb-[60px]">
      <h2
        className="font-semibold text-[#808080] mb-[40px] leading-tight"
        style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
      >
        Side Projects
      </h2>

      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
