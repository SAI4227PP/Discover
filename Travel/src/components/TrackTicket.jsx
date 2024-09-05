import React from 'react';

const TrackTicket = ({ bookedTickets }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Tracked Tickets</h1>
      {bookedTickets.length === 0 ? (
        <p className="text-center">No tickets booked yet.</p>
      ) : (
        bookedTickets.map((ticket, index) => (
          <div key={index} className="flex bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 mb-4">
            <div className="flex-shrink-0">
              <img src={ticket.imageUrl} alt="Ticket" className="w-48 h-auto object-cover" />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-semibold mb-2">{ticket.details.title}</h2>
              <p className="text-lg mb-2"><strong>Departure:</strong> {ticket.details.departure}</p>
              <p className="text-lg mb-2"><strong>Arrival:</strong> {ticket.details.arrival}</p>
              <p className="text-lg mb-2"><strong>Price:</strong> {ticket.details.price}</p>
              <p className="text-lg mb-2"><strong>Booking Date:</strong> {ticket.bookingDate}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TrackTicket;
