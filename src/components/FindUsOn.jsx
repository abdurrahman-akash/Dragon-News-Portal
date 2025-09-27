import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FindUsOn = () => {
  return (
    <div className="mb-6">
      <h2 className='font-bold mb-4 text-lg sm:text-xl'>Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
            <button className="btn bg-base-100 justify-start join-item text-xs sm:text-sm gap-2 sm:gap-3">
              <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" /> 
              Facebook
            </button>
            <button className="btn bg-base-100 justify-start join-item text-xs sm:text-sm gap-2 sm:gap-3">
              <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" /> 
              Twitter
            </button>
            <button className="btn bg-base-100 justify-start join-item text-xs sm:text-sm gap-2 sm:gap-3">
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" /> 
              LinkedIn
            </button>
            <button className="btn bg-base-100 justify-start join-item text-xs sm:text-sm gap-2 sm:gap-3">
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" /> 
              Instagram
            </button>
        </div>
      </div>
    </div>
  )
};

export default FindUsOn;
