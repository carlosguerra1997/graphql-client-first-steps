import './RegisterForm.css'

import { useForm } from "../../hooks/use-form"
import { useAddUser } from '../../persons/custom-hooks'

import { Error } from '../../components/error/Error'

export const RegisterForm = () => {
  const [ createUser, error] = useAddUser()
  
  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  })
  const { username, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    const userAdded = createUser({  variables: { username, password } })
    console.log('User added... ', userAdded)
  }

  return (
    <div className='register-wrapper'>
      <h1 className='register-title'>Register</h1>
      { error && <Error error={error} /> }
      <form className='form-container'>
        <label>Username</label>
        <input type='text' name='username' value={username} onChange={handleInputChange} placeholder='Email...' />
        <label>Password</label>
        <input type='password' name='password' value={password} onChange={handleInputChange} placeholder='Password...' />
        <button type='submit' onClick={handleSubmit}>Registrarse</button>
      </form>
    </div>
  )
}
