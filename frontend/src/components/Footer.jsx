import React from 'react'
import { footer_data } from '../assets/assets'
import { assets } from '../assets/assets'



const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
       <div className='flex flex-col md:flex-row items-start justify-betweem gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
           <div>
             <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
             <p className='max-w-[410px] mt-6'>description of mu choice</p>
           </div>

           <div className='flex flex-wrap justify-between w-full ms:w-[45%] gap-5'>
              {footer_data.map((section, index)=> (
                <div key={index}>
                   <h3 className='font-semibold text-base text-gray-900 ms:mb-5 mb-2'>{section.title}</h3>
                   <ul className='text-sm space-y-1'>
                      {section.links.map((link, i)=>(
                        <li key={i}>
                            <a href='#' className='hover:underline transition'>{link}</a>
                        </li>
                      ))}
                   </ul>
                </div>
                ))}
            </div>
       </div>
       <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>copyright 2025 @ GenText - All Right Reserved.</p>
    </div>

  )
}

export default Footer