import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Ensure this path is correct

const BusBooking = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [seatPreference, setSeatPreference] = useState('Window');
  const [busType, setBusType] = useState('Any'); // Added state for bus type
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numPassengers = Number(passengers);

    // Dummy data with bus types
    const dummyResults = [
      {
        id: 1,
        departure,
        destination,
        date,
        passengers: numPassengers,
        seatPreference,
        bus: 'Express Shuttle X1',
        departureTime: '09:00 AM',
        destinationTime: '11:00 AM',
        type: 'AC', // Added bus type
      },
      {
        id: 2,
        departure,
        destination,
        date,
        passengers: numPassengers,
        seatPreference,
        bus: 'CityLink Service 42',
        departureTime: '12:00 PM',
        destinationTime: '02:00 PM',
        type: 'Non-AC', // Added bus type
      },
      {
        id: 3,
        departure,
        destination,
        date,
        passengers: numPassengers,
        seatPreference,
        bus: 'Interstate Coach 88',
        departureTime: '03:00 PM',
        destinationTime: '05:00 PM',
        type: 'Sleeper', // Added bus type
      },
    ];

    // Filter results based on busType selection
    const filteredResults = dummyResults.filter(result =>
      busType === 'Any' || result.type === busType
    );

    // Set the filtered results to state and update search status
    setResults(filteredResults);
    setSearchPerformed(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${assets.bus_background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div> 
      </div>
      <div className="relative bg-gray-500 bg-opacity-70 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-lg w-full max-w-3xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto">
        {!searchPerformed ? (
          <>
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-black">Bus Ticket Booking</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Departure and Destination */}
              <div className="flex items-center space-x-4">
                {/* Departure */}
                <div className="relative flex-1">
                  <label htmlFor="departure" className="block text-sm font-semibold text-black mb-2">Departure</label>
                  <input
                    type="text"
                    id="departure"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="e.g., New York"
                    className="block w-full border border-gray-400 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2 px-3"
                    required
                    aria-label="Departure Location"
                  />
                </div>

                {/* Arrow Icon */}
                <div className="flex items-center justify-center w-10">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 7l5 5-5 5" />
                    <path d="M6 12h12" />
                  </svg>
                </div>

                {/* Destination */}
                <div className="relative flex-1">
                  <label htmlFor="destination" className="block text-sm font-semibold text-black mb-2">Destination</label>
                  <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g., Boston"
                    className="block w-full border border-gray-400 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2 px-3"
                    required
                    aria-label="Destination Location"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative mt-4">
                <label htmlFor="date" className="block text-sm font-semibold text-black mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2 px-3"
                  required
                  aria-label="Travel Date"
                />
              </div>

              {/* Passengers */}
              <div className="relative mt-4">
                <label htmlFor="passengers" className="block text-sm font-semibold text-black mb-2">Number of Passengers</label>
                <input
                  type="number"
                  id="passengers"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2 px-3"
                  required
                  aria-label="Number of Passengers"
                />
              </div>

              {/* Seat Preference */}
              <div className="relative mt-4">
                <label htmlFor="seatPreference" className="block text-sm font-semibold text-black mb-2">Seat Preference</label>
                <select
                  id="seatPreference"
                  value={seatPreference}
                  onChange={(e) => setSeatPreference(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2 px-3"
                  aria-label="Seat Preference"
                >
                  <option value="Window">Window</option>
                  <option value="Aisle">Aisle</option>
                  <option value="Middle">Middle</option>
                </select>
              </div>

              {/* Bus Type Filter */}
              <div className="relative mt-4">
                <label htmlFor="busType" className="block text-sm font-semibold text-black mb-2">Bus Type</label>
                <select
                  id="busType"
                  value={busType}
                  onChange={(e) => setBusType(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2 px-3"
                  aria-label="Bus Type"
                >
                  <option value="Any">Any</option>
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non-AC</option>
                  <option value="Seater">Seater</option>
                  <option value="Sleeper">Sleeper</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Search
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="mt-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Available Buses</h2>
            {results.length > 0 ? (
              <ul className="space-y-4">
                {results.map((result) => (
                  <li key={result.id} className="relative p-4 bg-white rounded-lg shadow-md border border-gray-300 w-full max-w-md mx-auto">
                    {/* Departure and Destination Times */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-800">{result.bus}</span>
                      <span className="text-sm text-gray-500">{result.departureTime} - {result.destinationTime}</span>
                    </div>

                    {/* Bus Details */}
                    <div className="text-sm text-gray-700 space-y-2 mb-6">
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">Departure:</p>
                        <p className="text-gray-600">{result.departure}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">Destination:</p>
                        <p className="text-gray-600">{result.destination}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">Date:</p>
                        <p className="text-gray-600">{result.date}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">Passengers:</p>
                        <p className="text-gray-600">{result.passengers}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">Seat Preference:</p>
                        <p className="text-gray-600">{result.seatPreference}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">Bus Type:</p>
                        <p className="text-gray-600">{result.type}</p>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <button
                      className="absolute bottom-4 right-4 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                      Book Now
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No buses available for your search criteria.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusBooking;
