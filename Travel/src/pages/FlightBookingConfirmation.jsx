// FlightBookingConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const FlightBookingConfirmation = () => {
  const location = useLocation();
  const flight = location.state?.flight;
  const bookingInfo = location.state?.bookingInfo;

  if (!flight || !bookingInfo) {
    return <p>No booking information found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-90 shadow-xl rounded-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Booking Confirmation</h2>
      <div className="flex items-center mb-6">
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
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Details</h3>
        <p className="text-gray-700">Name: {bookingInfo.name}</p>
        <p className="text-gray-700">Email: {bookingInfo.email}</p>
        <p className="text-gray-700">Phone: {bookingInfo.phone}</p>
      </div>
    </div>
  );
};

const getDuration = (departureTime, arrivalTime) => {
  // Function to calculate duration in minutes
  const dep = new Date(departureTime);
  const arr = new Date(arrivalTime);
  const duration = (arr - dep) / 60000; // Convert milliseconds to minutes
  return duration;
};

export default FlightBookingConfirmation;
