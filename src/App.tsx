import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Contact } from './pages'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
