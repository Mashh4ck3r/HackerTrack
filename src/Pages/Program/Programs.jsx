import React from 'react'
import {FiSearch} from 'react-icons/fi'
import Navbar from '../../components/navbra/Navbar'
import Footer from '../../components/footer/Footer'
import ProgramCard from '../../components/Programs/ProgramCard'

function Programs() {
  return (
    <>
    <div className="programs">
        <header className=" sticky top-0 z-40">
        <Navbar />
        </header>
        <section className="programs">
            <div className="baner bg-secondary sticky top-0 z-[-100]  w-full h-60 flex justify-center items-center ">
                <h1 className="text-4xl text-white font-bold">banner background</h1>
            </div>
            <div className="search-fun border-b-2 border-b-secondary translate-y-[-100px] flex gap-5 mx-60 p-20 justify-between bg-black">
                <select name="" id="" className='w-52 p-3'>
                    <option value="">option 1</option>
                    <option value="">option 1</option>
                    <option value="">option 1</option>
                    <option value="">option 1</option>
                    <option value="">option 1</option>
                </select>
                <div className="search-input grow text-white relative">
                    <input type="text" placeholder='' className="w-full p-3" />
                    <FiSearch className='absolute text-black top-4 right-3'/>
                </div>
            </div>

            <div className="program-cards m-3 p-24 bg-primary border-y-2 border-y-secondary ">
                <ProgramCard />
            </div>


        </section>
        <footer className=" bg-idol">
            <Footer />
        </footer>
    </div>

    </>
  )
}

export default Programs