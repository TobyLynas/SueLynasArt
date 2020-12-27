import styles from './craftingBox.module.css'
function boxImg(props) {
    if (props.side==='right'){
        return(
            <div className={styles.box}>
                <img className={styles.img} src={props.img} />
                <div className={styles.childBox}>
                    {props.title}<br /><br />
                    <div className={styles.text}>{props.text}</div>
                </div>
            </div>
        )
    }

else {
    return(
        <div className={styles.box}>
            <img className={styles.imgLeft} src={props.img} />
            <div className={styles.childBoxLeft}>
                {props.title}<br /><br />
                <div className={styles.text}>{props.text}</div>
            </div>
        </div>
    )
}
}
    

export default boxImg