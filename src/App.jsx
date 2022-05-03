import { gql, useQuery } from '@apollo/client'
import { Persons } from './Persons'
import './App.css'
import { PersonForm } from './PersonForm'

export const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
    }
  }
`

function App() {
  const { data, error, loading } = useQuery(ALL_PERSONS)

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
