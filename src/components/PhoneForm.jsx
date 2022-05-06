import { useState } from "react";

import { useEditPhone } from "../persons/custom-hooks";

export const PhoneForm = () => {
  const [ name, setName ] = useState('')
  const [ phone, setPhone ] = useState('')

  const editPhone = useEditPhone()

  const handleSubmit = e => {
    e.preventDefault()

    editPhone({  variables: { name, phone } })

    setName('')
    setPhone('')
  }

    return (
      <div>
        <h2>Edit person phone</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input value={name} onChange={e => setName(e.target.value)} />

          <label>Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} />

          <button>Edit Phone</button>
        </form>
      </div>
    )
}