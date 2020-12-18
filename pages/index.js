import Head from 'next/head'
import styles from '../styles/index.module.css'
import Gallery from '../components/gallery.js'

export default function index(){
  return(
      <div>
        <Head>
          <title>Test teeest</title>
        </Head>
        
        <main>
          <Gallery />
          <div className={styles.body}>In orci metus, egestas et ipsum ut, elementum ullamcorper magna. Suspendisse congue velit in turpis lacinia aliquet. Aliquam hendrerit vitae nisl at ornare. In quis magna nisi. Fusce suscipit turpis nec lacus feugiat rutrum. Integer semper turpis vitae justo fermentum, sed imperdiet odio cursus. Maecenas vitae ultricies ipsum, non tempor dolor. Maecenas ac pretium mauris. Aliquam at semper sem.</div>
        </main>
      </div>
    )
}