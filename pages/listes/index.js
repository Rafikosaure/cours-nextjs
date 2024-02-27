import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default function Listes(props) {

    console.log(props)

    return (
        <div className='container'>
            <h1 className='my-4'>Les listes de Vocabulaire</h1>
            <ul class="list-group">
                {props.array.map(item => (
                <li key={uuidv4()} class="list-group-item"><Link href={`/listes/${item.name}`}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {

    const data = await import(`../../data/lists.json`)
    const array = data.englishList
    
    return {
        props: {
            array
        }
    }
}