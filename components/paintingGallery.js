import styles from '../components/paintingGallery.module.css'
function Item(props){
    return(
        <img onclick={styles.enlarge} className={styles.image} src={props.src}></img>
    )
}
function paintingGallery(props) {
    return(
        <div className={styles.main}>
            {props.imgSources.map((imgSource) => (
                <Item src={imgSource}></Item>
            ))}
        </div>
    )
}


export default paintingGallery