import './Auth.css'

import { LoginForm } from '../login/LoginForm'
import { RegisterForm } from '../register/RegisterForm'

export const Auth = () => {
  return (
    <div className='auth-container'>
      <LoginForm />
      <RegisterForm />
    </div>
  )
}