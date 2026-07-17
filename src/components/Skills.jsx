import styles from './Skills.module.css'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'EJS', 'HTML/CSS'],
    active: [true, false, false],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Java', 'Python', 'Shell'],
    active: [true, true, false, false],
  },
  {
    category: '其他',
    items: ['Unreal Engine 4', 'MySQL', 'Git'],
    active: [true, false, false],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>🛠 技術棧</h2>
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
