import React from 'react';

const BusFilter = () => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md max-w-xs">
      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
          <span className="text-gray-800 font-medium">Price Drop</span>
        </label>
      </div>
      
      <div className="mb-6">
        <h3 className="text-gray-800 font-semibold mb-3">Bus Type</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="ac_icon.png" alt="AC" className="w-6 h-6 mr-2" />
            AC
          </button>
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="sleeper_icon.png" alt="Sleeper" className="w-6 h-6 mr-2" />
            Sleeper
          </button>
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="non_ac_icon.png" alt="Non AC" className="w-6 h-6 mr-2" />
            Non AC
          </button>
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="seater_icon.png" alt="Seater" className="w-6 h-6 mr-2" />
            Seater
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-gray-800 font-semibold mb-3">Price Range</h3>
        <input type="range" min="437" max="3500" className="w-full h-2 bg-red-500 rounded-lg" />
        <div className="flex justify-between mt-2 text-gray-800 font-medium">
          <span>₹437</span>
          <span>₹3500</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-800 font-semibold mb-3">Departure Time</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="morning_icon.png" alt="Before 10 AM" className="w-6 h-6 mr-2" />
            Before 10 AM
          </button>
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="day_icon.png" alt="10 AM - 5 PM" className="w-6 h-6 mr-2" />
            10 AM - 5 PM
          </button>
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="evening_icon.png" alt="5 PM - 11 PM" className="w-6 h-6 mr-2" />
            5 PM - 11 PM
          </button>
          <button className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <img src="night_icon.png" alt="After 11 PM" className="w-6 h-6 mr-2" />
            After 11 PM
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusFilter;
