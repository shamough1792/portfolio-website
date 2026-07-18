import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.badge}>OPEN TO WORK</span>
        <h1 className={styles.name}>Kin Wang Lam</h1>
        <p className={styles.tagline}>Full-Stack Developer</p>
        <p className={styles.bio}>
          CS student at Hong Kong Metropolitan University. From full-stack web
          to Unreal Engine, I love turning ideas into working software.
        </p>
        <div className={styles.actions}>
          <a className={styles.btnPrimary} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">
            GitHub →
          </a>
          <a className={styles.btnSecondary} href="https://www.linkedin.com/in/kin-wang-lam/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.avatar} src="/portfolio-website/icon.jpg" alt="avatar" />
      </div>
    </section>
  )
}
