import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Navbar from '../../components/navbra/Navbar'

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
    </section>
    <footer className="home-footer" id="footer">
        footer
    </footer>

    
    </>
  )
}

export default Home