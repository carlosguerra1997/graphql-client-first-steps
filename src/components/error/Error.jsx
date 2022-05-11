import './Error.css'

export const Error = ({ error }) => {
  return (
    <div>
      <p className='error'>{error}</p>
    </div>
  )
}