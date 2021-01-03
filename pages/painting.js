import Head from 'next/head'
import styles from '../styles/painting.module.css'
import PageHeading from '../components/pageHeading.js'

export default function newPage(){
  return(
    <div>
        <Head>
            <title>Painting!</title>
        </Head>
        <main className={styles.page}>
          <PageHeading title="Painting!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dui neque."></PageHeading>
        </main>
    </div>
  )
}