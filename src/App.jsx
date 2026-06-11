import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Contato from './Contato'
import Portfolio from './Portfolio'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
  )
}

export default App