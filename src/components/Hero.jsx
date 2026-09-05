import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.eyebrow}>HELLO, I'M KIN WANG LAM <span>✦</span></span>
        <h1 className={styles.name}>Building digital<br /><em>experiences</em> that matter.</h1>
        <p className={styles.tagline}>Full-Stack Developer · Hong Kong</p>
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
        <div className={styles.meta}><span><b>05</b> featured projects</span><span><b>2026</b> CS graduate</span></div>
      </div>
      <div className={styles.right}>
        <div className={styles.orbit}><div className={styles.orbitDot} /><img className={styles.avatar} src="/portfolio-website/icon.jpg" alt="Kin Wang Lam" /></div>
      </div>
    </section>
  )
}
