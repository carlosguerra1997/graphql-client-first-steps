import './RegisterForm.css'

import { useForm } from "../../hooks/use-form"

export const RegisterForm = () => {

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })
  const { email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='register-wrapper'>
      <h1 className='register-title'>Register</h1>
      <form className='form-container'>
        <label>Email</label>
        <input type='text' name='email' value={email} onChange={handleInputChange} placeholder='Email...' />
        <label>Password</label>
        <input type='password' name='password' value={password} onChange={handleInputChange} placeholder='Password...' />
        <button type='submit' onClick={handleSubmit}>Iniciar sesión</button>
      </form>
    </div>
  )
}
