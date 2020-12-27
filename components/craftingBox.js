import styles from './craftingBox.module.css'

function boxImg(props) {
    return(
        <div className={styles.box}>
            <img className={styles.img} src={props.img} />
        </div>
    )
}

export default boxImg