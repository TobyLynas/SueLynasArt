import Router from 'next/dist/next-server/lib/router/router'
import { useState } from 'react'
import styles from '../components/scrollGallery.module.css'

function scrollGallery(props){
    let picIndex = 0
    function clickDown() {
        picIndex --;
        console.log(picIndex);
    }
    function clickUp() {
        picIndex ++;
        console.log(picIndex);
    }
        return(
        <div className={styles.page}>
            <div className={styles.container}>
                <img className={styles.img}src='craftingImg.png'/>
                <div className={styles.textBox}>Lorem Ipsum
                    <div className={styles.buttons}>
                        <button type ='button' onClick={()=>{clickDown()}} className={styles.LButton}>
                            <img src='LTri.svg'/>
                        </button>
                        <button type='button' onClick={()=>{clickUp()}} className={styles.RButton}>
                            <img src='RTri.svg'/>
                        </button>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default scrollGallery 