import React from "react";
import logo3 from '../assets/oneMcn-Logo3.png';
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
    <div id="footer">
        <footer className="flex flex-col md:flex-row justify-between items-center p-4 md:p-1 mt-24 md:h-20 bg-violet-400 bg-opacity-15 text-white">
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                <img src={logo3} alt="logo3" className="h-20 md:h-28"/>
            </div>
            <div className="flex flex-col md:flex-row items-center text-white space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                <p className="transform hover:text-violet-600 duration-300 cursor-pointer">About</p>
                <p className="transform hover:text-violet-600 duration-300 cursor-pointer">Services</p>
                <p className="transform hover:text-violet-600 duration-300 cursor-pointer">Portfolio</p>
                <p className="transform hover:text-violet-600 duration-300 cursor-pointer">Our Process</p>
                <p className="transform hover:text-violet-600 duration-300 cursor-pointer">Blog</p>
            </div>
            <div className="flex justify-center md:justify-end items-center space-x-4 text-xl">
                <FaFacebook className="transform hover:scale-150 duration-200 hover:text-violet-500"/>
                <GrInstagram className="transform hover:scale-150 duration-200 hover:text-violet-500"/>
                <FaWhatsapp className="transform hover:scale-150 duration-200 hover:text-violet-500"/>
                <FaLinkedin className="transform hover:scale-150 duration-200 hover:text-violet-500"/>
            </div>
        </footer>
    </div>
    );
};

export default Footer;
