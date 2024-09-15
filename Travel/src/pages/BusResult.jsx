import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BusCard from '../components/BusCard';
import BusFilter from '../components/BusFilter';

const BusResult = () => {
    const { state } = useLocation();
    const { formData } = state || {};
    const [buses, setBuses] = useState([]);
    const [filteredBuses, setFilteredBuses] = useState([]);
    const [filters, setFilters] = useState({
        priceRange: [437, 3500],
        busType: [],
        departureTime: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Calculate arrival date based on departure time and travel hours
    const calculateArrivalDate = (departureDate, hours) => {
        const date = new Date(departureDate);
        date.setHours(date.getHours() + hours);
        return date.toISOString().split('T')[0];
    };

    // Sample data to illustrate bus results based on the formData
    const sampleBuses = [
        {
            id: 1,
            name: 'IntrCity SmartBus',
            type: 'AC Sleeper (2 + 1)',
            price: 940,
            departureDate: formData?.travelDate || 'Unknown',
            departureTime: '23:00',
            departure: formData?.departure || 'Unknown',
            arrivalDate: calculateArrivalDate(formData?.travelDate || 'Unknown', 9),
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
            departureDate: formData?.travelDate || 'Unknown',
            departureTime: '20:00',
            departure: formData?.departure || 'Unknown',
            arrivalDate: calculateArrivalDate(formData?.travelDate || 'Unknown', 11),
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
        {
            id: 3,
            name: 'VRL Travels',
            type: 'AC Seater (2 + 2)',
            price: 850,
            departureDate: formData?.travelDate || 'Unknown',
            departureTime: '22:00',
            departure: formData?.departure || 'Unknown',
            arrivalDate: calculateArrivalDate(formData?.travelDate || 'Unknown', 9.5),
            arrivalTime: '07:30',
            destination: formData?.destination || 'Unknown',
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
            departureDate: formData?.travelDate || 'Unknown',
            departureTime: '21:30',
            departure: formData?.departure || 'Unknown',
            arrivalDate: calculateArrivalDate(formData?.travelDate || 'Unknown', 9.5),
            arrivalTime: '07:00',
            destination: formData?.destination || 'Unknown',
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
            departureDate: formData?.travelDate || 'Unknown',
            departureTime: '22:30',
            departure: formData?.departure || 'Unknown',
            arrivalDate: calculateArrivalDate(formData?.travelDate || 'Unknown', 9.5),
            arrivalTime: '08:45',
            destination: formData?.destination || 'Unknown',
            rating: 4.8,
            ratingCount: 25600,
            amenities: [
                'bus_icon.png',
                'ticket_icon.png',
                'luggage_icon.png',
                'wifi_icon.png'
            ],
        },
        // Additional sample buses...
    ];

    useEffect(() => {
        // Simulate data fetch
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

    useEffect(() => {
        const applyFilters = () => {
            let filtered = buses.filter(bus => {
                const [minPrice, maxPrice] = filters.priceRange;
                const isWithinPriceRange = bus.price >= minPrice && bus.price <= maxPrice;
                const isTypeMatched = filters.busType.length === 0 || filters.busType.includes(bus.type);
                const isDepartureTimeMatched = filters.departureTime.length === 0 || filters.departureTime.includes(bus.departureTime);

                return isWithinPriceRange && isTypeMatched && isDepartureTimeMatched;
            });
            setFilteredBuses(filtered.slice(0, 4)); // Limit to 4 results
        };

        applyFilters();
    }, [filters, buses]);

    if (loading) return <div className="text-center text-gray-700">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="flex p-8">
            {/* Filter Section */}
            <div className="w-full lg:w-1/4 lg:pr-8 mb-6 lg:mb-0">
                <BusFilter filters={filters} onChange={setFilters} />
            </div>

            {/* Bus Results Section */}
            <div className="w-full lg:w-3/4 overflow-y-auto max-h-screen">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Available Buses</h1>
                {filteredBuses.length > 0 ? (
                    filteredBuses.map((bus) => (
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
