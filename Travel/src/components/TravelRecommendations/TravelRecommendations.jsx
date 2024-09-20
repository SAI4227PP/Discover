import React, { useState } from 'react';
import '../TravelRecommendations/TravelRecommendations.css'; // Import the CSS file

// Sample data
const travelData = {
    trips: [
        // Couples
            {'destination': 'Paris', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'New York City', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'San Francisco', 'age_group': '25-34', 'travel_mode': 'Road Trip', 'trip_type': 'Couple'},
            {'destination': 'Amsterdam', 'age_group': '25-34', 'travel_mode': 'Train', 'trip_type': 'Couple'},
            {'destination': 'Venice', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Barcelona', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Rome', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Couple'},
            {'destination': 'Dubai', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Lisbon', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Prague', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Couple'},
            {'destination': 'Vienna', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Couple'},
            {'destination': 'Tokyo', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Sydney', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'London', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Rome', 'age_group': '25-34', 'travel_mode': 'Train', 'trip_type': 'Couple'},
            {'destination': 'Barcelona', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Budapest', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Zurich', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Couple'},
            {'destination': 'Cape Town', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Istanbul', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Hawaii', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Los Angeles', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            {'destination': 'Melbourne', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Couple'},
            
            // Nuclear Families
            {'destination': 'Vancouver', 'age_group': '25-34', 'travel_mode': 'Road Trip', 'trip_type': 'Nuclear Family'},
            {'destination': 'Orlando', 'age_group': '25-34', 'travel_mode': 'Road Trip', 'trip_type': 'Nuclear Family'},
            {'destination': 'Toronto', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'San Diego', 'age_group': '25-34', 'travel_mode': 'Road Trip', 'trip_type': 'Nuclear Family'},
            {'destination': 'Lisbon', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Barcelona', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Rome', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Nuclear Family'},
            {'destination': 'Sydney', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'London', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'New York City', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Tokyo', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Dubai', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Paris', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Cape Town', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Singapore', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Amsterdam', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Nuclear Family'},
            {'destination': 'Berlin', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Toronto', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Vienna', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Nuclear Family'},
            {'destination': 'San Francisco', 'age_group': '35-54', 'travel_mode': 'Road Trip', 'trip_type': 'Nuclear Family'},
            {'destination': 'Madrid', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
            {'destination': 'Melbourne', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Nuclear Family'},
    
            // Joint Families
            {'destination': 'Istanbul', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Mumbai', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Delhi', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Dhaka', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Colombo', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Kathmandu', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Jakarta', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Manila', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Kuala Lumpur', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Singapore', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Hong Kong', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Shanghai', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Seoul', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Tokyo', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Beijing', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Osaka', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Ho Chi Minh City', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Bangkok', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Hanoi', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Manila', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            {'destination': 'Mumbai', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Joint Family'},
            
            // Older Adults
            {'destination': 'Mediterranean Coast', 'age_group': '55+', 'travel_mode': 'Cruise', 'trip_type': 'Older Adults'},
            {'destination': 'Venice', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Paris', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Barcelona', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Rome', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Lisbon', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Amsterdam', 'age_group': '55+', 'travel_mode': 'Train', 'trip_type': 'Older Adults'},
            {'destination': 'Vienna', 'age_group': '55+', 'travel_mode': 'Train', 'trip_type': 'Older Adults'},
            {'destination': 'Zurich', 'age_group': '55+', 'travel_mode': 'Train', 'trip_type': 'Older Adults'},
            {'destination': 'Dubai', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Singapore', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Hong Kong', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Shanghai', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Sydney', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Melbourne', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Cape Town', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Buenos Aires', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Montevideo', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Santiago', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Lima', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Rio de Janeiro', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'San Jose', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            {'destination': 'Mexico City', 'age_group': '55+', 'travel_mode': 'Air', 'trip_type': 'Older Adults'},
            
            // Spiritual
            {'destination': 'Kyoto', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Varanasi', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Lhasa', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Rishikesh', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Jerusalem', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Mecca', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Bodh Gaya', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Haridwar', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Amritsar', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Nagoya', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Sarnath', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Vatican City', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Gaya', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Kandy', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
            {'destination': 'Nara', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Ronda', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Ajmer', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Bikaner', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Dharamshala', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Tirupati', 'age_group': '35-54', 'travel_mode': 'Train', 'trip_type': 'Spiritual'},
            {'destination': 'Ephesus', 'age_group': '35-54', 'travel_mode': 'Air', 'trip_type': 'Spiritual'},
    
            // Educational
            {'destination': 'Berlin', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'London', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Cambridge', 'age_group': '25-34', 'travel_mode': 'Train', 'trip_type': 'Educational'},
            {'destination': 'Harvard', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Princeton', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Oxford', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Stanford', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'MIT', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Yale', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Caltech', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Cambridge', 'age_group': '25-34', 'travel_mode': 'Train', 'trip_type': 'Educational'},
            {'destination': 'Dublin', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Edinburgh', 'age_group': '25-34', 'travel_mode': 'Train', 'trip_type': 'Educational'},
            {'destination': 'Singapore', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Tokyo', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Seoul', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Beijing', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Hong Kong', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Shanghai', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Nanjing', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Xi\'an', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Guangzhou', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
            {'destination': 'Shenzhen', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Educational'},
    
            // Solo Travel
            {'destination': 'Bangkok', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Cape Town', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Prague', 'age_group': '18-24', 'travel_mode': 'Train', 'trip_type': 'Solo'},
            {'destination': 'Budapest', 'age_group': '18-24', 'travel_mode': 'Train', 'trip_type': 'Solo'},
            {'destination': 'Istanbul', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Tokyo', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Seoul', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Barcelona', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Lisbon', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Paris', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Sydney', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'New York City', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'San Francisco', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Hawaii', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Los Angeles', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Berlin', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Amsterdam', 'age_group': '18-24', 'travel_mode': 'Train', 'trip_type': 'Solo'},
            {'destination': 'Zurich', 'age_group': '18-24', 'travel_mode': 'Train', 'trip_type': 'Solo'},
            {'destination': 'Hong Kong', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Singapore', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Shanghai', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Beijing', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Hanoi', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
            {'destination': 'Ho Chi Minh City', 'age_group': '18-24', 'travel_mode': 'Air', 'trip_type': 'Solo'},
    
            // Medical Trips
            {'destination': 'Sydney', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Toronto', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Singapore', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Boston', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Cleveland', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Los Angeles', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'New York City', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Houston', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Dallas', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Chicago', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'San Francisco', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Miami', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'San Diego', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Columbus', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Pittsburgh', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Philadelphia', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Baltimore', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Montreal', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Quebec City', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Ottawa', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Vancouver', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Victoria', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Edmonton', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Calgary', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            {'destination': 'Winnipeg', 'age_group': '25-34', 'travel_mode': 'Air', 'trip_type': 'Medical'},
            
        ]
    
    };

const TravelRecommendations = () => {
  const [selectedTripTypes, setSelectedTripTypes] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedTravelModes, setSelectedTravelModes] = useState([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (setter, value, currentValues) => {
    setter(currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value]
    );
  };

  const getFilteredTrips = () => {
    return travelData.trips.filter(trip =>
      (selectedTripTypes.length === 0 || selectedTripTypes.includes(trip.trip_type)) &&
      (selectedAgeGroups.length === 0 || selectedAgeGroups.includes(trip.age_group)) &&
      (selectedTravelModes.length === 0 || selectedTravelModes.includes(trip.travel_mode))
    );
  };

  const getUniqueValues = (key) => {
    const filteredTrips = getFilteredTrips();
    const values = filteredTrips.map(trip => trip[key]);
    return [...new Set(values)];
  };

  const tripTypes = getUniqueValues('trip_type');
  const ageGroups = getUniqueValues('age_group');
  const travelModes = getUniqueValues('travel_mode');
  const destinations = getUniqueValues('destination');

  return (
    <div className="container">
      <div className="filters">
        <h2>Filters</h2>

        <div className="filter-group">
          <h3>Trip Type</h3>
          {tripTypes.map(type => (
            <div key={type} className="filter-option">
              <input
                type="checkbox"
                id={`tripType-${type}`}
                checked={selectedTripTypes.includes(type)}
                onChange={() => handleCheckboxChange(setSelectedTripTypes, type, selectedTripTypes)}
              />
              <label htmlFor={`tripType-${type}`}>{type}</label>
            </div>
          ))}
        </div>

        <div className="filter-group">
          <h3>Age Group</h3>
          {ageGroups.map(age => (
            <div key={age} className="filter-option">
              <input
                type="checkbox"
                id={`ageGroup-${age}`}
                checked={selectedAgeGroups.includes(age)}
                onChange={() => handleCheckboxChange(setSelectedAgeGroups, age, selectedAgeGroups)}
              />
              <label htmlFor={`ageGroup-${age}`}>{age}</label>
            </div>
          ))}
        </div>

        <div className="filter-group">
          <h3>Travel Mode</h3>
          {travelModes.map(mode => (
            <div key={mode} className="filter-option">
              <input
                type="checkbox"
                id={`travelMode-${mode}`}
                checked={selectedTravelModes.includes(mode)}
                onChange={() => handleCheckboxChange(setSelectedTravelModes, mode, selectedTravelModes)}
              />
              <label htmlFor={`travelMode-${mode}`}>{mode}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="results">
        <h2>Recommended Destinations</h2>
        <div className="destinations-grid">
          {destinations.length > 0 ? (
            destinations.map((destination, index) => (
              <div key={index} className="destinations-grid-item">
                {destination}
              </div>
            ))
          ) : (
            <div>No recommendations found.</div>
          )}
        </div>

        <div className="travel-modes">
          <h2>Travel Modes</h2>
          <ul>
            {travelModes.length > 0 ? (
              travelModes.map((mode, index) => (
                <li key={index}>{mode}</li>
              ))
            ) : (
              <li>No travel modes found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TravelRecommendations;
