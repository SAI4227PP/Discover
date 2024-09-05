import React from 'react';
import { assets } from '../assets/assets';

const VacationHero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-300'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base hover:text-gray-700 transition-colors duration-300'>
              BEST SUMMER TRIP
            </p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed hover:text-gray-900 transition-colors duration-300'>
            LIMITED BOOKINGS
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base hover:text-gray-700 transition-colors duration-300'>
              BOOK NOW
            </p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img
        className='w-full sm:w-1/2 transition-transform duration-300 hover:scale-105 border border-transparent hover:border-[#414141] hover:border-2'
        src={assets.Goa_main}
        alt="Beautiful summer destination in Goa"
      />
    </div>
  );
};

export default VacationHero;
