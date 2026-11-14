import { useState } from 'react'
import { featuredProjects, otherProjects } from '../data/projects.js'
import styles from './Projects.module.css'

function ProjectList({ projects, openProject, toggleProject }) {
  return (
    <div className={styles.list}>
      {projects.map((project, index) => (
        <article key={project.title} className={styles.card}>
          <div className={index % 2 === 0 ? styles.accentBar : styles.accentBarMuted} />
          <div className={styles.cardBody}>
            <button className={styles.cardToggle} onClick={() => toggleProject(project.title)} aria-expanded={openProject === project.title}>
              <span className={styles.cardTop}>
                <span className={styles.cardTitle}>{project.title}</span>
                <span className={styles.cardMeta}>
                  {project.year && <span className={styles.cardYear}>{project.year}</span>}
                  <span className={styles.chevron}>{openProject === project.title ? '−' : '+'}</span>
                </span>
              </span>
            </button>
            <p className={styles.cardDesc}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
            </div>
            {openProject === project.title && (
              <div className={styles.details}>
                <p>{project.details}</p>
                <a className={styles.projectLink} href={project.url} target="_blank" rel="noopener noreferrer">
                  View project on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)
  const toggleProject = (title) => setOpenProject(current => current === title ? null : title)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.title}>📂 Projects</h2>
        <a className={styles.ghLink} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">View all on GitHub →</a>
      </div>
      <h3 className={styles.subheading}>Featured Projects</h3>
      <ProjectList projects={featuredProjects} openProject={openProject} toggleProject={toggleProject} />
      <details className={styles.moreProjects}>
        <summary className={styles.moreToggle}>
          <span>More Things I Have Built</span>
          <span className={styles.moreMeta}>
            <span className={styles.projectCount}>{otherProjects.length} projects</span>
            <span className={styles.moreIcon} aria-hidden="true">+</span>
          </span>
        </summary>
        <ProjectList projects={otherProjects} openProject={openProject} toggleProject={toggleProject} />
      </details>
    </section>
  )
}
