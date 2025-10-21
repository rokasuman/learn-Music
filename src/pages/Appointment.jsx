import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { docId } = useParams()
  const { musican, currencySymbol } = useContext(AppContext)
  const [musicianInfo, setMusicianInfo] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')

  useEffect(() => {
    const foundMusician = musican.find((m) => m._id === docId)
    setMusicianInfo(foundMusician)
  }, [musican, docId])

  // Generate next 5 days
  const getNextDays = () => {
    const days = []
    const today = new Date()
    for (let i = 0; i < 5; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'long' }),
      })
    }
    return days
  }

  const days = getNextDays()

  // Time slots
  const slots = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM']

  if (!musicianInfo) return null

  return (
    <div className="p-6 flex flex-col items-center">
      {/* ---------Musician Info--------- */}
      <div className="w-full bg-black text-white max-w-4xl  shadow-md rounded-2xl p-6 flex gap-6">
        <img
          src={musicianInfo.image}
          alt=''
          className="w-48 h-48 rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">{musicianInfo.name}
            <img src={assets.verified_icon} alt=''
            className=' w-5 h-5'
            />
          </h2>
          <p className="text-gray-500">{musicianInfo.speciality}</p>
          <p className="text-green-500 mt-2 ">
            {currencySymbol}
            {musicianInfo.fees} per session
          </p>
          <p className="text-white mt-3">{musicianInfo.about}</p>
        </div>
      </div>

      {/* --------Booking Section--------- */}
      <div className="w-full max-w-4xl mt-6">
        <h3 className="text-xl font-semibold mb-3">Select Date</h3>
        <div className="flex flex-wrap gap-4">
          {days.map((d) => (
            <button
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`px-4 py-2 rounded-xl border ${
                selectedDate === d.date
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {d.day}, {d.date}
            </button>
          ))}
        </div>

        {/* -----Slots Section------ */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Select Time </h3>
          <div className="flex flex-wrap gap-3">
            {slots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedSlot(time)}
                className={`px-4 py-2 rounded-xl border ${
                  selectedSlot === time
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/*------- Confirm Button ---------*/}
        <div className="mt-8 text-center">
          <button
            
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-blue-700 cursor-pointer"
            onClick={() =>
              alert(
                selectedDate && selectedSlot
                  ? `Booked on ${selectedDate} at ${selectedSlot}`
                  : 'Please select a date and time'
              )
            }
          >
             Booking Appointment
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default Appointment
