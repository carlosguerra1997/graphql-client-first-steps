import './LoginForm.css'
import { useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/use-form'
import { useLogin } from '../../persons/custom-hooks'

import { Error } from '../../components/error/Error'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [ loginUser, error] = useLogin()

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  })
  const { username, password } = formValues

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await loginUser({  variables: { username, password } })
    navigate('/')
  }

  return (
    <div className='login-wrapper'>
      <h1 className='login-title'>Login</h1>
      { error && <Error error={error} />}
      <form className='form-container'>
        <label>Username</label>
        <input type='text' name='username' value={username} onChange={handleInputChange} placeholder='Email...' />
        <label>Password</label>
        <input type='password' name='password' value={password} onChange={handleInputChange} placeholder='Password...' />
        <button type='submit' onClick={handleSubmit}>Iniciar sesión</button>
      </form>
    </div>
  )
}
