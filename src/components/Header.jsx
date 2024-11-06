import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex items-center justify-between'>
      {/* Center Section: Links */}
      <div className='flex-1 flex justify-center'>
        <ul className='flex space-x-10 text-white font-bold font-sans'>
          <Link to="/" className='hover:text-white/60'><li>Home</li></Link>
          <Link to="/Gallery" className='hover:text-white/60'><li>Gallery</li></Link>
          <Link to="/About" className='hover:text-white/60'><li>About</li></Link>
        </ul>
      </div>

      {/* Right Section: WhatsApp Icon */}
      
      <a 
        href='http://wa.me/918519805418' 
        className='text-4xl text-green-500 hover:text-green-400 animate-pulse' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </nav>
  )
}

export default Header;
