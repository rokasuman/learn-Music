import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full overflow-x-hidden">
      {/* Main container (content centered) */}
      <div className="flex flex-col md:flex-row justify-between items-start py-8 px-6 md:px-20 gap-8 max-w-[1200px] mx-auto">
        
        {/* Left Section */}
        <div className="flex flex-col gap-3 w-full md:w-1/3 items-center md:items-start text-center md:text-left">
          <img
            className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
            src={assets.logo}
            alt="Logo"
          />
          <p className="text-white text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 text-center md:text-left">
          <p className="font-medium mb-2">Company</p>
          <ul className="flex flex-col gap-1 text-sm md:text-base">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 text-center md:text-right">
          <p className="font-medium mb-2">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-sm md:text-base">
            <li>0411 198 123</li>
            <li>learnmusic@gmail.com</li>
            <li className="flex justify-center md:justify-end gap-3 mt-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebook_icon} alt="Facebook" className="w-7 h-7 md:w-6 md:h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter_icon} alt="Twitter" className="w-7 h-7 md:w-6 md:h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin_icon} alt="LinkedIn" className="w-7 h-7 md:w-6 md:h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 w-full" />

      {/* Copyright */}
      <div className="py-3 text-center text-xs text-gray-500 w-full">
        © Learn Music - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
