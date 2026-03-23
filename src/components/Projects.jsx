import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'VaultPapi',
    description: 'A self-hostable zero-knowledge secure password manager.',
    githubUrl: 'https://github.com/tobibamidele/vaultpapi',
    icon: '/icons/go_icon.svg',
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
