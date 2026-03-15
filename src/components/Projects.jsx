import React from 'react'
import ProjectCard from './ProjectCard'

// Figma asset URLs (valid 7 days from design pull)
const dartIcon = 'https://www.figma.com/api/mcp/asset/c6076837-f422-408d-869d-26faee2fcb50'
const rustIcon = 'https://www.figma.com/api/mcp/asset/9d97250a-5f6d-46c2-9847-eb3ea05b8744'

const projects = [
  {
    name: 'Doth',
    description: 'A customizable OAuth 2.0 multi-provider library for dart servers.',
    githubUrl: 'https://github.com/tobibamidele/doth',
    icon: dartIcon,
  },
  {
    name: 'Idan',
    description: "Fast, lightweight, authentication library built on Go's net/http ideal for side projects.",
    githubUrl: 'https://github.com/tobibamidele/idan',
    icon: null,
  },
  {
    name: 'mem_visualizer',
    description: 'A TUI that visualizes live memory usage across system processes with color-coded RSS stats and fuzzy search.',
    githubUrl: 'https://github.com/tobibamidele/mem_visualizer',
    icon: rustIcon,
  },
  {
    name: 'Dartbuster',
    description: 'A fast web bruteforcing tool written in dart. Inspired by gobuster and feroxbuster.',
    githubUrl: 'https://github.com/tobibamidele/dartbuster',
    icon: dartIcon,
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
