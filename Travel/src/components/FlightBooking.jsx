import React, { useState, useMemo, useRef, useEffect } from 'react';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';

const FlightSearchForm = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filteredDepartureAirports, setFilteredDepartureAirports] = useState([]);
  const [filteredDestinationAirports, setFilteredDestinationAirports] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('departure');
  const [stopsFilter, setStopsFilter] = useState('');
  const [fareTypeFilter, setFareTypeFilter] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({ name: '', email: '', phone: '' });

  const navigate = useNavigate();

  const airports = useMemo(() => [
    "John F. Kennedy International Airport (JFK)",
    "Los Angeles International Airport (LAX)",
    "Chicago O'Hare International Airport (ORD)",
    "San Francisco International Airport (SFO)",
    "Boston Logan International Airport (BOS)",
    "Washington Dulles International Airport (IAD)",
    "Philadelphia International Airport (PHL)",
    "Seattle-Tacoma International Airport (SEA)",

    // Indian Airports
  "Indira Gandhi International Airport (DEL)",
  "Chhatrapati Shivaji Maharaj International Airport (BOM)",
  "Kempegowda International Airport (BLR)",
  "Netaji Subhas Chandra Bose International Airport (CCU)",
  "Rajiv Gandhi International Airport (HYD)",
  "Cochin International Airport (COK)",
  "Chennai International Airport (MAA)",
  "Jaipur International Airport (JAI)",
  "Goa International Airport (GOI)"
  ], []);

  const debounceDepartureChange = useRef(debounce(value => {
    setFilteredDepartureAirports(
      value
        ? airports.filter(airport => airport.toLowerCase().includes(value.toLowerCase()))
        : []
    );
  }, 300)).current;

  const debounceDestinationChange = useRef(debounce(value => {
    setFilteredDestinationAirports(
      value
        ? airports.filter(airport => airport.toLowerCase().includes(value.toLowerCase()))
        : []
    );
  }, 300)).current;

  useEffect(() => {
    return () => {
      debounceDepartureChange.cancel();
      debounceDestinationChange.cancel();
    };
  }, [debounceDepartureChange, debounceDestinationChange]);

  const handleSelectAirport = (airport, setAirport, setFilteredAirports) => {
    setAirport(airport);
    setFilteredAirports([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!departure || !destination || !date) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulated search results
    const dummyFlights = Array.from({ length: 20 }, (_, index) => ({
      flightNumber: (1000 + index).toString(),
      airlineName: ['American Airlines', 'Delta Airlines', 'United Airlines', 'Southwest Airlines', 'JetBlue Airways'][index % 5],
      departureTime: `${8 + (index % 12)}:00 AM`,
      arrivalTime: `${12 + (index % 12)}:00 PM`,
      status: index % 2 === 0 ? 'On Time' : 'Delayed',
      stops: ['Non-Stop', '1 Stop', '2 Stops'][index % 3],
      fareType: ['Economy', 'Business', 'First Class', 'Premium Economy'][index % 4],
      imageUrl: `https://th.bing.com/th/id/R.e93337dc8b7bad5b8c69c241151a2d0b?rik=oEyiM6cX3%2bPOlQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f33%2fBoeing_747-8_first_flight_Everett%2c_WA.jpg&ehk=OOwspdmirhdFBoKMr6slNsWsX6n2kXy9mETd9HqzS2E%3d&risl=&pid=ImgRaw&r=0${index + 1}.jpg`,
      price: `$${(150 + index * 10).toFixed(2)}`,
    }));

    setSearchResults(dummyFlights);
    setIsSubmitted(true);
  };

  const getDuration = (departureTime, arrivalTime) => {
    const [depHours, depMinutes] = departureTime.split(':')[0].split(' ').map(Number);
    const [arrHours, arrMinutes] = arrivalTime.split(':')[0].split(' ').map(Number);
    return (arrHours - depHours) * 60 + (arrMinutes - depMinutes);
  };

  const sortedResults = useMemo(() => {
    return [...searchResults].sort((a, b) => {
      switch (sortCriteria) {
        case 'departure':
          return new Date(`1970-01-01T${a.departureTime}:00`) - new Date(`1970-01-01T${b.departureTime}:00`);
        case 'arrival':
          return new Date(`1970-01-01T${a.arrivalTime}:00`) - new Date(`1970-01-01T${b.arrivalTime}:00`);
        case 'duration':
          return getDuration(a.departureTime, a.arrivalTime) - getDuration(b.departureTime, b.arrivalTime);
        default:
          return 0;
      }
    });
  }, [searchResults, sortCriteria]);

  const filteredResults = useMemo(() => {
    return sortedResults.filter(flight => {
      const matchesStops = stopsFilter ? flight.stops === stopsFilter : true;
      const matchesFareType = fareTypeFilter ? flight.fareType === fareTypeFilter : true;

      return matchesStops && matchesFareType;
    });
  }, [sortedResults, stopsFilter, fareTypeFilter]);

  const handleBookNow = (flight) => {
    setSelectedFlight(flight);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFlight(null);
    setBookingInfo({ name: '', email: '', phone: '' });
  };

  const handleBookingInfoChange = (e) => {
    setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
  };

  // FlightSearchForm.js
const handleConfirmBooking = () => {
  if (!bookingInfo.name || !bookingInfo.email || !bookingInfo.phone) {
    alert('Please fill in all required fields.');
    return;
  }

  // Include booking status information
  const bookingStatus = 'Confirmed'; // or any status you determine

  navigate('/confirmation', {
    state: {
      flight: selectedFlight,
      bookingInfo,
      bookingStatus // Add booking status here
    }
  });
};


  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex min-h-screen">
        {isSubmitted && (
          <aside className="w-1/4 p-6 bg-white bg-opacity-90 shadow-lg border border-gray-300 flex flex-col space-y-6 mt-4 ml-4 rounded-lg">
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Stops</h2>
              <div className="space-y-2">
                {['', 'Non-Stop', '1 Stop', '2 Stops'].map((stop) => (
                  <label key={stop} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={stop}
                      checked={stopsFilter === stop}
                      onChange={() => setStopsFilter(stop)}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{stop || 'All'}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Fare Type</h2>
              <div className="space-y-2">
                {['', 'Economy', 'Business', 'First Class', 'Premium Economy'].map((fareType) => (
                  <label key={fareType} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={fareType}
                      checked={fareTypeFilter === fareType}
                      onChange={() => setFareTypeFilter(fareType)}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{fareType || 'All'}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>
        )}
        <main className={`${isSubmitted ? 'w-3/4' : 'w-full'} p-6 relative z-10`}>
          {!isSubmitted ? (
            <div className="max-w-lg mt-10 mx-auto p-8 bg-white bg-opacity-90 shadow-xl rounded-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Flight Ticket Booking</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="departure" className="block text-gray-700 font-semibold mb-2">Departure Airport</label>
                  <input
                    id="departure"
                    type="text"
                    value={departure}
                    onChange={(e) => {
                      setDeparture(e.target.value);
                      debounceDepartureChange(e.target.value);
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Search Departure Airport"
                  />
                  {filteredDepartureAirports.length > 0 && (
                    <ul className="mt-2 border border-gray-300 bg-white rounded-lg max-h-40 overflow-y-auto">
                      {filteredDepartureAirports.map(airport => (
                        <li
                          key={airport}
                          onClick={() => handleSelectAirport(airport, setDeparture, setFilteredDepartureAirports)}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                        >
                          {airport}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mb-6">
                  <label htmlFor="destination" className="block text-gray-700 font-semibold mb-2">Destination Airport</label>
                  <input
                    id="destination"
                    type="text"
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
                      debounceDestinationChange(e.target.value);
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Search Destination Airport"
                  />
                  {filteredDestinationAirports.length > 0 && (
                    <ul className="mt-2 border border-gray-300 bg-white rounded-lg max-h-40 overflow-y-auto">
                      {filteredDestinationAirports.map(airport => (
                        <li
                          key={airport}
                          onClick={() => handleSelectAirport(airport, setDestination, setFilteredDestinationAirports)}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                        >
                          {airport}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mb-6">
                  <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
                >
                  Search Flights
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-90 shadow-xl rounded-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Flight Search Results</h2>
              {filteredResults.length > 0 ? (
                <div className="space-y-6">
                  {filteredResults.map((flight) => (
                    <div key={flight.flightNumber} className="p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                      <div className="flex items-center mb-4">
                        <img src={flight.imageUrl} alt={flight.airlineName} className="w-32 h-32 object-cover rounded-lg mr-4" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{flight.airlineName}</h3>
                          <p className="text-gray-700">Flight Number: {flight.flightNumber}</p>
                          <p className="text-gray-700">Departure: {flight.departureTime}</p>
                          <p className="text-gray-700">Arrival: {flight.arrivalTime}</p>
                          <p className="text-gray-700">Duration: {getDuration(flight.departureTime, flight.arrivalTime)} minutes</p>
                          <p className="text-gray-700">Status: {flight.status}</p>
                          <p className="text-gray-700">Stops: {flight.stops}</p>
                          <p className="text-gray-700">Fare Type: {flight.fareType}</p>
                          <p className="text-gray-900 text-lg font-semibold">Price: {flight.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleBookNow(flight)}
                        className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600"
                      >
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-700">No flights found. Please adjust your search criteria.</p>
              )}
            </div>
          )}
        </main>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={bookingInfo.name}
                    onChange={handleBookingInfoChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={bookingInfo.email}
                    onChange={handleBookingInfoChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={bookingInfo.phone}
                    onChange={handleBookingInfoChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="py-2 px-4 bg-red-500 text-white rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmBooking}
                    className="py-2 px-4 bg-blue-500 text-white rounded-lg"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSearchForm;
