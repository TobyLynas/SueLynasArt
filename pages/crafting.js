import Head from 'next/head'
import styles from '../styles/crafting.module.css'
import BoxImg from '../components/craftingBox'

export default function newPage(){
  return(
    <div>
        <Head>
            <title>Crafting!</title>
        </Head>
        <main>
          <BoxImg></BoxImg>
        </main>
    </div>
  )
}