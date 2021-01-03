import styles from '../components/contactMe.module.css'

function contactMe(props){
    return(
        <div className={styles.main}>
            <div className={styles.topBox}>
                Sue Lynas - I’m a designer and maker, I love to draw, paint and make things. I’m always happy to chat if you have a special commission in mind.
            </div>
            <div className={styles.gap}/>
            <div className={styles.bottomBox}>
                CONTACT ME <br/>
                <div className={styles.subText}>
                    07845053275<br/>
                    <br/>
                    beecreativeoffice@gmail.com
                </div>
            </div>
        </div>  
    )
}

export default contactMe