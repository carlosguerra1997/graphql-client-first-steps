import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Auth } from './pages/auth/Auth'
import { Persons } from './components/Persons'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Persons /> } />
        <Route exact path='/login' element={ <Auth /> } />
      </Routes>
    </Router>
  )
}

export default App
