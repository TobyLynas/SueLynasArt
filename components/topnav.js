import styles from './topnav.module.css'
import Highlight from './navSelector.js'
function Topnav (props){
    return(
        <div className={styles.topBar}>
            <h1 className={styles.title}>
                {props.title}
            </h1>
            <ul className={styles.toplist}>
                <li className={styles.list}><Highlight title="/" name="Home" id="index.js"/></li>
                <li className={styles.list}><Highlight title="/painting" name="Painting" id="painting.js"/></li>
                <li className={styles.list}><Highlight title="/organising" name="Organisng" id="organising.js"/></li>
                <li className={styles.list}><Highlight title="/crafting" name="Crafting" id="crafting.js"/></li>
            </ul>
        </div>
    )
}
export default Topnav