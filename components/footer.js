import styles from './footer.module.css'
function Footer(props) {
    return(
        <div className={styles.footContainer}>
        <div className={styles.footer}>
        <div className={styles.footFBox}>
            <img src="/facebook.svg" alt="FaceBook Logo" className={styles.logo} />
            <img src="/instagram.svg" alt="Instagram Logo" className={styles.logo} />
            <img src="/etsy.svg" alt="Etsy Logo" className={styles.logo} />
        </div>
        </div>
        </div>
    )
}
export default Footer