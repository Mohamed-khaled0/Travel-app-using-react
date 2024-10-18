import React from 'react'
import video from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
export default function Hero() {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover  ' src={video}  autoPlay loop muted/>
      <div className='absolute w-full h-screen top-0 left-0 bg-gray-800/20 '></div>
      <div className='absolute top-0 w-full h-full flex flex-col text-center text-white justify-center p-4'>
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form
          className='flex justify-between items-center max-w-[760px] mt-4 mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div>
            <input
              className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Search Destinations'
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
