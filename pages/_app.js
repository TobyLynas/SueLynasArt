import '../styles/globals.css'
import styles from '../styles/index.module.css'
import Head from 'next/head'
import Highlight from '../components/navselector.js'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topBar}>
        <h1 className={styles.title}>
            BEE CREATIVE
        </h1>
        <ul className={styles.toplist}>
          <li className={styles.list}><Highlight title="/" name="Home" id="index.js"/></li>
          <li className={styles.list}><Highlight title="/painting" name="Painting" id="painting.js"/></li>
          <li className={styles.list}><Highlight title="/organising" name="Organisng" id="organising.js"/></li>
          <li className={styles.list}><Highlight title="/crafting" name="Crafting" id="crafting.js"/></li>
        </ul>
      </div>
      <div className={styles.pagePadding}></div>
      <Component {...pageProps}/>
      <div>
        <img src="/honeycomb.svg" className={styles.honeycomb} />
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
