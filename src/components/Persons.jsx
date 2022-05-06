import { usePersons } from "../persons/custom-hooks"

import { Person } from "./Person"

export const Persons = () => {
  const { data, error ,loading } = usePersons()
  if (error) return <span style='color: red'> {error} </span>

  if (data ===  null) return null

  return (
    <div>
      <h2>Persons</h2>
      { loading 
        ? <p>Loading...</p> 
        : data?.allPersons.map(person => (
            <Person key={person.id} person={person} />
      ))}
    </div>
  )
}