import projects from '../data/projects.js'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.title}>📂 專案</h2>
        <a className={styles.ghLink} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </div>
      <div className={styles.list}>
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${i % 2 === 1 ? styles.offsetRight : ''}`}
          >
            <div className={p.accent ? styles.accentBar : styles.accentBarMuted} />
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <span className={styles.cardYear}>{p.year}</span>
              </div>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map(tag => (
                  <span key={tag} className={`${styles.tag} ${p.accent ? styles.tagActive : ''}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
