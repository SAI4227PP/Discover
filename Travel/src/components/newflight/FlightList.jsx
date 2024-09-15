import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../newflight/FlightList.css';  // Make sure to adjust the path according to your project structure
import FlightFilters from '../newflight/FlightFilters'; // Adjust the path based on your file structure

const FlightList = () => {
  const location = useLocation();
  const { from, to, date } = location.state || {};

  const [selectedSort, setSelectedSort] = useState('Price: Low to High');
  const [selectedDate, setSelectedDate] = useState(date);

  // Sample flight data (labels removed)
  const flights = [
    {
      id: 1,
      airline: 'IndiGo',
      flightNumber: '6E2155',
      departureTime: '19:25',
      arrivalTime: '21:55',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹4,499',
      discount: 'Extra ₹375 Off',
      stopType: 'Non-stop',
    },
    {
      id: 2,
      airline: 'Akasa Air',
      flightNumber: 'QP1630',
      departureTime: '20:45',
      arrivalTime: '23:20',
      duration: '2h 35m',
      departureCity: from,
      arrivalCity: to,
      price: '₹4,500',
      discount: 'Extra ₹262 Off',
      stopType: '1 Stop',
    },
    {
      id: 3,
      airline: 'IndiGo',
      flightNumber: '6E2150',
      departureTime: '18:00',
      arrivalTime: '20:25',
      duration: '2h 25m',
      departureCity: from,
      arrivalCity: to,
      price: '₹4,999',
      discount: 'Extra ₹285 Off',
      stopType: 'Non-stop',
    },
    {
      id: 4,
      airline: 'Air India',
      flightNumber: 'AI101',
      departureTime: '07:15',
      arrivalTime: '09:45',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹5,200',
      discount: 'Extra ₹300 Off',
      stopType: 'Non-stop',
    },
    {
      id: 5,
      airline: 'SpiceJet',
      flightNumber: 'SG332',
      departureTime: '12:30',
      arrivalTime: '15:00',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹4,800',
      discount: 'Extra ₹250 Off',
      stopType: '1 Stop',
    },
    {
      id: 6,
      airline: 'GoAir',
      flightNumber: 'G8351',
      departureTime: '15:00',
      arrivalTime: '17:30',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹4,700',
      discount: 'Extra ₹200 Off',
      stopType: 'Non-stop',
    },
    {
      id: 7,
      airline: 'Vistara',
      flightNumber: 'UK835',
      departureTime: '10:00',
      arrivalTime: '12:30',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹5,000',
      discount: 'Extra ₹350 Off',
      stopType: '1 Stop',
    },
    {
      id: 8,
      airline: 'AirAsia',
      flightNumber: 'I5801',
      departureTime: '22:00',
      arrivalTime: '00:30',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹4,600',
      discount: 'Extra ₹220 Off',
      stopType: 'Non-stop',
    },
    {
      id: 9,
      airline: 'Jet Airways',
      flightNumber: '9W102',
      departureTime: '06:30',
      arrivalTime: '09:00',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹5,300',
      discount: 'Extra ₹280 Off',
      stopType: '1 Stop',
    },
    {
      id: 10,
      airline: 'SriLankan Airlines',
      flightNumber: 'UL868',
      departureTime: '08:00',
      arrivalTime: '10:30',
      duration: '2h 30m',
      departureCity: from,
      arrivalCity: to,
      price: '₹4,900',
      discount: 'Extra ₹270 Off',
      stopType: 'Non-stop',
    }
  ];

  // Sorting function
  const sortFlights = (flights, sortBy) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return [...flights].sort((a, b) => parseInt(a.price.replace('₹', '').replace(',', '')) - parseInt(b.price.replace('₹', '').replace(',', '')));
      case 'Price: High to Low':
        return [...flights].sort((a, b) => parseInt(b.price.replace('₹', '').replace(',', '')) - parseInt(a.price.replace('₹', '').replace(',', '')));
      case 'Fastest: Shortest First':
        return [...flights].sort((a, b) => parseInt(a.duration.replace('h', '').replace('m', '').replace(' ', '')) - parseInt(b.duration.replace('h', '').replace('m', '').replace(' ', '')));
      case 'Departure: Earliest First':
        return [...flights].sort((a, b) => {
          const aTime = new Date(`1970-01-01T${a.departureTime}:00`);
          const bTime = new Date(`1970-01-01T${b.departureTime}:00`);
          return aTime - bTime;
        });
      case 'Smart: Recommended':
        return flights; // No specific sorting applied for "Smart"
      default:
        return flights;
    }
  };

  const sortedFlights = sortFlights(flights, selectedSort);

  // Sample dates for demonstration (replace with actual date logic if needed)
  const dates = [
    'Sun, 15 Sep - ₹5,000',
    'Mon, 16 Sep - ₹4,499',
    'Tue, 17 Sep - ₹4,670',
    'Wed, 18 Sep - ₹5,191',
    'Thu, 19 Sep - ₹5,191',
    'Fri, 20 Sep - ₹5,604',
    'Sat, 21 Sep - ₹5,191',
  ];

  return (
    <div className="flight-list-container">
      {/* Flight Filters */}
      <aside className="flight-filters">
        <FlightFilters />
      </aside>

      {/* Flight List */}
      <main className="flight-list">
        {/* Display search criteria */}
        <div className="search-criteria">
          <h2>Flights from {from} to {to} on {selectedDate}</h2>
        </div>

        {/* Date Navigation */}
        <div className="date-navigation">
          {dates.map((item) => {
            const [buttonDate, price] = item.split(' - ');
            return (
              <button
                key={buttonDate}
                className={selectedDate === buttonDate ? 'selected' : ''}
                onClick={() => setSelectedDate(buttonDate)}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Sorting Options */}
        <div className="sort-options">
          {['Price: Low to High', 'Price: High to Low', 'Fastest: Shortest First', 'Departure: Earliest First', 'Smart: Recommended'].map(option => (
            <button
              key={option}
              className={selectedSort === option ? 'selected' : ''}
              onClick={() => setSelectedSort(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Flight List */}
        <div className="flights">
          {sortedFlights.map((flight) => (
            <div key={flight.id} className="flight-item">
              <div className="flight-details">
                <span className="airline">{flight.airline}</span>
                <span className="flight-number">{flight.flightNumber}</span>
                <div className="times">
                  <span className="departure">
                    {flight.departureTime} {flight.departureCity}
                  </span>
                  <span className="duration">{flight.duration}</span>
                  <span className="arrival">
                    {flight.arrivalTime} {flight.arrivalCity}
                  </span>
                </div>
                <span className="stop-type">{flight.stopType}</span>
                <span className="price">{flight.price}</span>
                <span className="discount">{flight.discount}</span>
              </div>
              <div className="actions">
                <button className="book-button">Book</button>
                <button className="details-button">Flight Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FlightList;
