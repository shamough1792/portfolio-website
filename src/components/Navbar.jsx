import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>
        <span className={styles.logo}>&lt;SG /&gt;</span>

        <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <button className={`${styles.link} ${activeSection === item.href.replace('#', '') ? styles.linkActive : ''}`} onClick={() => handleClick(item.href)}>
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a className={styles.resumeBtn} href="/portfolio-website/resume.pdf" download>
              Resume ↓
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
