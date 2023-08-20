import { useEffect, useState } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import './App.css'
import ProgramCard from './components/Programs/ProgramCard'
import Home from './Pages/Home/Home'

function App() {



  return (

    <Router>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App
