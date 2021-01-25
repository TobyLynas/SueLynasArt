import styles from '../components/scrollGallery.module.css'
import { useState } from 'react';


const ScrollGalleryButton = (props) => {
    return (
        <button onClick={props.handleClick} className={props.class}> <img className={styles.childImg} src={props.image}/> </button>
      )
}
function scrollGallery(props){
    const picDir = ['1.png', '2.png', '3.png', 'craftingImg.png', 'crafting.webp']
    const textArr = ['Lorem ipsum', 'Lorem Ipsum 2', 'Lorem ipsum 3', 'Lorem ispum 4', 'Lorem ipsum 5']
    const titleArr = ['Title 1', ' title 2', 'title3', 'title 4','title 5']
    const [picIndex, setPicIndex] = useState(0);
    if (picIndex === picDir.length) {
        setPicIndex(0)
    } if (picIndex===-1){ 
        setPicIndex(picDir.length-1)
    } 
    return(
    <div className={styles.page}>
        <div className={styles.container}>
            <img className={styles.img} src= {picDir[picIndex]} />
            <div className={styles.textBox}>{titleArr[picIndex]} <br/>
            <div className={styles.subtext}>{textArr[picIndex]}</div>
            </div>
            <div className={styles.selBar}>
                {picDir.map((img, i) => <ScrollGalleryButton class={img===picDir[picIndex]?styles.found:styles.barBut}  handleClick={() => {setPicIndex(i)}} image={img} />)}
            </div>
            <div className={styles.buttons}>
                <button type ='button' onClick={() => setPicIndex(picIndex - 1)} className={styles.LButton}>
                    <img className={styles.butImg} src='LTri.svg'/>
                </button>
                <button type='button' onClick={() => setPicIndex(picIndex + 1)} className={styles.RButton}>
                    <img className={styles.butImg} src='RTri.svg'/>
                </button>
            </div>
        </div>
    </div>
    )
}

export default scrollGallery 