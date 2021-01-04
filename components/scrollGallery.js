import styles from '../components/scrollGallery.module.css'

function scrollGallery(props){
    return(
        <div>
            <img className={styles.img}src='craftingImg.png'/>
            <div className={styles.childBox}>Lorem Ipsum</div>
        </div>
    )
}

export default scrollGallery