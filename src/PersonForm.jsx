import { useState } from "react";

import { useAddPerson } from "./persons/custom-hooks";

export const PersonForm = () => {
  const [ name, setName ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ city, setCity ] = useState('')
  const [ street, setStreet ] = useState('')

  const [ createPerson, error ] = useAddPerson()

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
        { error && error }
      </div>
    )
}