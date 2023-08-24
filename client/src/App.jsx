import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Programs from './Pages/Program/Programs'
import Login from './Pages/LoginOrSignUp/Login'
import ProgramDetails from './Pages/Program/ProgramDetails'
import CheckUrl from './Pages/check/CheckUrl'
import GoToTopButton from './components/GoToTop'
import Report from './Pages/report/Report'


function App() {



  return (
    <>

    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path={'/programs'} element={<Programs/>} />
          <Route path={'/programs/:slug'} element={<ProgramDetails/>} />
          <Route path={'/url-check'} element={<CheckUrl />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/report'} element={<Report />} />
      </Routes>
    </Router>
    
    <GoToTopButton />


    </>

  )
}

export default App
