import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinment = () => {

  const {musican} = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 text-black border-b font-semibold' >My Appointment</p>
      <div>
        {
          musican.slice(0,1).map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' 
            key={index}>
              <div>
                <img className='w-34 rounded-2xl object-cover' src={item.image} alt=''/>
              </div>
              <div className='flex-1 text-sm text-zinc-600 '>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p className='text-blue-400 font-semibold mt-2'>{item.speciality}</p>
                <p className='text-black'><span className='font-semibold'>Date & Time: </span> 24, july, 2025 | 8:40 PM</p>
                
              </div>
              <div> </div>
              <div className='flex flex-col justify-end'>
                <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded-2xl bg-black hover:cursor-pointer'>Pay Online</button>
                <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded-2xl bg-red-500 hover:cursor-pointer'>Cancel appointment</button>
              </div>
            </div>


          ))
        }
      </div>

    </div>
  )
}

export default MyAppoinment