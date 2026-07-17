import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>📋 About Me</h2>
        <p className={styles.text}>
          Computer Science Graduate from Hong Kong Metropolitan University, based in Hong Kong.
          Skilled in full-stack development with JavaScript/Node.js, Java, and React Native.
          Developed LockMatch, an innovative MBTI-based social matching application, along with other
          real-world solutions including a transportation ETA tool and a health tracking system.
        </p>
      </div>
    </section>
  )
}
