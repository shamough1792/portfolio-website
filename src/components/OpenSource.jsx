import styles from './OpenSource.module.css'

const CONTRIBUTIONS = [
  'Investigate issues with AI-assisted analysis, then implement and test fixes.',
  'Review AI-generated web prototypes and guide feature implementation through iteration.',
  'Build code-based multiplayer host and join flows, resilient hosting and dynamic room switching.',
  'Create Traditional Chinese localization, improve the pause menu and add multi-point waypoint routing.',
  'Fix vehicle compatibility issues including HOF destinations, rear doors and staged ignition.',
]

export default function OpenSource() {
  return (
    <section id="open-source" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Open Source Contributions</h2>
          <p className={styles.subtitle}>A separate part of my work beyond personal projects.</p>
        </div>
        <div className={styles.stats}>
          <strong>40+</strong><span>merged PRs</span>
          <strong>#5</strong><span>contributor rank</span>
        </div>
      </div>
      <article className={styles.contribution}>
        <div className={styles.projectHeading}>
          <div>
            <span className={styles.eyebrow}>RUST · SIMULATOR REBUILD</span>
            <h3>openOMSI</h3>
          </div>
          <a href="https://github.com/openOMSI-org/openOMSI" target="_blank" rel="noopener noreferrer" aria-label="View openOMSI on GitHub">View project ↗</a>
        </div>
        <p className={styles.description}>An open-source rebuild of OMSI 2 in Rust, designed to remain compatible with existing maps and mods. My contributions span bug fixes, feature design, multiplayer, localization and vehicle compatibility.</p>
        <ul className={styles.list}>
          {CONTRIBUTIONS.map(item => <li key={item}>{item}</li>)}
        </ul>
        <a className={styles.pullRequests} href="https://github.com/openOMSI-org/openOMSI/pulls?q=is%3Apr+author%3Ashamough1792" target="_blank" rel="noopener noreferrer">
          Browse my openOMSI pull requests <span aria-hidden="true">↗</span>
        </a>
      </article>
    </section>
  )
}
