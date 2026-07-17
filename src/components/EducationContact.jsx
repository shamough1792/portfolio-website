import styles from './EducationContact.module.css'

export default function EducationContact() {
  return (
    <section id="education" className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className={styles.title}>🎓 學歷</h2>
        <div className={styles.timeline}>
          <div className={styles.line} />
          <div>
            <div className={styles.school}>香港都會大學 (HKMU)</div>
            <div className={styles.degree}>計算機科學 學士</div>
            <div className={styles.period}>2022 – 2025</div>
          </div>
        </div>
      </div>
      <div id="contact" className={styles.block}>
        <h2 className={styles.title}>📬 聯絡</h2>
        <div className={styles.links}>
          <span className={styles.link}>
            🐙 <a className={styles.linkValue} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">github.com/shamough1792</a>
          </span>
          <span className={styles.link}>
            💼 <a className={styles.linkValue} href="https://www.linkedin.com/in/kin-wang-lam/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
          <span className={styles.link}>
            📧 <a className={styles.linkValue} href="mailto:kinwanglam@gmail.com">kinwanglam@gmail.com</a>
          </span>
        </div>
      </div>
    </section>
  )
}
