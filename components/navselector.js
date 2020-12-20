import {useRouter} from 'next/router'
import styles from '../components/navselector.module.css'

function highlight (props) {
    const router = useRouter()
    if (router.pathname = props.title) {
        return(<div className={styles.bold}>{props.name}</div>)
    }
    else {
        return(<div className={styles.normal}>{props.name}</div>)
    }
}

export default highlight