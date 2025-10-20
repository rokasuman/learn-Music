import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center text-center gap-6 bg-transparent" id="app-download">
      
      {/* Text */}
      <p className="text-2xl md:text-3xl font-semibold text-gray-900">
        For a better experience, download <br />
        <span className="text-purple-600">Learn Music App</span>
      </p>

      {/* App Store Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <img 
          src={assets.play_store} 
          alt="Google Play Store" 
          className="w-40 h-auto cursor-pointer hover:scale-105 transition-transform"
        />
        <img 
          src={assets.app_store} 
          alt="Apple App Store" 
          className="w-40 h-auto cursor-pointer hover:scale-105 transition-transform"
        />
      </div>
    </div>
  )
}

export default AppDownload
