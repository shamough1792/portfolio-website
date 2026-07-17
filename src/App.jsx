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
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
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
