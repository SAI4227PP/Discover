import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingDetails = ({ details }) => (
  <div className="text-left space-y-2">
    <p><strong>Hotel Name:</strong> {details.hotelName}</p>
    <p><strong>Name:</strong> {details.name}</p>
    <p><strong>Email:</strong> {details.email}</p>
    <p><strong>Phone:</strong> {details.phone}</p>
    <p><strong>Check-in Date:</strong> {details.checkInDate}</p>
    <p><strong>Check-out Date:</strong> {details.checkOutDate}</p>
    <p><strong>Price:</strong> ${parseFloat(details.price).toFixed(2)}</p>
  </div>
);

const HotelBookTrack = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const bookingDetails = {
    hotelName: query.get('hotelName') || 'N/A',
    name: query.get('name') || 'N/A',
    email: query.get('email') || 'N/A',
    phone: query.get('phone') || 'N/A',
    checkInDate: query.get('checkInDate') || 'N/A',
    checkOutDate: query.get('checkOutDate') || 'N/A',
    price: query.get('price') || '0.00',
    image: query.get('image') || '/path/to/default-image.jpg',
    success: query.get('success') === 'true'
  };

  const hasDetails = bookingDetails.name !== 'N/A';

  return (
    <div className="container mx-auto my-12 p-8">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        {hasDetails ? (
          <div className="flex flex-col md:flex-row">
            {/* Hotel Image */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <img
                src={bookingDetails.image}
                alt={`Image of ${bookingDetails.hotelName}`}
                className="w-full h-64 md:h-auto object-cover rounded-lg"
                onError={(e) => e.target.src = '/path/to/default-image.jpg'} // Fallback image on error
              />
            </div>

            {/* Booking Details */}
            <div className="w-full md:w-2/3 md:pl-8 flex flex-col justify-between">
              <div className="mb-6">
                <BookingDetails details={bookingDetails} />
              </div>
              {/* Centered Status Message */}
              <div className="flex justify-center items-center">
                <p className={`text-xl font-semibold ${bookingDetails.success ? 'text-green-600' : 'text-red-600'}`}>
                  {bookingDetails.success ? 'Booking Successful!' : 'Booking Unsuccessful'}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold">No booking details found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelBookTrack;
