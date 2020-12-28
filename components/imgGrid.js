import styles from '../components/imgGrid.module.css'
function Item(props){
    return(
        <img className={styles.image} src={props.src}></img>
    )
}
function imgGrid(props) {
    return(
        <div className={styles.main}>
            {props.imgSources.map((imgSource) => (
                <Item src={imgSource}></Item>
            ))}
        </div>
    )
}


export default imgGrid