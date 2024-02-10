import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>HELLO NEXT JS !</h1>
      
      <Link href="/blog/article">
        Blog
      </Link>
    </div>
  )
}
