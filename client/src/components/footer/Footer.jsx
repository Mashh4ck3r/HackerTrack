import React from "react";
import { GiSpy } from 'react-icons/gi';
import { AiOutlineCopyright } from 'react-icons/ai';
import {SlSocialGoogle,SlSocialFacebook,SlSocialGithub,SlSocialInstagram} from 'react-icons/sl';
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () =>{
    return(
        <>
         <div className="footer flex gap-48 mx-60 p-16 bg-idol border-b-secondary border-b-2" id="footer">
            <div className="brand text-5xl text-white font-bold flex-col flex gap-2 items-center">
                <GiSpy className='  text-secondary' />
                HackTrack
            </div>
            <div className="list-items">
                <ul className=" text-white">
                    <li className=" text-2xl mb-4 border-b-2 border-b-secondary font-semibold ">options 1</li>
                    <li className="">class 1</li>
                    <li className="">class 1</li>
                    <li className="">class 1</li>
                    <li className="">class 1</li>
                    <li className="">class 1</li>
                </ul>
            </div>
            <div className="list-items">
                <ul className="text-white">
                    <li className="text-2xl mb-4 border-b-2 border-b-secondary font-semibold ">options 1</li>
                    <li className="">class 2</li>
                    <li className="">class 2</li>
                    <li className="">class 2</li>
                    <li className="">class 2</li>
                    <li className="">class 2</li>
                </ul>
            </div>
         </div>
         <div className="social-copy mx-56 py-8 flex justify-between items-center text-white">
            <p className="flex items-center gap-2">Copyright <AiOutlineCopyright /> 2023 HackTrack</p>
            <ul className="social-icon flex gap-5 font-bold text-2xl" id="social-icons">
                <li className="social-items"><SlSocialGoogle /></li>
                <li className="social-items"><SlSocialInstagram /></li>
                <li className="social-items"><SlSocialGithub /></li>
                <li className="social-items"><SlSocialFacebook /></li>
            </ul>
         </div>
        </>
    );
}

export default Footer;