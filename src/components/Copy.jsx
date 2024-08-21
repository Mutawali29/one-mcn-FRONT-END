import React from "react";
import { FaBoxOpen, FaPeopleGroup, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const Copy = () => {
    return(
        <div id="footer">
        <div className='text-center p-0 mt-40 text-white '>
        Qusay Mutawali © 2023. All rights reserved.
        <div className='flex items-center justify-center space-x-4 mt-4 text-xl'>
          <a href='https://www.instagram.com/qusaymutawali?igsh=MWs4cDZ5ZHN3ZXVzdw==' className='hover:text-violet-400 transform hover:scale-150 transition duration-300'> <FaInstagram/> </a>
          <a href='https://www.linkedin.com/in/qusay-mutawali-585495288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-violet-400 transform hover:scale-150 transition duration-300'> <FaLinkedin/> </a>
          <a href='#' className='hover:text-violet-400 transform hover:scale-150 transition duration-300'> <FaGithub/> </a>
        </div>
        </div>
        </div>
    )
};

export default Copy;