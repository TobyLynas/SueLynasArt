import styles from '../components/scrollGallery.module.css'

function scrollGallery(props){
    return(
        <div>
            <img className={styles.img}src='craftingImg.png'/>
            <div className={styles.childBox}>Lorem Ipsum</div>
            <div className={styles.buttons}>
                <div className={styles.LButton}>
                    <img src='LTri.svg'/>
                </div>
                <div className={styles.RButton}>
                    <img src='RTri.svg'/>
                </div>
            </div>
        </div>
    )
}

export default scrollGallery