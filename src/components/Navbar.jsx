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
    <div className='flex justify-between items-center h-20 px-4'>
      <div  >
        <h1 onClick={handelNav} className={logo? 'hidden' : 'block'} >BEACHES.</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex'>
      <AiOutlineSearch className=' mr-2 ' size={28}/>
        <BsPerson size={28}/>
      </div>

      <div onClick={()=> {handelNav()}} className='md:hidden  z-10'>
        {nav?  <AiOutlineClose  size={28}/> :         <HiOutlineMenuAlt4  size={28}/>}

      </div>
      {/* Nav menu */}
      <div onClick={handelNav} className={nav? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col' : 'absolute  left-[-100%]'}>
      <ul>
          <h1>BEACHES.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
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
