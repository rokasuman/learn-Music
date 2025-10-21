import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-black'>
        <p className='text-center font-semibold'>Contact US</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[500px] rounded-2xl' src={assets.contact_image} alt=''/>
        <div className='flex flex-col justify-ceter items-start gap-6'>
          <p className='font-semibold text-lg text-black'>Our Office</p>
          <p className='text-gray-500'>77/81 church street, Lidcombe</p>
          <p className='text-gray-500'>Phone: 0401111 <br/> learnmusic@gmail.com</p>
          <p className='font-semibold text-lg text-black'>Career at learn Music</p>
          <p className='text-gray-500'>Learn about us and job Opening</p>
          <button className=' bg-black text-white px-8 py-4 rounded-full hover:cursor-pointer  hover:bg-purple-600 '>Explore the job</button>
        </div>

      </div>

    </div>
  )
}

export default Contact