import styles from '../components/scrollGallery.module.css'
import { useState } from 'react';


const ScrollGalleryButton = (props) => {
    return (
        <button onClick={props.handleClick} className={props.class}> <img className={styles.childImg} src={props.image}/> </button>
      )
}
function scrollGallery(props){
    const picArr = ['1.png', '2.png', '3.png', 'craftingImg.png', 'crafting.webp']
    const textArr = ['Lorem ipsum', 'Lorem Ipsum 2', 'Lorem ipsum 3', 'Lorem ispum 4', 'Lorem ipsum 5']
    const titleArr = ['Title 1', ' title 2', 'title3', 'title 4','title 5']
    const [index, setPicIndex] = useState(0);
    if (index === picArr.length) {
        setPicIndex(0)
    } if (index===-1){ 
        setPicIndex(picArr.length-1)
    } 
    return(
    <div className={styles.page}>
        <div className={styles.container}>
            <img className={styles.img} src= {picArr[index]} />
            <div className={styles.textBox}>{titleArr[index]} <br/>
            <div className={styles.subText}>{textArr[index]}</div>
            </div>
            <div className={styles.selectorBar}>
                {picArr.map((img, i) => <ScrollGalleryButton class={img===picArr[index]?styles.found:styles.barButton}  handleClick={() => {setPicIndex(i)}} image={img} />)}
            </div>
            <div className={styles.buttons}>
                <button type ='button' onClick={() => setPicIndex(index - 1)} className={styles.LButton}>
                    <img className={styles.buttonImg} src='LTri.svg'/>
                </button>
                <button type='button' onClick={() => setPicIndex(index + 1)} className={styles.RButton}>
                    <img className={styles.buttonImg} src='RTri.svg'/>
                </button>
            </div>
        </div>
    </div>
    )
}

export default scrollGallery 