import styles from '../components/scrollGallery.module.css'
import { useState } from 'react';

function scrollGallery(props){
    const picDir = ['1.png', '2.png', '3.png']
    const [picIndex, setPicIndex] = useState(0);
    if (picIndex === 3) { //value should be last index number of picDir
        setPicIndex(0)
    } if (picIndex===-1){ 
        setPicIndex(2) //value should be last index number of picDirs - 1 to account for arr indexing
    } 
    
    return(
    <div className={styles.page}>
        <div className={styles.container}>
            <img className={styles.img} src= {picDir[picIndex]} />
            <div className={styles.textBox}>Lorem Ipsum
                <div className={styles.buttons}>
                    <button type ='button' onClick={() => setPicIndex(picIndex - 1)} className={styles.LButton}>
                        <img src='LTri.svg'/>
                    </button>
                    <button type='button' onClick={() => setPicIndex(picIndex + 1)} className={styles.RButton}>
                        <img src='RTri.svg'/>
                    </button>
                </div>
            </div>
            <div className={styles.selBar}>
                <button className={styles.But1} ><img className={styles.childImg} src='craftingImg.png' /></button>
                <button className={styles.But1} ></button>
                <button className={styles.But1} ></button>
                <button className={styles.But1} ></button>
                <button className={styles.But1} ></button>
                <button className={styles.But1} ></button>
                <button className={styles.But1} ></button>
                <button className={styles.But1} ></button>
                <button className={styles.But1} ></button>

            </div>
        </div>

    </div>
    )
}

export default scrollGallery 