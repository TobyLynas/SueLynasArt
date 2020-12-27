import '../styles/globals.css'
import styles from '../styles/index.module.css'
import Head from 'next/head'
import Footer from '../components/footer.js'
import Topnav from '../components/topNav.js'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topnav title="Bee Creative" />
      <div className={styles.pagePadding}>
         <Component {...pageProps}/>
      </div>
      <div>
        <img src="/honeycomb.svg" className={styles.honeycomb} />
      </div>
    <Footer  />
    </div>
 )
}

export default MyApp
