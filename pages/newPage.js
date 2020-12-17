import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function newPage(){
  return(
      <div>
        <Head>
            <title>Crafting stuff</title>
        </Head>

        <main>
            <h1 className={styles.title}>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
            </style>
              BEE CREATIVE
              
            </h1>
        </main>
      </div>
    )
}