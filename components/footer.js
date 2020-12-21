import styles from './footer.module.css'
import Link from 'next/link'
function Footer(props) {
    return(
        <div className={styles.footContainer}>
            <div className={styles.footer}>
                <div className={styles.footFBox}>
                    <Link href="https://www.facebook.com/beecreativeandbuzz"><img src="/facebook.svg" alt="FaceBook Logo" className={styles.logo} /></Link>
                    <Link href="https://www.instagram.com/beecreative_and_buzz/"><img src="/instagram.svg" alt="Instagram Logo" className={styles.logo} /></Link>
                    <Link href="https://www.etsy.com/uk/shop/beecreativeshop/"><img src="/etsy.svg" alt="Etsy Logo" className={styles.logo} /></Link>
                </div>
            </div>
        </div>
    )
}
export default Footer