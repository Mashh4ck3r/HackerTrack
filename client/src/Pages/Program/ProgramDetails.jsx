import React from 'react'
import { useState,useEffect } from 'react';
import {AiOutlineSafety,AiFillFlag} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { progm,baner } from '../../assets';
import Navbar from '../../components/navbra/Navbar';
import Footer from '../../components/footer/Footer';
import AboutProgram from './AboutProgram';



function ProgramDetails() {
    const {slug} = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.yeswehack.com/programs/${slug}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
  
    const Details = data
  return (
    <>
        <div className="prog-details text-white">
            <header className="">
                <Navbar />
            </header>
            <section className="details">
                <div className="banar h-60 w-full opacity-40">
                    <img className='object-cover aspect-video w-full h-60' src={Details?.banner?.url || baner} alt={Details?.title} />
                </div>
                <div className="prog-details w-full px-40 py-10 absolute top-[160px]">
                    <div className="detail-nav text-white text-2xl font-semibold grid grid-cols-3 p-6">
                        <h1 className="">{"< "} Programs</h1>
                        <h1 className=""><span className=' text-secondary'> / </span>{ Details?.title}</h1>
                    </div>
                    <div className="detail-head dark-shadow w-full flex gap-12 px-20 py-10 bg-black">
                         <div className="left-detail">
                            <img className='rounded-full w-40 h-30 object-cover' src={Details?.thumbnail?.url || progm} alt={Details?.title} />
                         </div>
                         <div className="right-detail flex flex-col w-full justify-between">
                           <div className="">
                           <h1 className="text-3xl font-semibold mb-2">{Details?.title}</h1>
                            <p className="text-sm">{Details?.business_unit?.description}</p>
                           </div>
                            <div className="bounty grid grid-flow-col  auto-cols-maxitems-center pt-10 justify-items-start place-items-center">
                            <AiFillFlag />
                            <p className="">${Details?.bounty_reward_min } - ${Details?.bounty_reward_max }</p>
                            <p className="">{Details.public && "per vulnerability"}</p>
                            <p className="flex items-center gap-2 text-secondary">{Details.bounty && <AiOutlineSafety /> }Safe harbor</p>
                            <button className=" rounded-xl border-secondary border-2 px-4 py-1 justify-self-end"><Link>SUBMIT REPORT</Link></button>
                            </div>
                         </div>
                    </div>

                </div>

                <div className="main-progs bg-black m-20 px-24 pt-40 pb-20">
                    <nav className="detail-nav flex items-center justify-between py-3 px-10 border-b-primary border-b-4">
                        <ul className="flex justify-between items-center gap-16">
                            <li className="">Program details</li>
                            <li className="">Announcements </li>
                            <li className="">Hall of Fame</li>
                        </ul>
                        <div className="">
                            <button className="">
                                Bounty History
                            </button>
                        </div>
                    </nav>
                    <div className="main-content">
                        <div className="left-content" id='program-details'>
                            <AboutProgram data={Details.rules_html} />
                        </div>
                        <div className="announcment" id="announcement">
                            
                        </div>
                    </div>

                </div>

            </section>
            <footer className="bg-idol">
                <Footer />
            </footer>

        </div>

    </>
  )
}

export default ProgramDetails