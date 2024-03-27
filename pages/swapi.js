import React from 'react'
import styles from '../styles/Home.module.css'
import { v4 as uuidv4 } from 'uuid'

export default function Swapi(props) {

  console.log(props.data.results)

  return (
    <div>
        {/* <h1>{props.data.name}</h1> */}
        <h1 className={styles.titre}>STAR WARS API</h1>
        <table className={styles.tableau}>
          <tbody>
            {props.data.results.map(person => (
              <tr key={uuidv4()}>
                <td>{person.name}</td>
                <td>{person.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=
// https://swapi.dev/api/person/

export async function getStaticProps() {

  const person = await fetch("https://swapi.dev/api/people/")
  const data = await person.json()
  return {
    props: {
      data
    }// , revalidate: 5
  }
}