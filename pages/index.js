import Head from 'next/head'
import styles from '../styles/index.module.css'
import GalleryItem from '../components/gallery.js'
import ContactMe from '../components/contactMe.js'

export default function index(){
  return(
      <div>
        <Head>
          <title>Bee Creative</title>
        </Head>
        
        <main>
          <div className={styles.gallery}>
            <GalleryItem title="Projects" text="Check out my latest big projects and large works!" image="gallery1.jpg"/>
            <GalleryItem title="Crafting" text="Crafting of all kinds! Have a look at my adorable festive decorations or browse pre-made kits!" image="crafting.webp"/>
            <GalleryItem title="Painting" text="The center for all my painting projects and sessions! Click here to give it a Van Gough!" image="painting.jpg"/>
          </div>
          <ContactMe/>
        </main>
      </div>
    )
}