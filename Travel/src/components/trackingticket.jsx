import React, { useState } from 'react';
import TicketBooking from './TicketBooking';
import TrackTicket from './TrackTicket';

// Sample ticket data
const ticketsData = [
  {
    type: 'Flight',
    imageUrl: 'https://via.placeholder.com/150?text=Flight',
    details: {
      title: 'Flight to New York',
      departure: 'September 30, 2024, 10:00 AM',
      arrival: 'September 30, 2024, 2:00 PM',
      price: '$350',
    },
  },
  {
    type: 'Bus',
    imageUrl: 'https://via.placeholder.com/150?text=Bus',
    details: {
      title: 'Bus to San Francisco',
      departure: 'October 1, 2024, 9:00 AM',
      arrival: 'October 1, 2024, 5:00 PM',
      price: '$50',
    },
  },
  // Add more tickets as needed
];

const App = () => {
  const [bookedTickets, setBookedTickets] = useState([]);

  const handleBook = (ticket, bookingDate) => {
    setBookedTickets(prevTickets => [
      ...prevTickets,
      { ...ticket, bookingDate }
    ]);
  };

  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Book Tickets</h1>
        {ticketsData.map((ticket, index) => (
          <TicketBooking
            key={index}
            ticket={ticket}
            onBook={handleBook}
          />
        ))}
      </div>
      
      <TrackTicket bookedTickets={bookedTickets} />
    </div>
  );
};

export default App;
