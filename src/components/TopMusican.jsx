import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TopMusican = () => {
  const navigate = useNavigate()
  const{musican} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Legend Singer to Book</h1>
      <p className='text-sm text-center'>Simply browse through legend Singer</p>

      <div className='w-full grid grid-cols-1 gap-6 pt-5 sm:grid-cols-2'
           style={{ 
             gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' 
           }}
      >
        {musican.slice(0, 10).map((item, index) => (
          <div
            className='border border-black rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
            key={index}
          >
            <img onClick ={()=>navigate(`/appointment/${item._id}`)}
             className='w-full h-60 object-cover' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-green-500'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                <p onClick={()=>navigate(`/appointment/${item._id}`)}>Available</p>
              </div>
              <p className='text-gray-900 text-large font-medium mt-2'>{item.name}</p>
              <p className='text-gray-500 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick ={()=>{navigate('./all-musican'); scrollTo(0,0)}} className='px-12 py-3 bg-black text-white rounded-full hover:bg-purple-600 transition mt-10'>
        More
      </button>
    </div>
  );
};

export default TopMusican;
