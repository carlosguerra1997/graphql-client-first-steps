import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

import { ALL_PERSONS } from "./graphql-queries"
import { CREATE_PERSON, CREATE_USER, EDIT_NUMBER, LOGIN_USER } from './graphql-mutations'

export const usePersons = () => {
  const result = useQuery(ALL_PERSONS)
  return result
}

export const useAddUser = () => {
  const [ error, setError ] = useState('')

  const [ createUser ] = useMutation(CREATE_USER, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
      setTimeout(() => setError(null), 3500)
    }
  })

  return [createUser, error]
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

export const useLogin = () => {
  const [ error, setError ] = useState('')

  const [ loginUser ] = useMutation(LOGIN_USER, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
      setTimeout(() => setError(null), 3500)
    }
  })

  return [loginUser, error]
}