import React from 'react'
import { GiSpy } from 'react-icons/gi';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="nav navbar z-50 bg-black flex justify-between sticky top-0 items-center py-3 px-16 text-white">
          <Link to={'/'}>
            <div className="brand text-4xl flex gap-2 items-center">
                <GiSpy className='  text-secondary' />
                HackTrack
            </div>
          </Link>
            <ul className="list-items nav-list flex items-center gap-8">
                <li className="list-item nav-item"><Link to='/programs'>Programs </Link></li>
                <li className="list-item nav-item"><Link to='/'>Why HackTrack </Link></li>
                <li className="list-item nav-item"><Link to='/'>Quick Check </Link></li>
                <li className="list-item nav-item"><Link to='/'>Skill Test </Link></li>
                <li className="list-item nav-item"><Link to='/'>
                    <button className='btn rounded-md bg-secondary px-5 py-2'>Get Started</button>
                 </Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar