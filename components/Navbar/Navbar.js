import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <>
      <div className={styles.navbar}>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/listes"}>Listes</Link>
        <Link href={"/swapi"}>Swapi</Link>
        <Link href={"/cours"}>BTC</Link>
      </div>
    </>
  )
}
