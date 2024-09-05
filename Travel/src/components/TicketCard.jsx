import React from 'react';

const TicketCard = ({ ticket }) => {
  const { imageUrl, details } = ticket;

  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 mb-4">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img src={imageUrl} alt="Ticket" className="w-48 h-auto object-cover" />
      </div>
      
      {/* Details Section */}
      <div className="p-6 flex-grow">
        <h2 className="text-2xl font-semibold mb-2">{details.title}</h2>
        <p className="text-lg mb-2"><strong>Departure:</strong> {details.departure}</p>
        <p className="text-lg mb-2"><strong>Arrival:</strong> {details.arrival}</p>
        <p className="text-lg mb-2"><strong>Price:</strong> {details.price}</p>
        <p className="text-lg mb-2"><strong>Booking Number:</strong> {details.bookingNumber}</p>
        <p className="text-lg mb-2"><strong>Status:</strong> {details.status}</p>
      </div>
    </div>
  );
};

export default TicketCard;