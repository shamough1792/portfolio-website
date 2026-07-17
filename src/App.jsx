import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import EducationContact from './components/EducationContact.jsx'
import Footer from './components/Footer.jsx'
import styles from './App.module.css'

const SECTION_IDS = ['about', 'skills', 'projects', 'education']

export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2

      // At the bottom of page, highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection('education')
        return
      }

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = top + rect.height
        if (top <= scrollPos && bottom > scrollPos) {
          setActiveSection(id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main className={styles.container}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationContact />
      </main>
      <Footer />
    </>
  )
}
