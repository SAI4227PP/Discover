import React, { useState } from "react";
import "../newflight/FlightFilters.css"; // Add this for the CSS styles below

const FlightFilters = () => {
  const [priceRange, setPriceRange] = useState([4999, 34033]);

  const handlePriceChange = (event) => {
    setPriceRange([event.target.value, priceRange[1]]);
  };

  return (
    <div className="filter-section">
      <div className="filter-item">
        <h4>Filters</h4>

        {/* Stops Filter */}
        <div className="filter-sub-item">
          <h5>Stops</h5>
          <label>
            <input type="checkbox" />
            Non-Stop
          </label>
          <br />
          <label>
            <input type="checkbox" />
            1 Stop
          </label>
          <br />
          <label>
            <input type="checkbox" />
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

        {/* Departure Filter */}
        <div className="filter-sub-item">
          <h5>Departure from New Delhi</h5>
          <div className="time-filter">
            <button>Early Morning<br />(Before 6AM)</button>
            <button>Morning<br />(6AM - 12PM)</button>
          </div>
          <div className="time-filter">
            <button>Mid Day<br />(12PM - 6PM)</button>
            <button>Night<br />(After 6PM)</button>
          </div>
        </div>

        {/* Airlines Filter */}
        <div className="filter-sub-item">
          <h5>Popular Airlines</h5>
          <label>
            <input type="checkbox" />
            Air India <span>₹6,182</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Air-India Express <span>₹4,999</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Akasa Air <span>₹5,000</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            IndiGo <span>₹4,999</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            SpiceJet <span>₹5,878</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FlightFilters;
