import styles from './footer.module.css'
import Link from 'next/link'
function Footer(props) {
    return(
        <div className={styles.footContainer}>
            <div className={styles.footer}>
                <div className={styles.footFBox}>
                    <div className={styles.enlarge}>
                        <Link href="https://www.facebook.com/beecreativeandbuzz"><a target="_blank"><img src="/facebook.svg" alt="FaceBook Logo" className={styles.logo}/></a></Link>
                    </div>
                    <div className={styles.enlarge}>
                        <Link href="https://www.instagram.com/beecreative_and_buzz/"><a target="_blank"><img src="/instagram.svg" alt="Instagram Logo" className={styles.logo}/></a></Link>
                    </div>
                    <div className={styles.enlarge}>
                        <Link href="https://www.etsy.com/uk/shop/beecreativeshop/"><a target="_blank"><img src="/etsy.svg" alt="Etsy Logo" className={styles.logo} /></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer