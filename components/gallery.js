import Image from 'next/image'
import styles from './gallery.module.css'
function GalleryItem () {
  return (
    <div className={styles.container}>
        <img src='gallery1.jpg' className={styles.imageOne}></img>
        <div className={styles.imageText}>Text </div>
      </div>
  )
}

export default GalleryItem
