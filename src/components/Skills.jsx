import styles from './Skills.module.css'

const SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Rust', 'Shell', 'HTML5', 'CSS'],
  },
  {
    category: 'Frameworks & Runtimes',
    items: ['Node.js', 'Express', 'Spring Boot', 'React', 'Vue.js', 'Apache Cordova'],
  },
  {
    category: 'Data & Tooling',
    items: ['MariaDB', 'MySQL', 'MongoDB', 'Docker', 'Linux', 'Git', 'Claude Code', 'OpenAI Codex', 'Unreal Engine'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>🛠 Tech Stack</h2>
      <div className={styles.groups}>
        {SKILLS.map(group => (
          <div key={group.category}>
            <div className={styles.groupLabel}>{group.category}</div>
            <div className={styles.tags}>
              {group.items.map(item => (
                <span
                  key={item}
                  className={styles.tag}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
