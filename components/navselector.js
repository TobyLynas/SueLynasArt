import {useRouter} from 'next/router'
import styles from '../components/navSelector.module.css'

function highlight (props) {
    let router = useRouter()
    if(router.pathname === props.title){
         return(<div><b className={styles.toplist}>{props.name}</b></div>)
        }
     else {
        return(<div className={styles.toplist}>{props.name}</div>)
    }
}
export default highlight