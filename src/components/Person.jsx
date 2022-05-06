import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'

import { FIND_PERSON } from '../persons/graphql-queries'

export const Person = ({ person }) => {
  const [ personFound, setPersonFound ] = useState(null)
  const [ getPerson, result ] = useLazyQuery(FIND_PERSON)

  useEffect(() => {
    if (result.data) setPersonFound(result.data.findPerson)
  }, [ result ])

  const handleClick = name => {
    getPerson({ variables: { nameToSearch: name } })
  }

  return (
    <>
      {
        !personFound ? 
          <div key={person.id} onClick={() => { handleClick(person.name) }}>
            {person.name} {person.phone}
          </div> 
          : 
          <h2> {personFound.name} </h2>
      }
    </>
  )
}