import '../styles/globals.css'
import styles from '../styles/index.module.css'
function MyApp({ Component, pageProps }) {
  return (
    <div>
    <div className={styles.topBar}>
      <h1 className={styles.title}>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
          BEE CREATIVE
      </h1>
      <ul className={styles.toplist}>
        <li className={styles.list}>Nav1</li>
        <li className={styles.list}>Nav2</li>
        <li className={styles.list}>Nav3</li>
        <li className={styles.list}>Nav4</li>
      </ul>
    </div>
    <Component {...pageProps}/>
    </div>
 )
}

export default MyApp
