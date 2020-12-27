import styles from './boxImg.module.css'
function boxImg(props) {
    const isRight = props.align=='right'
    return(
        <div className={styles.box}>
            <img className={isRight?styles.img:styles.imgLeft} src={props.img} />
            <div className={isRight?styles.childBox:styles.childBoxLeft}>
                {props.title}<br /><br />
                <div className={styles.text}>{props.text}</div>
            </div>
        </div>
    )
    }
    

export default boxImg