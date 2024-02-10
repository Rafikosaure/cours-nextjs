import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  const id = "article"

  return (
    <div className={styles.container}>
      <h1>HELLO NEXT JS !</h1>
      
      <Link href={`/blog/${id}`}>
        Blog
      </Link>
    </div>
  )
}
