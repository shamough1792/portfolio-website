import styles from './EducationContact.module.css'

export default function EducationContact() {
  return (
    <section id="education" className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className={styles.title}>🎓 Education</h2>
        <div className={styles.timeline}>
          <div className={styles.line} />
          <div>
            <div className={styles.school}><a href="https://www.hkmu.edu.hk/" target="_blank" rel="noopener noreferrer">Hong Kong Metropolitan University (HKMU)</a></div>
            <div className={styles.degree}><a href="https://www.hkmu.edu.hk/st/tc/computing/programmes/full-time/3-credit-unit/bschcsjs/" target="_blank" rel="noopener noreferrer">B.Sc. in Computer Science</a></div>
            <div className={styles.period}>2024 – 2026</div>
          </div>
        </div>
      </div>
      <div id="contact" className={styles.block}>
        <h2 className={styles.title}>📬 Contact</h2>
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
          <span className={styles.link}>
            📞 <a className={styles.linkValue} href="tel:+85251687587">+852 5168 7587</a>
          </span>
        </div>
      </div>
    </section>
  )
}
