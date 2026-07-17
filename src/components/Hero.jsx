import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.badge}>OPEN TO WORK</span>
        <h1 className={styles.name}>Shamough</h1>
        <p className={styles.tagline}>Full-Stack Developer</p>
        <p className={styles.bio}>
          香港都會大學計算機科學學生。從 Web 到遊戲引擎，
          喜歡把想法變成能動的東西。開源信仰者。
        </p>
        <div className={styles.actions}>
          <a className={styles.btnPrimary} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">
            GitHub →
          </a>
          <a className={styles.btnSecondary} href="#contact">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.avatar}>🧑‍💻</div>
      </div>
    </section>
  )
}
