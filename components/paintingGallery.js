import styles from '../components/paintingGallery.module.css'

function paintingGallery(props) {
    return(
        <div className={styles.main}>
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
            <div className={styles.item3}></div>

        </div>
    )
}

export default paintingGallery