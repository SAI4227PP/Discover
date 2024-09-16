import React, { useState } from "react";
import "../NewHotels/HotelSearch.css";

const HotelSearch = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  // Filter states
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [freeBreakfast, setFreeBreakfast] = useState(false);
  const [parkingAvailable, setParkingAvailable] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [starRating, setStarRating] = useState([]);
  const [facilities, setFacilities] = useState({
    internetAccess: false,
    parking: false,
    roomService: false,
    cctv: false,
  });
  const [accommodationType, setAccommodationType] = useState([]);
  const [paymentMode, setPaymentMode] = useState([]);
  const [meals, setMeals] = useState([]);

  const properties = [
    {
      name: "The Flora Grand",
      location: "New Vaddem, Goa",
      distance: "110.0 km from City Center",
      rating: 8.0,
      reviews: 756,
      price: 2922,
      originalPrice: 3997,
      discount: 174,
      image: "https://example.com/flora_grand_image.jpg",
      features: ["Free Wifi", "Swimming pool", "Free Cancellation", "Room Service"],
      breakfastIncluded: false,
      starRating: 4,
      facilities: {
        internetAccess: true,
        parking: true,
        roomService: true,
        cctv: true,
      },
    },
    // Additional properties
  ];

  const filteredProperties = properties.filter((property) => {
    // Apply the filtering logic
    // ...
    return true;
  });

  return (
    <div className="app-container">
      {/* Search Form */}
      <div className="search-form">
        <h1>Find Your Stay in Goa</h1>
        <div className="search-fields">
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            placeholder="Check-in"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <input
            type="date"
            placeholder="Check-out"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Sidebar Filters */}
        <div className="sidebar">
          <h2>Filters</h2>
          
          {/* Free Cancellation */}
          <label>
            <input
              type="checkbox"
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
            />
            Free Cancellation
          </label>

          {/* Free Breakfast */}
          <label>
            <input
              type="checkbox"
              checked={freeBreakfast}
              onChange={(e) => setFreeBreakfast(e.target.checked)}
            />
            Free Breakfast
          </label>

          {/* Parking Available */}
          <label>
            <input
              type="checkbox"
              checked={parkingAvailable}
              onChange={(e) => setParkingAvailable(e.target.checked)}
            />
            Parking Available
          </label>

          {/* User Rating */}
          <label>User Rating</label>
          <input
            type="range"
            min="0"
            max="10"
            value={userRating}
            onChange={(e) => setUserRating(e.target.value)}
          />
          <span>{userRating}</span>

          {/* Price Range */}
          <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          />
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          />

          {/* Star Rating */}
          <label>Star Rating</label>
          {[5, 4, 3].map((star) => (
            <label key={star}>
              <input
                type="checkbox"
                checked={starRating.includes(star)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStarRating([...starRating, star]);
                  } else {
                    setStarRating(starRating.filter((rating) => rating !== star));
                  }
                }}
              />
              {star} Star
            </label>
          ))}
          <h3>Accommodation Type</h3>
          {["Hotel", "Resort", "Bed and Breakfast"].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={accommodationType.includes(type)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAccommodationType([...accommodationType, type]);
                  } else {
                    setAccommodationType(accommodationType.filter((t) => t !== type));
                  }
                }}
              />
              {type}
            </label>
          ))}

          <h3>Payment Mode</h3>
          {["Prepaid", "Pay at Hotel"].map((mode) => (
            <label key={mode}>
              <input
                type="checkbox"
                checked={paymentMode.includes(mode)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setPaymentMode([...paymentMode, mode]);
                  } else {
                    setPaymentMode(paymentMode.filter((m) => m !== mode));
                  }
                }}
              />
              {mode}
            </label>
          ))}

          <h3>Meals</h3>
          {["Breakfast Included", "Dinner Included"].map((meal) => (
            <label key={meal}>
              <input
                type="checkbox"
                checked={meals.includes(meal)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setMeals([...meals, meal]);
                  } else {
                    setMeals(meals.filter((m) => m !== meal));
                  }
                }}
              />
              {meal}
            </label>
          ))}
        </div>

        {/* Property Cards */}
        <div className="property-list">
          {filteredProperties.map((property) => (
            <div className="property-card" key={property.name}>
              <div className="property-image">
                {/* Trending Label */}
                <span className="trending-label">Trending</span>
                <img src={property.image} alt={property.name} />
              </div>
              <div className="property-details">
                <h3>{property.name}</h3>
                <p>{property.location}</p>
                <p>{property.distance}</p>
                <p>
                  Rating: {property.rating} ({property.reviews} reviews)
                </p>
                <p>{property.features.join(", ")}</p>
                <div className="property-price">
                  <span className="current-price">₹{property.price}</span>
                  <span className="original-price">₹{property.originalPrice}</span>
                  <span className="discount">Discount: ₹{property.discount}</span>
                </div>

                {/* Room Availability */}
                <p className="room-availability">Last 2 rooms left</p>
                
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
