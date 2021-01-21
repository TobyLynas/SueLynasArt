import Router from 'next/dist/next-server/lib/router/router'
import styles from '../components/scrollGallery.module.css'
import { useState } from 'react';

//picDir = ['1.png', '2.png']

function scrollGallery(props){
    const picDir = ['1.png', '2.png', '3.png']
    const [picIndex, setPicIndex] = useState(0);
    if (picIndex === 3) {
        setPicIndex(0)
    } if (picIndex===-1){
        setPicIndex(3)
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
                </div>
        </div>
    )
}

export default scrollGallery 