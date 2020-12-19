import Image from 'next/image'
import styles from './gallery.module.css'
function GalleryItem () {
  return (
    <div className={styles.container}>
        <img src='gallery1.jpg' className={styles.imageOne}></img>
        <div className={styles.textBox}>
          <div className={styles.heading}>SubHeading
          <body className={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </body>
          </div>
        </div>
      </div>
  )
}

export default GalleryItem
