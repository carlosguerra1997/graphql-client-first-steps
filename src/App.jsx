import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Persons } from './components/Persons'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Persons /> } />
      </Routes>
    </Router>
  )
}

export default App
