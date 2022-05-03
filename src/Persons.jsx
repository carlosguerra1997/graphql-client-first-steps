import { useEffect, useState } from "react"
import { gql, useLazyQuery } from "@apollo/client"

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      id
      name
      phone
    }
  }
`

export const Persons = ({ persons }) => {
  const [ getPerson, result ] = useLazyQuery(FIND_PERSON)
  const [ person, setPerson ] = useState(null)

  const handleClick = name => {
    getPerson({ variables: { nameToSearch: name } })
  }

  useEffect(() => {
    if (result.data) setPerson(result.data.findPerson)
  }, [ result ])

  if (persons ===  null) return null
  if (person) return <h2>{person.name}</h2>

  return (
    <div>
      <h2>Persons</h2>
      { persons.map(person => (
        <div key={person.id} onClick={() => { handleClick(person.name) }}>
          {person.name} {person.phone}
        </div>
      ))}
    </div>
  )
}