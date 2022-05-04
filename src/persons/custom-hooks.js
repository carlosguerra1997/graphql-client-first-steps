import { useMutation, useQuery } from "@apollo/client"

import { ALL_PERSONS } from "./graphql-queries"
import { CREATE_PERSON } from './graphql-mutations'

export const usePersons = () => {
  const result = useQuery(ALL_PERSONS)
  return result
}

export const useAddPerson = () => {
  const [ createPerson ] = useMutation(CREATE_PERSON, {
    refetchQueries: [ { query: ALL_PERSONS } ]
  })

  return createPerson
}