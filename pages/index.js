import Head from 'next/head'
import styles from '../styles/index.module.css'
import ScrollGallery from '../components/scrollGallery.js'
import ContactMe from '../components/contactMe.js'

export default function index(){
  return(
      <div>
        <Head>
          <title>Bee Creative</title>
        </Head>
        
        <main>
          <div className={styles.scrollGallery}>
            <ScrollGallery/>
          </div>
          <div className={styles.contactMe}>
            <ContactMe/>
          </div>
        </main>
      </div>
    )
}