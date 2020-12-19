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
          <GalleryItem title="PLACEHOLDER" text="lorem ipsum nanananaiuiums" image="gallery1.jpg"/>
        </main>
      </div>
    )
}