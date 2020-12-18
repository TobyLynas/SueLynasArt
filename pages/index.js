import Head from 'next/head'
import styles from '../styles/index.module.css'
import GalleryItem from '../components/gallery.js'

export default function index(){
  return(
      <div>
        <Head>
            <title>Crafting stuff</title>
        </Head>
        
        <main>
          <GalleryItem />
        </main>
      </div>
    )
}