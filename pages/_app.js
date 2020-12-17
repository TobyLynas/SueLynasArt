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
      <div>
        <img src="/honeycomb.svg" className={styles.honeycomb} />
        <div className={styles.body}>In orci metus, egestas et ipsum ut, elementum ullamcorper magna. Suspendisse congue velit in turpis lacinia aliquet. Aliquam hendrerit vitae nisl at ornare. In quis magna nisi. Fusce suscipit turpis nec lacus feugiat rutrum. Integer semper turpis vitae justo fermentum, sed imperdiet odio cursus. Maecenas vitae ultricies ipsum, non tempor dolor. Maecenas ac pretium mauris. Aliquam at semper sem.</div>
      </div>
      <div className={styles.footContainer}>
        <div className={styles.footer}>
          <div className={styles.footFBox}>
            <img src="/facebook.svg" alt="FaceBook Logo" className={styles.logo} />
            <img src="/instagram.svg" alt="Instagram Logo" className={styles.logo} />
            <img src="/etsy.svg" alt="Etsy Logo" className={styles.logo} />
          </div>
        </div>
      </div>
    </div>
 )
}

export default MyApp
