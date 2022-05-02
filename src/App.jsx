import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect( () => {
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        query {
          allPersons {
            name
          }
        }
      `})
    })
    .then(res => res.json())
    .then(res => console.log(res.data))

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>GraphQL + React</p>
      </header>
    </div>
  )
}

export default App
