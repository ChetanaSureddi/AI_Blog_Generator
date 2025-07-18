import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between item-center by-5 mx-8 sm:mx-20 xl:mx-32'>
        <img scr={assets.logo} alt="logo" className='w-32 sm:w-44'/>
        <button className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Login 
            <img src={assets.arrow} className='w-3' alt='arrow' />
        </button>
    </div>
  )
}

export default Navbar