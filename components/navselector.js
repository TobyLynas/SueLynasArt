import {useRouter} from 'next/router'

function highlight () {
    const router = useRouter()
    return(router.pathname)
}

export default highlight