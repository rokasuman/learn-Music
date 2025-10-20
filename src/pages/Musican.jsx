import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Musican = () => {
  const { speciality } = useParams();
  const [filterMusi, setFilterMusi] = useState([]);
  const navigate = useNavigate();
  const { musican } = useContext(AppContext);

  
  const applyFilter = () => {
    if (speciality) {
      setFilterMusi(
        musican.filter((m) =>
          m.speciality.toLowerCase().includes(speciality.toLowerCase())
        )
      );
    } else {
      setFilterMusi(musican);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [musican, speciality]);


  const categories = [
    'R&B and alternative R&B',
    'Folk',
    'Rap',
    'Electronic',
    'Country and blues',
    'Nepali',
  ];

  return (
    <div className="px-6 py-10">
      <p className="text-gray-900 text-3xl font-medium mb-6">
        Browse through the Legendary Singers
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-10 mt-5">
     
        <div className="flex flex-col gap-3 text-sm text-black w-full sm:w-60 text-center">
          {categories.map((item, index) => (
            <p
              key={index}
              onClick={() => navigate(`/all-musicians/${item}`)}
              className={`pl-4 py-2 border rounded cursor-pointer transition-all 
                ${
                  speciality === item
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
            >
              {item}
            </p>
          ))}

          {/*  View All button */}
          <p
            onClick={() => navigate('/all-musicians')}
            className="pl-3 py-1.5 border border-gray-400 rounded-full cursor-pointer bg-black mt-3 text-white "
          >
            View All
          </p>
        </div>

        {/* --- Filtered Musicians --- */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterMusi.length > 0 ? (
            filterMusi.map((item, index) => (
              <div
                key={index}
                className="border border-black rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-lg w-full"
              >
                <img
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="w-full h-80 object-cover "
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium mt-2">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No musicians found for "{speciality}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Musican;
