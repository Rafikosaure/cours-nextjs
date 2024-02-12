import styles from '../styles/Home.module.css'
// import Link from 'next/link'
import Head from 'next/head'


export default function Home() {

  const id = "article"

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Le blog de la cuisine basque</title>
      </Head>
      <div className={styles.container}>
        <h1>HELLO NEXT JS !</h1>
        
        {/* <Link href={`/blog/${id}`}>
          Blog
        </Link> */}
        <button className='btn btn-primary'>Cliquez ici</button>
      </div>
    </>
  )
}
