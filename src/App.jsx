import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return (
    <div className="mx-[122px] max-md:mx-[38px]">
      <hr style={{ borderColor: '#2a2a2a', borderTopWidth: '1px', margin: 0 }} />
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-geist">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </div>
  )
}
