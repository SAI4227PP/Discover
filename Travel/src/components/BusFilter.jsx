import React from 'react';

const BusFilter = ({ filters, onChange }) => {
  const handlePriceRangeChange = (e) => {
    const value = e.target.value.split(',').map(Number);
    onChange((prevFilters) => ({ ...prevFilters, priceRange: value }));
  };

  const handleBusTypeChange = (e) => {
    const { value, checked } = e.target;
    onChange((prevFilters) => {
      const busType = checked
        ? [...prevFilters.busType, value]
        : prevFilters.busType.filter((type) => type !== value);
      return { ...prevFilters, busType };
    });
  };

  const handleDepartureTimeChange = (e) => {
    const { value, checked } = e.target;
    onChange((prevFilters) => {
      const departureTime = checked
        ? [...prevFilters.departureTime, value]
        : prevFilters.departureTime.filter((time) => time !== value);
      return { ...prevFilters, departureTime };
    });
  };

  return (
    <div className="bg-white p-4 border rounded-lg shadow-md max-w-xs">
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-gray-800 font-semibold mb-3">Price Range</h3>
        <input
          type="range"
          min="437"
          max="3500"
          value={filters.priceRange.join(',')}
          onChange={handlePriceRangeChange}
          className="w-full h-2 bg-red-500 rounded-lg"
        />
        <div className="flex justify-between mt-2 text-gray-800 font-medium">
          <span>₹{filters.priceRange[0]}</span>
          <span>₹{filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Bus Type */}
      <div className="mb-6">
        <h3 className="text-gray-800 font-semibold mb-3">Bus Type</h3>
        <div className="grid grid-cols-2 gap-3">
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="AC Sleeper (2 + 1)"
              checked={filters.busType.includes('AC Sleeper (2 + 1)')}
              onChange={handleBusTypeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            AC Sleeper
          </label>
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="Non-AC Seater (2 + 2)"
              checked={filters.busType.includes('Non-AC Seater (2 + 2)')}
              onChange={handleBusTypeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            Non-AC Seater
          </label>
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="AC Seater (2 + 2)"
              checked={filters.busType.includes('AC Seater (2 + 2)')}
              onChange={handleBusTypeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            AC Seater
          </label>
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="Non-AC Sleeper (2 + 1)"
              checked={filters.busType.includes('Non-AC Sleeper (2 + 1)')}
              onChange={handleBusTypeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            Non-AC Sleeper
          </label>
        </div>
      </div>

      {/* Departure Time */}
      <div>
        <h3 className="text-gray-800 font-semibold mb-3">Departure Time</h3>
        <div className="grid grid-cols-2 gap-3">
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="Before 10 AM"
              checked={filters.departureTime.includes('Before 10 AM')}
              onChange={handleDepartureTimeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            Before 10 AM
          </label>
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="10 AM - 5 PM"
              checked={filters.departureTime.includes('10 AM - 5 PM')}
              onChange={handleDepartureTimeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            10 AM - 5 PM
          </label>
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="5 PM - 11 PM"
              checked={filters.departureTime.includes('5 PM - 11 PM')}
              onChange={handleDepartureTimeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            5 PM - 11 PM
          </label>
          <label className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-800 font-medium">
            <input
              type="checkbox"
              value="After 11 PM"
              checked={filters.departureTime.includes('After 11 PM')}
              onChange={handleDepartureTimeChange}
              className="form-checkbox h-5 w-5 text-red-600 mr-2"
            />
            After 11 PM
          </label>
        </div>
      </div>
    </div>
  );
};

export default BusFilter;
