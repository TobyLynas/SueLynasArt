import Head from 'next/head'
import styles from '../styles/index.module.css'
import Gallery from '../components/gallery.js'

export default function index(){
  return(
      <div>
        <Head>
          <title>Test teeest</title>
        </Head>
        
        <main>
          <Gallery />
        </main>
      </div>
    )
}