import { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-400 px-4 md:px-10">
      
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="w-12 h-12 rounded-full object-cover cursor-pointer shadow-sm"
      />

      {/* Links */}
      <ul className="hidden md:flex items-start gap-6 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'py-1 underline underline-offset-4' : 'py-1'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-musicians"
          className={({ isActive }) =>
            isActive ? 'py-1 underline underline-offset-4' : 'py-1'
          }
        >
          All Musicians
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'py-1 underline underline-offset-4' : 'py-1'
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'py-1 underline underline-offset-4' : 'py-1'
          }
        >
          About
        </NavLink>
      </ul>

      {/* Profile / Login */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            
            {/* Dropdown Menu */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-40 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate('my-profile')}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('my-appointment')}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/Login')}
            className="bg-black text-white px-4 py-2 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
