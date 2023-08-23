import React from 'react'
import Navbar from '../../components/navbra/Navbar'
import { improve,smarter,risk,transform } from '../../assets/home'
import Footer from '../../components/footer/Footer'
import Slider from '../../components/Slider'
import { Link } from 'react-router-dom'
import WhatCard from './WhatCard'
import Contactus from './Contactus'

function Home() {
  return (
    <>
    <header className="home-head sticky top-0">
        <Navbar />
       

    </header>
    <section className="main bg-primary text-secondary" id="main">
        <div className="hero w-[100%] h-[90vh] border-secondary border-b-2" id="hero">
          <Slider />
        </div>
        <div className="about flex border-secondary border-b-2 p-36" id="about">
          
          <div className="right-content grid-cols-1 flex flex-col justify-between items-start">
            <h1 className="text-4xl font-bold">
              Why elevate your security with <p className='text-white'>HackTrack?</p>
            </h1>
            <button className="bg-transprant rounded-full border-secondary border-2 transition duration-300 ease-in-out text-white px-5 bor py-2 hover:bg-secondary font-semibold">
              <Link className="" to={'/'}>Get Started</Link>
            </button>
          </div>
          <div className="left-content text-white w-[50%] pl-36 grid-cols-2">
            <p className="pb-12">
            Cyber ​​threats are increasing – together with your needs for agility. As a result, traditional approaches and tools no longer meet the challenges of digital transformation. YesWeHack and its global community of experts provide you with a disruptive solution: Bug Bounty.
            </p>
            <p className="">
            YesWeHack’s Bug Bounty platform complies with the strictest European standards and regulations to protect its customers and hunters’ interests.
            </p>
          </div>
        </div>
        <div className="probs py-16 border-b-secondary border-b-2" id="probs">

          <ul className="items flex bg-black w-[80%]  ml-auto p-16 h-42 justify-evenly py-20">
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={improve} alt="" />Increase security ROI</li>
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={smarter} alt="" />Innovate faster</li>
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={risk} alt="" />Reduce risk</li>
            <li className='flex flex-col gap-2 items-center font-bold text-white text-xl'><img src={transform} alt="" />Access expert talent</li>
          </ul>

        </div>

        <div className="border-b-secondary grid grid-cols-2 text-white border-b-2 py-20 px-52">
          <div className="right-content">
          <h1 className=" text-5xl font-bold text-secondary ">Get started with <span className='text-white'> HackTrack</span> </h1>
          <p className="">Hackers aren’t waiting, so why should you? See how Bugcrowd can quickly improve your security posture.</p>
          </div>
          <div className="btn-content  place-self-center flex gap-4">
            <button className="bg-transprant  border-secondary border-2 transition duration-300 ease-in-out text-white px-5 bor py-2 hover:bg-secondary font-semibold">
              <Link className="" to={'/'}>Get Started</Link>
            </button>
            <button className="bg-transprant border-secondary border-2 transition duration-300 ease-in-out text-white px-5 bor py-2 hover:bg-secondary font-semibold">
              <a className="" href={'#contact-us'}>Contact Us</a>
            </button>
          </div>
        </div>
        
        <div className="px-40 border-b-secondary border-b-2">
         <WhatCard />
        </div>
        <div className="px-40 bg-black border-b-secondary border-b-2" id='contact-us'>
          <Contactus />
        </div>
    </section>
    <footer className="home-footer bg-idol" id="footer">
       <Footer />
    </footer>

    
    </>
  )
}

export default Home