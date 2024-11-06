import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className=' p-2 text-white mt-28'>
        <div className='flex flex-col justify-center items-center md:flex-row '>
        <div>
        
        <div className='flex flex-col py-2'>
        <h1 className='font-bold self-center text-2xl'>Krupa BhaskAR T</h1>
            <p className='text-lg self-center'>Micro Sculptor</p>
        
        </div>
        <ul>
            <li className='flex flex-col m-2 justify-center items-center'>
                <div className='flex flex-row'>
                <a 
                target="_blank" 
                href='https://www.facebook.com/ederartofficial/'><FaFacebook className='mr-4 flex flex-row text-2xl hover:text-white/60' /> </a>
                <a 
                target="_blank" 
                href='https://www.instagram.com/ederartofficial/'><FaInstagram className='mr-4 flex flex-row text-2xl hover:text-white/60'/></a>
                </div>
                <p className='mt-1'>ederartofficial</p>
            </li>
            
        </ul>
        </div>
        <ul className='px-5'>
            <li className='flex flex-row m-2 items-center'>
                <FaPhoneAlt className='mr-4 flex flex-row'/> 
                <p>+91 8519805418</p>
            </li>
            <li className='flex flex-row m-2 items-center'>
                <TbMailFilled className='mr-4 flex flex-row'/> 
                <p>ederartofficial@gmail.com</p>
            </li>
            <li className='flex flex-row m-2 items-center'>
                <TbWorld className='mr-4 flex flex-row'/> 
                <p>www.ederart.com</p>
            </li>
            <li className='flex flex-row m-2 items-center'>
                <FaLocationDot className='mr-4 flex flex-row'/> 
                <p>Hyderabad, India.</p>
            </li>
        </ul>
        </div>

    </div>
  )
}

export default Footer