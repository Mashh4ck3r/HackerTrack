import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Navbar from '../../components/navbra/Navbar'
import { improve,smarter,risk,transform } from '../../assets/home'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
    <header className="home-head sticky top-0">
        <Navbar />
    </header>
    <section className="main bg-primary text-secondary" id="main">
        <div className="hero w-[100%] h-[90vh] border-secondary border-b-2 grid content-center m-auto" id="hero">
            <h1 className="text-4xl">Slider</h1>
        </div>
        <div className="probs py-16" id="probs">

          <ul className="items flex bg-black w-[80%]  ml-auto p-16 h-42 justify-evenly py-20">
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={improve} alt="" />Increase security ROI</li>
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={smarter} alt="" />Innovate faster</li>
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={risk} alt="" />Reduce risk</li>
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={transform} alt="" />Access expert talent</li>
          </ul>

        </div>
    </section>
    <footer className="home-footer" id="footer">
       <Footer />
    </footer>

    
    </>
  )
}

export default Home