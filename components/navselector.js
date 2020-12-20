import {useRouter} from 'next/router'
import styles from '../components/navSelector.module.css'
import Link from 'next/link'
function highlight (props) {
    let router = useRouter()
    if(router.pathname === props.title){
         return(<div><Link href={props.title}><b className={styles.toplist}>{props.name}</b></Link></div>)
        }
     else {
        return(<div className={styles.toplist}><Link  href={props.title}>{props.name}</Link></div>)
    }
}
export default highlight