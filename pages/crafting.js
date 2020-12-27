import Head from 'next/head'
import styles from '../styles/crafting.module.css'
import BoxImg from '../components/craftingBox'

export default function newPage(){
  return(
    <div>
        <Head>
            <title>Crafting!</title>
        </Head>
        <main className={styles.main}>
          <BoxImg img="CraftingImg-1.png" title="Lorem Ipsum" text="Ut ipsum tortor, pulvinar eget enim nec, ultrices aliquam lorem. In vitae maximus lectus. Donec tristique, felis vitae dictum fringilla, arcu velit maximus dolor, at pretium arcu massa molestie nisl. Ut gravida, nulla nec lobortis faucibus, nunc odio imperdiet urna, ac malesuada nibh dolor vitae nisl"></BoxImg>
        </main>
    </div>
  )
}