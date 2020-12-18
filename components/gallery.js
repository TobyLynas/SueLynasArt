import Image from 'next/image'
import styles from './gallery.module.css'
function GalleryItem () {
  return (
    <div >
      <img src='gallery1.jpg' className={styles.imageOne}></img>
    </div>
  )
}

export default GalleryItem

/*      <Image
src="/gallery1.jpg"
width={450}
height={350}
layout={`intrinsic`}
className={imageOne}
/> */