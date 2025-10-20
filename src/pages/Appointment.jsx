import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { docId } = useParams()
  const { musican, currencySymbol } = useContext(AppContext)

  const [musicaianInfo, setMusicianInfo] = useState(null)
  const [musicainSlot, setMusicianSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchMusicianInfo = async () => {
    if (!musican || musican.length === 0) return
    const mInfo = musican.find(doc => String(doc._id) === String(docId))
    setMusicianInfo(mInfo)
    console.log('Fetched Musician:', mInfo)
  }

  const getAvailableSlot = async () =>{
    setMusicianSlot([])

    let today = new Date()

    for(let i = 0 ; i<7 ; i++){
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime = new Date(today)
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlot = []
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        timeSlot.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setMusicianSlot(prev => ([...prev, timeSlot]))
    }
  }

  useEffect(() => {
    fetchMusicianInfo()
  }, [musican, docId])

  useEffect(() => {
    getAvailableSlot()
  }, [musicaianInfo])

  useEffect(()=>{
    console.log(musicainSlot);
  }, [musicainSlot])

  if (!musicaianInfo) {
    return <p className="text-center text-gray-500 mt-10">Loading musician details...</p>
  }

  return (
    <div className="min-h-screen flex justify-center items-start p-6  to-gray-200">
      <div className="bg-gray-900 text-white shadow-2xl rounded-2xl p-6 w-full max-w-md transform transition-transform duration-300">
        
        {/* Musician Image */}
        <div className="flex justify-center mb-4">
          <img
            src={musicaianInfo.image}
            alt=''
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
          />
        </div>

        {/* Musician Info */}
        <div className="text-center">
          <p className="text-xl font-bold flex justify-center items-center gap-2 mb-1">
            {musicaianInfo.name}
            <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
          </p>
         

          <p className="text-purple-400 mt-1 text-center font-medium">{musicaianInfo.speciality}</p>
           <hr className="border-gray-700 mt-2" />
          <div className="mt-4 text-center">
            <div className="flex justify-center items-center gap-2 mb-1">
              <p className="text-white font-semibold">About</p>
              <img src={assets.info_icon} alt="Info" className="filter invert w-4 h-4" />
            </div>
            <p className="text-gray-300">{musicaianInfo.about}</p>
          </div>

          <p className="text-green-400 font-medium mt-4">
            Appointment fee: <span>{currencySymbol}{musicaianInfo.fees}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Appointment
