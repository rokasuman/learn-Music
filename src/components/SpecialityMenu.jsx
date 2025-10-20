import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-4/5 sm:w-1/2 text-center text-sm'>
        Simply browse through legend singers and schedule your appointment.
      </p>

      <div className='flex sm:justify-center gap-6 pt-6 w-full overflow-x-scroll no-scrollbar'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/all-musicians/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center justify-center text-sm cursor-pointer flex-shrink-0 
                       hover:-translate-y-2 transition-all duration-500'
          >
            
            <div className='w-18 h-18 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md'>
              <img
                className='w-full h-full object-cover'
                src={item.image}
                alt={item.speciality}
              />
            </div>

           
            <p className='mt-2 text-center font-medium'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
