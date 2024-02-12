import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Article() {

  const router = useRouter()

  console.log(router)
  console.log(router.route)
  console.log(router.asPath)
  console.log(router.query)

  const pushFonction = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </Head>
      <div>
        <h1>10 plats basques</h1>
        <button onClick={pushFonction}>Push to Home</button>
      </div>
    </>
    
  )
}
