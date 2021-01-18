import Router from 'next/dist/next-server/lib/router/router'
import { useState } from 'react'
import styles from '../components/scrollGallery.module.css'

function scrollGallery(props){
    function handleClick() {
        console.log('Win')
    }
    
    /*const [photoIndex, setPhotoIndex] = useState(0)       () => handleClick()
    console.log(photoIndex)       setPhotoIndex(photoIndex+1)*/
        return(
        <div className={styles.page}>
            <div className={styles.container}>
                <img className={styles.img}src='craftingImg.png'/>
                <div className={styles.textBox}>Lorem Ipsum
                    <div className={styles.buttons}>
                        <button type ='button' onClick={()=>{handleClick()}} className={styles.LButton}>
                            <img src='LTri.svg'/>
                        </button>
                        <button type='button'  className={styles.RButton}>
                            <img src='RTri.svg'/>
                        </button>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default scrollGallery 