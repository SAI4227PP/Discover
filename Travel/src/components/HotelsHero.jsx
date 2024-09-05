import React from 'react';
import { assets } from '../assets/assets';

const HotelsHero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-6 sm:py-4 px-4 sm:px-6">
        <div className="text-[#414141] text-center sm:text-left">
          {/* Best Summer Trip */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
            <p className="w-6 md:w-8 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-xs sm:text-sm md:text-base hover:text-gray-700 transition-colors duration-300">
              BEST SUMMER TRIP
            </p>
          </div>
          {/* Limited Bookings */}
          <h1 className="prata-regular text-xl sm:text-2xl lg:text-3xl leading-tight mb-3 hover:text-gray-900 transition-colors duration-300">
            LIMITED BOOKINGS
          </h1>
          {/* Book Now */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="font-semibold text-xs sm:text-sm md:text-base hover:text-gray-700 transition-colors duration-300">
              BOOK NOW
            </p>
            <p className="w-6 md:w-8 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img
        className="w-full sm:w-2/3 md:w-1/2 transition-transform duration-300 hover:scale-105 border border-transparent hover:border-[#414141] hover:border-2 rounded-lg"
        src={assets.Offer}
        alt="Beautiful summer destination in Goa"
      />
    </div>
  );
};

export default HotelsHero;
