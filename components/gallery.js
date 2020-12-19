import Image from 'next/image'
import styles from './gallery.module.css'
function GalleryItem () {
  return (
    <div className={styles.container}>
        <img src='gallery1.jpg' className={styles.galImage}></img>
        <div className={styles.galTextBox}>
          <div className={styles.galHeading}>SubHeading</div>
          <div className={styles.galText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
  )
}

export default GalleryItem
