import styles from '../components/pageHeading.module.css'

function pageHeading(props) {
    return(
        <div className={styles.main}> 
            <div className={styles.box}>
                <div className={styles.title}>
                    {props.title}
                <div className={styles.text}>{props.text}</div>
                </div>
            </div>
        </div>
    )
}


export default pageHeading