import React, { useState } from 'react'
import axios from 'axios';
import {GiSpy} from 'react-icons/gi'
import {AiOutlineGlobal} from 'react-icons/ai'
import Navbar from '../../components/navbra/Navbar'
import Footer from '../../components/footer/Footer'
import UrlDetails from './UrlDetails';

function CheckUrl() {

    const [id,setId] = useState("");
    const [url,setUrl] = useState("");

    const getUrl = (e)=>{
        setUrl(e.target.value)
    }
    
    const getData = () =>{
        
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', url);

    const options = {
    method: 'POST',
    url: 'https://www.virustotal.com/api/v3/urls',
    headers: {
        accept: 'application/json',
        'x-apikey': '0c39a674b5111a143b49158ec7106234bb622f3b2c696c2e448ce46911a71e01',
        'content-type': 'application/x-www-form-urlencoded'
    },
    data: encodedParams,
    };

    axios
    .request(options)
    .then(function (response) {
        setId(response.data.data.id)
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
    }
    return (
        <>
            <div className="checkpage h-screen">
                <header className="checkpage">
                    <Navbar />
                </header>
                <section className=" text-white h-5/6">
                    <div className="main w-1/3 m-auto">
                        <div className="head text-center">
                            <h1 className="m-auto w-full flex items-center justify-center text-5xl font-bold gap-3 py-7 px-3 "><span className=''><GiSpy /></span>Hacker track</h1>
                            <p className="">Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community.</p>
                        </div>
                        
                        <div className="searchbox pt-7 text-center">
                            <nav className="check w-full h-10 flex items-center justify-center text-2xl font-semibold bg-black">
                                <p className="">Url Search</p>
                            </nav>
                            <div className="search py-10 px-14 flex flex-col gap-5">
                                <AiOutlineGlobal className='w-full text-8xl font-thin text-secondary' />
                                <input type="text"className="w-full h-10 px-4" onChange={getUrl} placeholder='Type your URL to check' />
                                <button className='px-4 py-1 bg-secondary text-white'  onClick={getData}>Check</button>
                                <p className="text-sm">By submitting data above, you are agreeing to our Terms of Service and Privacy Policy, and to the sharing of your URL submission with the security community. Please do not submit any personal information; VirusTotal is not responsible for the contents of your submission. Learn more.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="details">
                    <UrlDetails id={id} />
                </section>
                <footer className="">
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default CheckUrl