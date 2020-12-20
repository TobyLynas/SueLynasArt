import Image from 'next/image'
import styles from './gallery.module.css'



function GalleryItem (props) {
  return (
    <div className={styles.container}>
        <img src={props.image} className={styles.galImage}></img>
        <div className={styles.galTextBox}>
          <div className={styles.galHeading}>{props.title}</div>
          <div className={styles.galText}>
            {props.text}
          </div>
        </div>
      </div>
  )
}


export default GalleryItem
