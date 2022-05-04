import './App.css'

import { Persons } from './Persons'
import { PersonForm } from './PersonForm'
import { usePersons } from './persons/custom-hooks'

function App() {
  const { data, error ,loading } = usePersons()

  if (error) return <span style='color: red'> {error} </span> 

  return (
    <div className="App">
      <header className="App-header">
        { 
          loading 
            ? <p>Loading...</p>
            : <Persons persons={data?.allPersons} />
        }
      </header>
      <PersonForm />
    </div>
  )
}

export default App
