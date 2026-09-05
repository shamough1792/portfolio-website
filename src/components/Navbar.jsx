import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education/Contact', href: '#education' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

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
        <span className={styles.logo}>
          <img src="/portfolio-website/icon.jpg" alt="" className={styles.logoImg} />
        </span>

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
            <button
              className={styles.themeBtn}
              onClick={() => setDarkMode(value => !value)}
              aria-label={darkMode ? '切換至淺色模式' : '切換至深色模式'}
              title={darkMode ? '淺色模式' : '深色模式'}
            >
              {darkMode ? '☼' : '☾'}
            </button>
          </li>
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
