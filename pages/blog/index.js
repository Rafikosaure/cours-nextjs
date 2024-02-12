import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <h1>Le blog</h1>
      <Link href={`/blog/10 plats basques`}>
        10 plats basques
      </Link>
    </div>
  )
}
