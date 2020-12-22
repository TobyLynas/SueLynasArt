import {useRouter} from 'next/router'
import styles from '../components/navSelector.module.css'
import Link from 'next/link'
function Highlight (props) {
    let router = useRouter()
    if(router.pathname === props.title){
         return(<div><Link href={props.title}><b className={styles.toplist}>{props.name}</b></Link></div>)
        }
     else {
        return(<div><Link href={props.title}><div className={styles.toplist}>{props.name}</div></Link></div>)
    }
}
export default Highlight