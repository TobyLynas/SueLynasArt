import {useRouter} from 'next/router'

function highlight (props) {
    const router = useRouter()
    if (router.pathname === props.title) {
        return(<div>Success</div>)
    }
    else {
        return(<div>Failure</div>)
    }
}

export default highlight