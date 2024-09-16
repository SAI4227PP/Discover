import React from 'react';
import '../newflight/FlightFilters.css';

const FlightFilters = ({
  priceRange,
  setPriceRange,
  selectedStops,
  setSelectedStops,
  selectedAirlines,
  setSelectedAirlines,
  selectedDepartureTime,
  setSelectedDepartureTime
}) => {

  const handlePriceChange = (event) => {
    setPriceRange([parseInt(event.target.value), priceRange[1]]);
  };

  const handleStopChange = (event) => {
    const value = event.target.value;
    setSelectedStops(prevStops =>
      prevStops.includes(value)
        ? prevStops.filter(stop => stop !== value)
        : [...prevStops, value]
    );
  };

  const handleAirlineChange = (event) => {
    const value = event.target.value;
    setSelectedAirlines(prevAirlines =>
      prevAirlines.includes(value)
        ? prevAirlines.filter(airline => airline !== value)
        : [...prevAirlines, value]
    );
  };

  const handleDepartureTimeChange = (event) => {
    const value = event.target.value;
    setSelectedDepartureTime(prevTimes =>
      prevTimes.includes(value)
        ? prevTimes.filter(time => time !== value)
        : [...prevTimes, value]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-item">
        <h4>Filters</h4>

        {/* Stops Filter */}
        <div className="filter-sub-item">
          <h5>Stops</h5>
          <label>
            <input
              type="checkbox"
              value="Non-stop"
              checked={selectedStops.includes('Non-stop')}
              onChange={handleStopChange}
            />
            Non-Stop
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="1 Stop"
              checked={selectedStops.includes('1 Stop')}
              onChange={handleStopChange}
            />
            1 Stop
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="2+ Stops"
              checked={selectedStops.includes('2+ Stops')}
              onChange={handleStopChange}
            />
            2+ Stops
          </label>
        </div>

        {/* Flight Price Filter */}
        <div className="filter-sub-item">
          <h5>Flight Price</h5>
          <input
            type="range"
            min="4999"
            max="34033"
            value={priceRange[0]}
            onChange={handlePriceChange}
          />
          <span>{`₹${priceRange[0]} - ₹${priceRange[1]}`}</span>
        </div>

        {/* Departure Time Filter */}
        <div className="filter-sub-item">
          <h5>Departure Time</h5>
          <div className="time-filter">
            <label>
              <input
                type="checkbox"
                value="Before 6AM"
                checked={selectedDepartureTime.includes('Before 6AM')}
                onChange={handleDepartureTimeChange}
              />
              Early Morning<br />(Before 6AM)
            </label>
            <label>
              <input
                type="checkbox"
                value="6AM - 12PM"
                checked={selectedDepartureTime.includes('6AM - 12PM')}
                onChange={handleDepartureTimeChange}
              />
              Morning<br />(6AM - 12PM)
            </label>
            <label>
              <input
                type="checkbox"
                value="12PM - 6PM"
                checked={selectedDepartureTime.includes('12PM - 6PM')}
                onChange={handleDepartureTimeChange}
              />
              Mid Day<br />(12PM - 6PM)
            </label>
            <label>
              <input
                type="checkbox"
                value="After 6PM"
                checked={selectedDepartureTime.includes('After 6PM')}
                onChange={handleDepartureTimeChange}
              />
              Night<br />(After 6PM)
            </label>
          </div>
        </div>

        {/* Airlines Filter */}
        <div className="filter-sub-item">
          <h5>Popular Airlines</h5>
          <label>
            <input
              type="checkbox"
              value="Air India"
              checked={selectedAirlines.includes('Air India')}
              onChange={handleAirlineChange}
            />
            Air India <span>₹6,182</span>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Air-India Express"
              checked={selectedAirlines.includes('Air-India Express')}
              onChange={handleAirlineChange}
            />
            Air-India Express <span>₹4,999</span>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Akasa Air"
              checked={selectedAirlines.includes('Akasa Air')}
              onChange={handleAirlineChange}
            />
            Akasa Air <span>₹5,000</span>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="IndiGo"
              checked={selectedAirlines.includes('IndiGo')}
              onChange={handleAirlineChange}
            />
            IndiGo <span>₹4,999</span>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="SpiceJet"
              checked={selectedAirlines.includes('SpiceJet')}
              onChange={handleAirlineChange}
            />
            SpiceJet <span>₹5,878</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FlightFilters;
