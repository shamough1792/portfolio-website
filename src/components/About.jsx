import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>📋 關於我</h2>
        <p className={styles.text}>
          現居香港，就讀於香港都會大學計算機科學系。擅長全端 Web 開發，
          主要使用 JavaScript/Node.js 與 Java，也有 Unreal Engine 4 遊戲開發經驗。
          從零打造過交通 ETA 查詢、血壓追蹤系統等實際應用。
        </p>
      </div>
    </section>
  )
}
