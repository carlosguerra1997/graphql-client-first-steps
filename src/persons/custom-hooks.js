import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

import { ALL_PERSONS } from "./graphql-queries"
import { CREATE_PERSON, EDIT_NUMBER } from './graphql-mutations'

export const usePersons = () => {
  const result = useQuery(ALL_PERSONS)
  return result
}

export const useAddPerson = () => {
  const [ error, setError ] = useState('')

  const [ createPerson ] = useMutation(CREATE_PERSON, {
    refetchQueries: [ { query: ALL_PERSONS } ],
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
      setTimeout(() => setError(null), 3500)
    }
  })

  return [createPerson, error]
}

export const useEditPhone = () => {
  const [ editPhone ] = useMutation(EDIT_NUMBER)

  return editPhone
}