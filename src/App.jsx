import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import EducationContact from './components/EducationContact.jsx'
import Footer from './components/Footer.jsx'
import styles from './App.module.css'

const SECTION_IDS = ['about', 'skills', 'projects', 'education', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2

      // At the bottom of page, highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection('contact')
        return
      }

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = top + rect.height
        if (top <= scrollPos && bottom > scrollPos) {
          // education & contact are side-by-side — pick by horizontal position
          if (id === 'education' || id === 'contact') {
            const contactRect = document.getElementById('contact')?.getBoundingClientRect()
            if (contactRect) {
              setActiveSection(window.innerWidth / 2 >= contactRect.left ? 'contact' : 'education')
              break
            }
          }
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
