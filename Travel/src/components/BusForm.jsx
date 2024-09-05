import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        departure: '',
        destination: '',
        travelDate: '',
        passengers: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the BusResult page with formData
        navigate('/results', { state: { formData } });
    };

    return (
        <div className="max-w-lg mx-auto p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Bus Ticket Booking</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                    <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">Departure:</label>
                    <select
                        id="departure"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    >
                        <option value="">Select Departure Station</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination:</label>
                    <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    >
                        <option value="">Select Destination Station</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">Travel Date:</label>
                    <input
                        type="date"
                        id="travelDate"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">Number of Passengers:</label>
                    <input
                        type="number"
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        min="1"
                        className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Search Buses
                </button>
            </form>
        </div>
    );
};

export default BusForm;
