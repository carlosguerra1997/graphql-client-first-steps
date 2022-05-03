import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { ALL_PERSONS } from "./App";

const CREATE_PERSON = gql`
mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String) {
  addPerson(name: $name, street: $street, city: $city, phone: $phone) {
    id
    name
    phone
    address {
      city
      street
    }
  }
}`

export const PersonForm = () => {
  const [ name, setName ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ city, setCity ] = useState('')
  const [ street, setStreet ] = useState('')

  const [ createPerson ] = useMutation(CREATE_PERSON, {
    refetchQueries: [ { query: ALL_PERSONS } ]
  })

  const handleSubmit = e => {
    e.preventDefault()

    createPerson({  variables: { name, street, city, phone } })

    setName('')
    setPhone('')
    setCity('')
    setStreet('')
  }

    return (
      <div>
        <h2>Create new Person</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input value={name} onChange={e => setName(e.target.value)} />

          <label>Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} />

          <label>City</label>
          <input value={city} onChange={e => setCity(e.target.value)} />

          <label>Street</label>
          <input value={street} onChange={e => setStreet(e.target.value)} />

          <button>Add person</button>
        </form>
      </div>
    )
}