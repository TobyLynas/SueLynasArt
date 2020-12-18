import Image from 'next/image'
import styles from './gallery.module.css'
function GalleryItem () {
  return (
    <div >
      <Image
      src="/gallery1.jpg"
      className={styles.gallery}
      width={450}
      height={350}
      />
    </div>
  )
}

export default GalleryItem