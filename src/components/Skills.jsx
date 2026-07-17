import styles from './Skills.module.css'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'EJS', 'HTML/CSS'],
    active: [true, true, true],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'JavaScript'],
    active: [true, true],
  },
  {
    category: 'Other',
    items: ['Unreal Engine 4', 'MySQL', 'Git'],
    active: [true, true, true],
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
              {group.items.map((item, i) => (
                <span
                  key={item}
                  className={`${styles.tag} ${group.active[i] ? styles.tagActive : ''}`}
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
