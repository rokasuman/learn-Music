import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const Banner = () => {
const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-black text-white rounded-3xl px-8 md:px-16 py-10 mt-10 shadow-lg'>

      {/*----- Left Side -----*/}
      <div className='flex flex-col gap-4 text-center md:text-left max-w-md'>
        <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
          Book Appointment
        </h1>
        <p className='text-3xl text-gray-300'>
          With 100+ Legendary Singers
        </p>

        <button onClick ={()=>{navigate('/Login'); scrollTo(0,0)}} className='mt-4 bg-white hover:bg-purple-400 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md'>
          Create an Account
        </button>
      </div>

      {/*----- Right Side -----*/}
      <div className='mt-8 md:mt-0'>
        <img 
          src={assets.appointment_img} 
          alt='Appointment Banner' 
          className='w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover'
        />
      </div>
    </div>
  )
}
