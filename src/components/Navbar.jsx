import React, { useState } from "react";
import Logo3 from '../assets/oneMcn-Logo3.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky mt-[-30px] max-h-28 top-[-35px] z-50 bg-opacity-20 shadow-md md:bg-violet-500 md:bg-opacity-30">
      <div className="flex items-center justify-between p-4">
        <div className="ml-4 md:ml-32">
          <img src={Logo3} alt="Logo3" className="h-20 md:h-28" />
        </div>

        <div className="md:hidden mr-4">
          <button onClick={toggleNavbar} className="text-violet-500 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex space-x-7 text-gray-300 mr-32">
          {['home', 'services', 'process', 'blog', 'footer'].map((text, index) => (
            <div
              key={index}
              className="relative p-2 hover:text-white group cursor-pointer"
              onClick={() => scrollToSection(text)}
            >
              <span
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 
                opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-0 
                ${index % 2 === 0 ? 'group-hover:translate-x-0 -translate-x-full' : 'group-hover:translate-x-0 translate-x-full'}`}
              />
              <p className="relative z-10">{text.charAt(0).toUpperCase() + text.slice(1)}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:block mr-32">
          <button className="bg-violet-500 p-2 rounded-2xl px-4 text-white cursor-pointer transform hover:scale-125 duration-500">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-[-80px] flex flex-col items-center space-y-4 p-4 bg-violet-600 bg-opacity-50 text-white">
          {['home', 'services', 'process', 'blog', 'footer'].map((text, index) => (
            <div
              key={index}
              className="relative p-2 group cursor-pointer"
              onClick={() => scrollToSection(text)}
            >
              <span
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 
                opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-0`}
              />
              <p className="relative z-10 text-lg font-medium">{text.charAt(0).toUpperCase() + text.slice(1)}</p>
            </div>
          ))}
          <button className="bg-violet-500 p-2 rounded-2xl px-4 text-white cursor-pointer">
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
