import React from 'react'
import { useRouter } from 'next/router'

export default function Article() {

  const router = useRouter()

  console.log(router)
  console.log(router.route)
  console.log(router.asPath)
  console.log(router.query)

  return (
    <div>
      <h1>10 plats savoureux</h1>
    </div>
  )
}
