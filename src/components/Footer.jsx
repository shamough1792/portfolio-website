import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} shamough1792</span>
      <span>Built with React · Hosted on GitHub Pages</span>
    </footer>
  )
}
