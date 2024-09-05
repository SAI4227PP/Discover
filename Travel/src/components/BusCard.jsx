import React from 'react';
import PropTypes from 'prop-types';

const BusCard = ({ bus }) => {
    const {
        name,
        type,
        price,
        departureDate,
        departureTime,
        departure,
        arrivalDate,
        arrivalTime,
        destination,
        rating,
        ratingCount,
        amenities,
    } = bus;

    return (
        <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">Ad</span>
                    <span className="ml-2 text-xl font-semibold">{name}</span>
                </div>
                <div className="text-sm text-gray-500">Starting at</div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-sm">{type}</div>
                <div className="text-2xl font-semibold text-red-500">₹{price}</div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                    <div className="text-sm">{departureDate}</div>
                    <div className="text-xl font-semibold">{departureTime}</div>
                    <div className="text-sm text-gray-500">{departure}</div>
                </div>
                <div className="text-center">
                    <div className="text-sm">{arrivalDate}</div>
                    <div className="text-xl font-semibold">{arrivalTime}</div>
                    <div className="text-sm text-gray-500">{destination}</div>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-green-600 flex items-center">
                    <span className="text-xl font-bold">{rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({ratingCount})</span>
                </div>
                <div className="flex items-center">
                    {amenities.map((icon, index) => (
                        <img key={index} src={`path_to_images/${icon}`} alt={`Amenity: ${icon}`} className="w-6 h-6 mr-2" />
                    ))}
                </div>
                <div className="text-sm text-gray-500">+{amenities.length}</div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">Live Tracking</div>
                <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => alert('Show Seats clicked')}>
                    Show Seats
                </button>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                <div className="flex-1 text-center">Boarding & Dropping Points</div>
                <div className="flex-1 text-center">Amenities</div>
                <div className="flex-1 text-center">Cancellation Policy</div>
                <div className="flex-1 text-center">Travel Policy</div>
            </div>
        </div>
    );
};

BusCard.propTypes = {
    bus: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        departureDate: PropTypes.string.isRequired,
        departureTime: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        arrivalDate: PropTypes.string.isRequired,
        arrivalTime: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default BusCard;
