import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopMusican = () => {
  const navigate = useNavigate();
  const { musican } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 md:px-10">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center tracking-tight">
      Top Legendary Musicians
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        Browse and book iconic musicians with just one click.
      </p>

      {/* Grid Section */}
      <div
        className="
          w-full grid gap-8 mt-10
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        "
      >
        {musican.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="
              bg-white overflow-hidden rounded-2xl shadow-md border border-gray-200
              hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 cursor-pointer
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
                  absolute top-3 right-3 
                  bg-green-500 text-white text-xs px-3 py-1 rounded-full 
                  shadow-md
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
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          navigate("/all-musicians");
          scrollTo(0, 0);
        }}
        className="
          mt-12 px-10 py-3 rounded-full 
          bg-black text-white font-medium
          hover:bg-purple-600 transition-all
          shadow-lg
        "
      >
        View All Musicians
      </button>
    </div>
  );
};

export default TopMusican;
