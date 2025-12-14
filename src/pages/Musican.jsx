import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

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
    "R&B and alternative R&B",
    "Folk",
    "Rap",
    "Electronic",
    "Country and blues",
    "Nepali",
  ];

  return (
    <div className="px-4 py-8 md:px-10">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
      Browse Legendary Singers
      </h1>
      <p className="text-gray-600 mt-1">
        Filter musicians by their genre or view all artists.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-10 mt-8">
        {/* Sidebar Categories */}
        <div className="flex flex-col gap-3 text-sm text-black w-full sm:w-48">
          {categories.map((item, index) => (
            <p
              key={index}
              onClick={() => navigate(`/all-musicians/${item}`)}
              className={`
                py-2 px-4 rounded-lg cursor-pointer border transition-all text-center
                ${
                  speciality === item
                    ? "bg-black text-white border-black shadow-md"
                    : "border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {item}
            </p>
          ))}

          {/* View All Button */}
          <p
            onClick={() => navigate("/all-musicians")}
            className="
              py-2 px-4 mt-3 text-center rounded-full border border-gray-400 
              bg-black text-white cursor-pointer hover:bg-purple-600 transition
            "
          >
            View All
          </p>
        </div>

        {/* Filtered Musicians */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filterMusi.length > 0 ? (
            filterMusi.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="
                  bg-white rounded-2xl overflow-hidden border border-gray-200 
                  shadow-md cursor-pointer
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                "
              >
                {/* Image */}
                <div className="relative w-full h-60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Availability Badge */}
                  <span
                    className="
                      absolute top-3 right-3 bg-green-500 text-white 
                      text-xs px-3 py-1 rounded-full shadow-md
                    "
                  >
                    Available
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{item.speciality}</p>

                  {/* CTA */}
                  <button
                    onClick={() => navigate(`/appointment/${item._id}`)}
                    className="
                      mt-4 w-full py-2 
                      bg-black text-white rounded-lg 
                      hover:bg-purple-600 transition
                      text-sm font-medium
                    "
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center text-lg">
              No musicians found for "{speciality}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Musican;
