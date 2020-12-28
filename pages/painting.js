import Head from 'next/head'
import styles from '../styles/painting.module.css'
import PaintingGallery from '../components/paintingGallery.js'

export default function newPage(){
  return(
    <div>
        <Head>
            <title>Painting!</title>
        </Head>
        <main className={styles.page}>
          <div className={styles.pageDisc}>This is the painting page!<br/><br/>A longer discriptipn goes here! Filler - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <PaintingGallery imgSources={['painting1.jpg','painting2.jpg','painting3.jpg','painting4.jpg','painting5.jpg','painting6.jpg']}></PaintingGallery>
        </main>
    </div>
  )
}