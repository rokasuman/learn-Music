import React, {useState} from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {

 const[userData, setUserData] = useState({
  name:" Suman Roka",
  image:assets.profile_pic,
  email : 'roka7362@gmail.com',
  phone: '0414282005',
  address:"77/81 church street, Lidcombe",
  gender: "Male",
  dob:"2001-04-14"
 })
 const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm mt-5'>
      <img className='w-36 rounded' src={userData.image} alt='' />
      {
        isEdit 
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e =>setUserData(prev =>({...prev,name:e.target.value}))}/> 
        :<p className='font-semibold text-3xl text-neutral-800 mt-4' >{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-500'>
          <p className='font-medium' >Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>

          {
            isEdit
            ? <input className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={e => setUserData(prev =>({...prev,phone:e.target.value}))}/> 
            :<p className='text-blue-500'>{userData.phone}</p>
          }
          <p className='font-medium'>
            Address:
          </p>
          {
            isEdit
            ? <input className='bg-gray-50' type='text' value={userData.address} onChange={e=>setUserData(prev=>({...prev,address:e.target.value}))}/>
            :<p className='text-gray-500'>{userData.address}</p>
          }

        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
            ?<input className='max-w-20 bg-gray-100' type='text' value={userData.gender} onChange={e=>setUserData(prev=>({...prev,gender:e.target.value}))}/>
            :<p className='text-gray-600'>{userData.gender}</p>
          }
          <p>Birthday:</p>
          {
            isEdit
            ?<input className='max-w-28 bg-gray-100' type="date" value={userData.dob} onChange={e=>setUserData(prev =>({...prev,dob:e.target.value}))}/>
            :<p className='text-gray-600'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
          ?<button className='bg-black px-8 py-2 rounded-full text-white cursor-pointer' onClick={()=>setIsEdit(false)}>Save Information</button>
          :<button className='bg-black px-8 py-2 rounded-full text-white cursor-pointer' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>


    </div>
  )
}

export default MyProfile