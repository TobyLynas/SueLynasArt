import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function newPage(){
  return(
      <div>
        <Head>
            <title>Crafting stuff</title>
        </Head>

        <main>
            <div className={styles.topBar}>
              <h1 className={styles.title}>
                <style>
                  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                </style>
                  BEE CREATIVE
              </h1>
              <ul className={styles.toplist}>
                <li className={styles.list}>Nav1</li>
                <li className={styles.list}>Nav2</li>
                <li className={styles.list}>Nav3</li>
                <li className={styles.list}>Nav4</li>
              </ul>
            </div>
        </main>
      </div>
    )
}