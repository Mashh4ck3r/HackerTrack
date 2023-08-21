import { useEffect, useState } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import './App.css'
import ProgramCard from './components/Programs/ProgramCard'
import Home from './Pages/Home/Home'
import Programs from './Pages/Program/Programs'

function App() {



  return (

    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path={'/programs'} element={<Programs/>} />
      </Routes>
    </Router>

  )
}

export default App
