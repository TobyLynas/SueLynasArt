import Router from 'next/dist/next-server/lib/router/router'
import styles from '../components/scrollGallery.module.css'
import * as React from 'react'
import componentDidMount from 'react';
import setState from 'react'
import forceUpdate from 'react'
import { useState } from 'react';

//picDir = ['1.png', '2.png']

function scrollGallery(props){
    const [picIndex, setPicIndex] = useState(1);
    
        return(
        <div className={styles.page}>
            <div className={styles.container}>
                <img className={styles.img} src= {picIndex + '.png'} />
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