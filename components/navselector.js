import {useRouter} from 'next/router'


function highlight (props) {
    let router = useRouter()
    console.log(router.pathname)
    if(router.pathname === props.title){
         return(<div><b>{props.name}</b></div>)
        }
     else {
        return(<div>{props.name}</div>)
    }
}
export default highlight