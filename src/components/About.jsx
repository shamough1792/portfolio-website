import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>📋 About Me</h2>
        <p className={styles.text}>
          Based in Hong Kong, studying Computer Science at Hong Kong Metropolitan University.
          Skilled in full-stack web development with JavaScript/Node.js and Java, with
          experience in Unreal Engine 4 game development. Built real-world applications
          including a transportation ETA tool and a blood pressure tracking system.
        </p>
      </div>
    </section>
  )
}
