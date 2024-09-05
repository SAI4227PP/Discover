import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BusCard from '../components/BusCard';
import BusFilter from '../components/BusFilter';

const BusResult = () => {
    const { state } = useLocation();
    const { formData } = state || {};
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Sample data to illustrate bus results based on the formData
    const sampleBuses = [
        {
            id: 1,
            name: 'IntrCity SmartBus',
            type: 'AC Sleeper (2 + 1)',
            price: 940,
            departureDate: '04 Sep',
            departureTime: '23:00',
            departure: formData?.departure || 'Unknown',
            arrivalDate: '05 Sep',
            arrivalTime: '08:25',
            destination: formData?.destination || 'Unknown',
            rating: 4.6,
            ratingCount: 32400,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
                'wifi_icon.png'
            ],
        },
        {
            id: 2,
            name: 'GoBus Express',
            type: 'Non-AC Seater (2 + 2)',
            price: 720,
            departureDate: '04 Sep',
            departureTime: '20:00',
            departure: formData?.departure || 'Unknown',
            arrivalDate: '05 Sep',
            arrivalTime: '07:15',
            destination: formData?.destination || 'Unknown',
            rating: 4.2,
            ratingCount: 14500,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'wifi_icon.png'
            ],
        },
        // Additional sample buses...
        {
            id: 1,
            name: 'IntrCity SmartBus',
            type: 'AC Sleeper (2 + 1)',
            price: 940,
            departureDate: '04 Sep',
            departureTime: '23:00',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '08:25',
            destination: formData.destination,
            rating: 4.6,
            ratingCount: 32400,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
                'wifi_icon.png'
            ],
        },
        {
            id: 2,
            name: 'GoBus Express',
            type: 'Non-AC Seater (2 + 2)',
            price: 720,
            departureDate: '04 Sep',
            departureTime: '20:00',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '07:15',
            destination: formData.destination,
            rating: 4.2,
            ratingCount: 14500,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'wifi_icon.png'
            ],
        },
        {
            id: 3,
            name: 'VRL Travels',
            type: 'AC Seater (2 + 2)',
            price: 850,
            departureDate: '04 Sep',
            departureTime: '22:00',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '07:30',
            destination: formData.destination,
            rating: 4.4,
            ratingCount: 19200,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
            ],
        },
        {
            id: 4,
            name: 'SRS Travels',
            type: 'Non-AC Sleeper (2 + 1)',
            price: 780,
            departureDate: '04 Sep',
            departureTime: '21:30',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '07:00',
            destination: formData.destination,
            rating: 4.0,
            ratingCount: 13400,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
            ],
        },
        {
            id: 5,
            name: 'Orange Tours',
            type: 'AC Sleeper (2 + 1)',
            price: 1200,
            departureDate: '04 Sep',
            departureTime: '22:30',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '08:45',
            destination: formData.destination,
            rating: 4.8,
            ratingCount: 25600,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
                'wifi_icon.png'
            ],
        },
        {
            id: 6,
            name: 'KSRTC',
            type: 'AC Volvo (2 + 2)',
            price: 1050,
            departureDate: '04 Sep',
            departureTime: '22:45',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '08:30',
            destination: formData.destination,
            rating: 4.5,
            ratingCount: 21000,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'wifi_icon.png'
            ],
        },
        {
            id: 7,
            name: 'Parveen Travels',
            type: 'Non-AC Sleeper (2 + 1)',
            price: 750,
            departureDate: '04 Sep',
            departureTime: '21:00',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '07:45',
            destination: formData.destination,
            rating: 4.1,
            ratingCount: 17800,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
            ],
        },
        {
            id: 8,
            name: 'GreenLine Travels',
            type: 'AC Seater/Sleeper (2 + 1)',
            price: 1100,
            departureDate: '04 Sep',
            departureTime: '22:15',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '08:15',
            destination: formData.destination,
            rating: 4.7,
            ratingCount: 24500,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
                'wifi_icon.png'
            ],
        },
        {
            id: 9,
            name: 'Kaveri Travels',
            type: 'Non-AC Seater (2 + 2)',
            price: 680,
            departureDate: '04 Sep',
            departureTime: '19:45',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '06:30',
            destination: formData.destination,
            rating: 3.9,
            ratingCount: 12000,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
            ],
        },
        {
            id: 10,
            name: 'Jabbar Travels',
            type: 'AC Sleeper (2 + 1)',
            price: 1150,
            departureDate: '04 Sep',
            departureTime: '23:15',
            departure: formData.departure,
            arrivalDate: '05 Sep',
            arrivalTime: '09:00',
            destination: formData.destination,
            rating: 4.3,
            ratingCount: 19800,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
                'wifi_icon.png'
            ],
        },

    ];

    useEffect(() => {
        // Simulating data fetch
        setTimeout(() => {
            if (formData) {
                // Simulate a data fetch or API call
                setBuses(sampleBuses); // Replace with actual fetch call
                setLoading(false);
            } else {
                setError('No form data provided.');
                setLoading(false);
            }
        }, 1000);
    }, [formData]);

    if (loading) return <div className="text-center text-gray-700">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="flex p-8">
            {/* Filter Section */}
            <div className="w-full lg:w-1/4 lg:pr-8 mb-6 lg:mb-0">
                <BusFilter />
            </div>

            {/* Bus Results Section */}
            <div className="w-full lg:w-3/4 overflow-y-auto max-h-screen">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Available Buses</h1>
                {buses.length > 0 ? (
                    buses.map((bus) => (
                        <BusCard key={bus.id} bus={bus} />
                    ))
                ) : (
                    <div className="text-center text-gray-600">No buses available for the selected route.</div>
                )}
            </div>
        </div>
    );
};

export default BusResult;
