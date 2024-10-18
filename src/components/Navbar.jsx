import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
      <div>
        <h1>BEACHES.</h1>
      </div>
      <ul className='flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='flex '>
      <AiOutlineSearch/>
        <BsPerson/>
      </div>
    </div>
  )
}
