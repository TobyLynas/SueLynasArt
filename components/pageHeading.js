import styles from '../components/pageHeading.module.css'

function pageHeading(props) {
    return(
        <div className={styles.main}> 
            <div className={styles.box}>
                <div className={styles.title}>
                    {props.title}
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dui neque.</div>
                </div>
            </div>
        </div>
    )
}


export default pageHeading