import {useRouter} from 'next/router'

function highlight (props) {
    const router = useRouter()
    return(router.pathname)
}

export default highlight