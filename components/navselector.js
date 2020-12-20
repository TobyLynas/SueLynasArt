import {useRouter} from 'next/router'

function highlight (props) {
    const router = useRouter()
    if (router.pathname = props.title) {
        return(<div>{props.name}</div>)
    }
    else {
        return(<div>{props.name}</div>)
    }
}

export default highlight