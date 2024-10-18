import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

export default function Navbar() {
    const [nav,setNav] = useState(false);
    const handelNav = () => {
        setNav(!nav);
    setLogo(!logo)
    }

    const [logo,setLogo] =useState();
  return (
    <div className='flex justify-between items-center h-20 px-4 absolute z-20 text-white w-full duration-200'>
      <div  >
        <h1 onClick={handelNav} className= {logo? 'hidden cursor-pointer' : 'block cursor-pointer'}  >BEACHES.</h1>
      </div>
      <ul className='hidden md:flex duration-200'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Destinations</li>
        <li className='cursor-pointer'>Travel</li>
        <li className='cursor-pointer'>View</li>
        <li className='cursor-pointer'>Book</li>
      </ul>
      <div className='hidden md:flex  '>
      <AiOutlineSearch className=' mr-2 ' size={28}/>
        <BsPerson size={28}/>
      </div>

      <div onClick={()=> {handelNav()}} className='md:hidden  z-10'>
        {nav?  <AiOutlineClose className='text-black'  size={28}/> :     <HiOutlineMenuAlt4  size={28}/>}

      </div>
      {/* Nav menu */}
      <div onClick={handelNav} className={nav? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 duration-200 flex-col text-black' : 'absolute  left-[-100%]'}>
      <ul>
          <h1 className='cursor-pointer' >BEACHES.</h1>
          <li className='border-b  cursor-pointer'>Home</li>
          <li className='border-b cursor-pointer'>Destinations</li>
          <li className='border-b cursor-pointer'>Travel</li>
          <li className='border-b cursor-pointer'>View</li>
          <li className='border-b cursor-pointer'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  )
}
