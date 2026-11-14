import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>📋 About Me</h2>
        <p className={styles.text}>
          I am a Hong Kong Metropolitan University Computer Science graduate based in Hong Kong.
          I build practical software end-to-end, with a focus on JavaScript, Node.js and React Native.
          My projects include LockMatch, an MBTI-based social platform, plus tools for public transport,
          health tracking and Cantonese voice input.
        </p>
      </div>
    </section>
  )
}
