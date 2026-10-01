import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Workflow from './components/Workflow.jsx'
import GitHub from './components/GitHub.jsx'
import Research from './components/Research.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useScrollFadeUp } from './hooks/useScrollFadeUp.js'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Apply dark class to html
  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
      html.style.background = '#080c10'
      document.body.style.background = '#080c10'
      document.body.style.color = '#e8edf2'
    } else {
      html.classList.remove('dark')
      html.style.background = '#f4f7fb'
      document.body.style.background = '#f4f7fb'
      document.body.style.color = '#1a2535'
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Init theme from storage
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') setDarkMode(false)
  }, [])

  // Scroll to top button
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Activate scroll fade-up after each render
  useScrollFadeUp()

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <GitHub />
        <Research />
        <Contact />
      </main>
      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-7 right-7 w-11 h-11 rounded-full bg-[#141c25] border border-[rgba(0,230,160,0.2)] text-[#8fa3b8] hover:bg-[#00e6a0] hover:text-black hover:border-[#00e6a0] flex items-center justify-center z-50 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
        title="Back to top"
      >
        ↑
      </button>
    </div>
  )
}
