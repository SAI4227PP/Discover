import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you use React Router for navigation

const TicketBooking = ({ ticket, onBook }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [bookingDate, setBookingDate] = useState('');

  const handleBook = () => {
    const currentDate = new Date().toLocaleDateString();
    setIsBooked(true);
    setBookingDate(currentDate);
    onBook(ticket, currentDate); // Notify the parent component
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{ticket.details.title}</h2>
      <p><strong>Departure:</strong> {ticket.details.departure}</p>
      <p><strong>Arrival:</strong> {ticket.details.arrival}</p>
      <p><strong>Price:</strong> {ticket.details.price}</p>
      <button
        onClick={handleBook}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        {isBooked ? `Booked on ${bookingDate}` : 'Book Now'}
      </button>
    </div>
  );
};

export default TicketBooking;
