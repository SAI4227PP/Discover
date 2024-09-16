import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  // List of predefined destinations
  const destinations = [
    "Goa",
    "Pune",
    "Mumbai",
    "Bengaluru",
    "Delhi",
    "Chennai",
    "Hyderabad",
    "Alibaug",
  ];

  // State to manage suggestions
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Sample property data with unique IDs
  const properties = [
    {
      id: 1,
      name: "Urban Oasis",
      location: "Pune, Maharashtra",
      distance: "12.0 km from City Center",
      rating: 8.5,
      reviews: 663,
      price: 3800,
      originalPrice: 4500,
      discount: 700,
      image: "https://th.bing.com/th/id/OIP.DDYGhFqUNR5rc1TtT2Vh-wHaE8?rs=1&pid=ImgDetMain",
      features: ["Swimming Pool", "Gym", "Free Wifi", "Bar"],
      breakfastIncluded: true,
      starRating: 4,
      facilities: {
        internetAccess: true,
        parking: true,
        roomService: true,
        cctv: true,
      },
      accommodationType: "Hotel",
      paymentMode: "Prepaid",
      meals: ["Breakfast Included"],
    },
    {
      id: 2,
      name: "Eco Stay Lodge",
      location: "Alibaug, Maharashtra",
      distance: "75.0 km from City Center",
      rating: 7.8,
      reviews: 214,
      price: 2700,
      originalPrice: 3200,
      discount: 500,
      image: "https://i.pinimg.com/originals/20/07/d6/2007d6dd4ca8f4b527d19c7baaefab7e.jpg",
      features: ["Eco-Friendly", "Organic Meals", "Free Cancellation"],
      breakfastIncluded: true,
      starRating: 3,
      facilities: {
        internetAccess: true,
        parking: false,
        roomService: false,
        cctv: false,
      },
      accommodationType: "Bed and Breakfast",
      paymentMode: "Pay at Hotel",
      meals: ["Breakfast Included"],
    },
    {
      id: 3,
      name: "Luxury Haven",
      location: "Bengaluru, Karnataka",
      distance: "30.0 km from City Center",
      rating: 9.0,
      reviews: 872,
      price: 6000,
      originalPrice: 7500,
      discount: 1500,
      image: "https://cache.marriott.com/content/dam/marriott-renditions/MLAWI/mlawi-pool-7040-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*",
      features: ["Luxury Spa", "Gourmet Dining", "Free Breakfast"],
      breakfastIncluded: true,
      starRating: 5,
      facilities: {
        internetAccess: true,
        parking: true,
        roomService: true,
        cctv: true,
      },
      accommodationType: "Resort",
      paymentMode: "Prepaid",
      meals: ["Breakfast Included", "Dinner Included"],
    },
    {
      id: 4,
      name: "City Lights Hotel",
      location: "Mumbai, Maharashtra",
      distance: "5.0 km from City Center",
      rating: 8.7,
      reviews: 432,
      price: 3500,
      originalPrice: 4000,
      discount: 500,
      image: "https://images.unsplash.com/photo-1543515317-f419f4c01cf7",
      features: ["City View", "Gym", "Free Wifi", "Restaurant"],
      breakfastIncluded: false,
      starRating: 4,
      facilities: {
        internetAccess: true,
        parking: true,
        roomService: true,
        cctv: true,
      },
      accommodationType: "Hotel",
      paymentMode: "Prepaid",
      meals: ["Lunch Included"],
    }
  ];

  // Filter properties based on the current search state
  const applyFilters = (property) => {
    const isMatchingDestination = !destination || property.location.toLowerCase().includes(destination.toLowerCase());
    const isWithinPriceRange = property.price >= priceRange[0] && property.price <= priceRange[1];
    const isMatchingStarRating = starRating.length === 0 || starRating.includes(property.starRating);
    const hasRequiredFacilities = Object.entries(facilities).every(([key, value]) => !value || property.facilities[key]);
    const matchesBreakfast = !freeBreakfast || property.breakfastIncluded;
    const matchesCancellation = !freeCancellation || property.features.includes("Free Cancellation");
    const matchesParking = !parkingAvailable || property.facilities.parking;

    // Check accommodation type
    const isMatchingAccommodationType = accommodationType.length === 0 || accommodationType.includes(property.accommodationType);

    // Check payment mode
    const isMatchingPaymentMode = paymentMode.length === 0 || paymentMode.includes(property.paymentMode);

    // Check meals
    const isMatchingMeals = meals.length === 0 || meals.every(meal => property.meals.includes(meal));

    return (
      isMatchingDestination &&
      isWithinPriceRange &&
      isMatchingStarRating &&
      hasRequiredFacilities &&
      matchesBreakfast &&
      matchesCancellation &&
      matchesParking &&
      isMatchingAccommodationType &&
      isMatchingPaymentMode &&
      isMatchingMeals
    );
  };

  const handleSearch = () => {
    const results = properties.filter(applyFilters);
    setFilteredProperties(results);
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    if (value.length > 0) {
      setFilteredDestinations(destinations.filter(dest => dest.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredDestinations([]);
    }
  };

  const handleDestinationSelect = (dest) => {
    setDestination(dest);
    setFilteredDestinations([]);
  };

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const navigate = useNavigate();

  const handlePropertyClick = (id) => {
    navigate(`/hotel/${id}`);
  };

  return (
    <div className="app-container">
      {/* Search Form */}
      <div className="search-form">
        <h1>Find Your Stay</h1>
        <div className="search-fields">
          <div className="autocomplete">
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={handleDestinationChange}
            />
            {filteredDestinations.length > 0 && (
              <ul className="suggestions">
                {filteredDestinations.map((dest) => (
                  <li key={dest} onClick={() => handleDestinationSelect(dest)}>
                    {dest}
                  </li>
                ))}
              </ul>
            )}
          </div>
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
          <button onClick={handleSearch}>Search</button>
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

          {/* Accommodation Type */}
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

          {/* Payment Mode */}
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

          {/* Meals */}
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
            <div
              className="property-card"
              key={property.id}
              onClick={() => handlePropertyClick(property.id)}
            >
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
                
                <button className="book-btn" onClick={() => handlePropertyClick(property.id)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
