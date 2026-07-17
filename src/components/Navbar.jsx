import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: '關於', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '專案', href: '#projects' },
  { label: '學歷', href: '#education' },
  { label: '聯絡', href: '#contact' },
]

export default function Navbar() {
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
              <button className={styles.link} onClick={() => handleClick(item.href)}>
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
