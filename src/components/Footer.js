import React from 'react';
import Link from 'next/link';
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
  } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = ({darkMode}) => {
  
  return (
    <footer id="footer"  className={`bg-rgb-blue-caleb ${darkMode ? 'dark:bg-gray-800' : ''} text-white text-center -mx-10 sticky top-[100vh]`}>
        
      <div className='py-8'>
        <ul className='items-center justify-center sm:text-xl'>
          <li className='py-2 sm:py-3 md:py-4 lg:py-5'>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/about">
                About
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/missions">
                Missions
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/contact">
                Contact
            </Link>
          </li>
        </ul>
      </div>

      <p className='py-2 text-sm sm:text-md md:text-lg lg:text-xl'>
        &copy; Caleb Mission | All rights reserved
      </p>

      <div className="text-3xl flex justify-center gap-10 py-2 text-white">
        <Link
          href="https://chat.whatsapp.com/I9zC1kxe2LkEYx7kDpTsD8"
          target="_blank"
        >
          <IoLogoWhatsapp />
        </Link>
        <Link
          href="https://www.instagram.com/iasd_manchester/"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
        <Link 
            href="https://www.facebook.com/IASDManchester/" 
            target="_blank"
        >
          <AiFillFacebook />
        </Link>
      </div>
      
      <p className='mt-6 text-xs sm:text-md md:text-lg lg:text-xl'>
        Designed and developed by <br />
        <a href="https://github.com/h-chagas">Hugo Chagas</a>
      </p>
    </footer>
  )
}

export default Footer