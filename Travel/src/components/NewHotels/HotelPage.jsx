// HotelPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../NewHotels/HotelPage.css'; // Ensure this path is correct

const HotelPage = () => {
  const { id } = useParams();
  
  // Sample data for multiple properties
  const properties = [
    {
      id: 1,
      name: "Urban Oasis",
      location: "Pune, Maharashtra",
      rating: 8.5,
      images: [
        "https://th.bing.com/th/id/OIP.DDYGhFqUNR5rc1TtT2Vh-wHaE8?rs=1&pid=ImgDetMain",
        "https://i.pinimg.com/originals/20/07/d6/2007d6dd4ca8f4b527d19c7baaefab7e.jpg",
        "https://cache.marriott.com/content/dam/marriott-renditions/MLAWI/mlawi-pool-7040-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*"
      ],
      about: "Urban Oasis offers a luxurious stay with modern amenities and a beautiful view of the city. Located centrally in Pune, it is perfect for both leisure and business travelers.",
      rooms: [
        { name: "City Room", price: 7052, breakfastPrice: 8253 },
        { name: "Deluxe Room", price: 8499, breakfastPrice: 9999 }
      ],
      location: "Pune, Maharashtra",
      reviews: [
        { score: 9.2, text: "Great service and clean rooms. Centrally located." },
        { score: 8.0, text: "Good value for money and friendly staff." },
        { score: 7.8, text: "Clean and comfortable but can improve breakfast options." }
      ],
      facilities: [
        "Free WiFi",
        "Outdoor Swimming Pool",
        "Restaurant and Bar",
        "Fitness Center",
        "24/7 Front Desk",
        "Airport Shuttle (Paid)"
      ],
      policies: {
        checkIn: "1:00 PM",
        checkOut: "11:00 AM",
        children: "Allowed with extra beds.",
        cancellation: "Free until 2 days before check-in"
      },
      similarHotels: [
        { name: "Resort Terra Paraiso", price: 6499, image: "https://wallpapercave.com/wp/wp3598832.jpg" },
        { name: "Beachside Inn", price: 5599, image: "https://www.w3schools.com/w3images/house.jpg" },
        { name: "Mountain Retreat", price: 7499, image: "https://www.w3schools.com/w3images/woods.jpg" },
        { name: "Urban Escape", price: 5999, image: "https://www.w3schools.com/w3images/falls2.jpg" }
      ]
    },
    {
      id: 2,
      name: "Seaside Retreat",
      location: "Goa, India",
      rating: 9.0,
      images: [
        "https://images.unsplash.com/photo-1517817421172-f5d8e527d1d1",
        "https://images.unsplash.com/photo-1520679274895-9183b86b799a",
        "https://images.unsplash.com/photo-1516846647564-e9c3d2a8ff79"
      ],
      about: "Seaside Retreat offers breathtaking ocean views and a relaxing atmosphere. It’s an ideal getaway for those looking to escape the hustle and bustle.",
      rooms: [
        { name: "Ocean View Suite", price: 9200, breakfastPrice: 11500 },
        { name: "Garden View Room", price: 7200, breakfastPrice: 9500 }
      ],
      location: "Goa, India",
      reviews: [
        { score: 9.5, text: "Stunning views and excellent service. Perfect for a beach holiday." },
        { score: 8.8, text: "Great location and amenities. The food could be better." },
        { score: 9.0, text: "Amazing stay with friendly staff and beautiful surroundings." }
      ],
      facilities: [
        "Beach Access",
        "Spa and Wellness Center",
        "Outdoor Pool",
        "Barbecue Facilities",
        "Free Parking",
        "Concierge Service"
      ],
      policies: {
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        children: "Allowed with extra beds.",
        cancellation: "Free until 1 day before check-in"
      },
      similarHotels: [
        { name: "Oceanfront Villas", price: 8500, image: "https://images.unsplash.com/photo-1470045731046-44508a3d3dbd" },
        { name: "Beachfront Bungalows", price: 7700, image: "https://images.unsplash.com/photo-1523775854174-ec0c9606be59" },
        { name: "Coastal Haven", price: 9200, image: "https://images.unsplash.com/photo-1568989726-df92d60beccf" },
        { name: "Tropical Escape", price: 6900, image: "https://images.unsplash.com/photo-1562153727-947e63fa7245" }
      ]
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Shimla, Himachal Pradesh",
      rating: 8.8,
      images: [
        "https://images.unsplash.com/photo-1506748686214e9df14f7",
        "https://images.unsplash.com/photo-1562187956-ea77f57970c0",
        "https://images.unsplash.com/photo-1534857120521-dc7fa98b453b"
      ],
      about: "Mountain Lodge offers a cozy retreat with picturesque views of the Himalayan mountains. Ideal for nature lovers and adventure enthusiasts.",
      rooms: [
        { name: "Mountain View Room", price: 7800, breakfastPrice: 9600 },
        { name: "Suite Room", price: 9500, breakfastPrice: 12000 }
      ],
      location: "Shimla, Himachal Pradesh",
      reviews: [
        { score: 9.1, text: "Beautiful location and excellent amenities. A great escape into nature." },
        { score: 8.5, text: "Comfortable stay with stunning views. Service could be improved." },
        { score: 8.7, text: "Great place for a peaceful retreat. Lovely views and fresh air." }
      ],
      facilities: [
        "Free WiFi",
        "Restaurant",
        "Outdoor Activities",
        "Fireplace",
        "Garden",
        "Bar"
      ],
      policies: {
        checkIn: "12:00 PM",
        checkOut: "10:00 AM",
        children: "Allowed with extra beds.",
        cancellation: "Free until 3 days before check-in"
      },
      similarHotels: [
        { name: "Alpine Resort", price: 8200, image: "https://images.unsplash.com/photo-1530374639791-8b0c53a4856f" },
        { name: "Himalayan Retreat", price: 9000, image: "https://images.unsplash.com/photo-1517164646968-7d78d5eec6d5" },
        { name: "Serene Lodge", price: 7500, image: "https://images.unsplash.com/photo-1533827430154-63754851ea6a" },
        { name: "Mountain Haven", price: 6800, image: "https://images.unsplash.com/photo-1567887645-60b9e58e5e64" }
      ]
    },
    {
      id: 4,
      name: "City Lights Hotel",
      location: "Mumbai, Maharashtra",
      rating: 8.7,
      images: [
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
        "https://images.unsplash.com/photo-1599597818510-064c99d12a3e",
        "https://images.unsplash.com/photo-1561758041-5e897e88f35e"
      ],
      about: "City Lights Hotel offers a sophisticated stay with modern amenities right in the heart of Mumbai. Perfect for both business and leisure travelers.",
      rooms: [
        { name: "Standard Room", price: 6400, breakfastPrice: 8000 },
        { name: "Executive Suite", price: 8500, breakfastPrice: 10500 }
      ],
      location: "Mumbai, Maharashtra",
      reviews: [
        { score: 8.9, text: "Central location with excellent service and amenities." },
        { score: 8.3, text: "Great place to stay with easy access to the city. Slightly noisy." },
        { score: 8.6, text: "Comfortable rooms and good service. Ideal for business travelers." }
      ],
      facilities: [
        "Free WiFi",
        "Business Center",
        "Gym",
        "Restaurant",
        "24/7 Room Service",
        "Meeting Rooms"
      ],
      policies: {
        checkIn: "3:00 PM",
        checkOut: "12:00 PM",
        children: "Allowed with extra beds.",
        cancellation: "Free until 1 day before check-in"
      },
      similarHotels: [
        { name: "Urban Suites", price: 7100, image: "https://images.unsplash.com/photo-1518033454304-63c8bffec3e7" },
        { name: "Downtown Inn", price: 6800, image: "https://images.unsplash.com/photo-1544736351-27fc35eb2f54" },
        { name: "Skyline Hotel", price: 7300, image: "https://images.unsplash.com/photo-1562187688-7c51e881e0a8" },
        { name: "Metro Hotel", price: 6900, image: "https://images.unsplash.com/photo-1562188046-8d5860f88e89" }
      ]
    }
  ];

  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="hotel-page">
      
      {/* Image Gallery Section */}
      <div className="image-gallery">
        <div className="main-image">
          <img src={property.images[0]} alt="Main Hotel view" />
        </div>
        <div className="additional-images">
          {property.images.slice(1).map((img, index) => (
            <img key={index} src={img} alt={`Additional view ${index + 1}`} />
          ))}
        </div>
      </div>
      {/* Header Section */}
      <header className="hotel-header">
        <h1>{property.name}</h1>
        <div className="hotel-location">
          <p>{property.location}</p>
        </div>
        <div className="hotel-rating-review">
          <span className="star-rating">★★★★☆</span>
          <span className="review-score">Rating: {property.rating}/10</span>
        </div>
      </header>

      {/* About Section */}
      <section className="hotel-about">
        <h2>About the Hotel</h2>
        <p>{property.about}</p>
      </section>

      {/* Room Information Section */}
      <section className="room-info">
        <h2>Available Rooms</h2>
        {property.rooms.map((room, index) => (
          <div key={index} className="room">
            <h3>{room.name}</h3>
            <p>Price: ₹{room.price} per night</p>
            <p>Breakfast: ₹{room.breakfastPrice}</p>
            <button>Book Now</button>
          </div>
        ))}
      </section>

      {/* Explore the Area Section */}
      <section className="explore-area">
        <h2>Explore the Area</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0742599280175!2d73.84618551481885!3d18.518335087535147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c5fdf550d099%3A0x2e0d2e9aaeb4d148!2sUrban%20Oasis!5e0!3m2!1sen!2sin!4v1633612560123!5m2!1sen!2sin"
          title="Google Maps"
        ></iframe>
        <ul>
          <li>Popular attractions near the hotel</li>
          <li>Restaurants and cafes</li>
          <li>Shopping areas</li>
          <li>Local transportation options</li>
        </ul>
      </section>

      {/* Guest Reviews Section */}
      <section className="hotel-reviews">
        <h2>Guest Reviews</h2>
        {property.reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>Score:</strong> {review.score}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </section>

      {/* Hotel Facilities Section */}
      <section className="hotel-facilities">
        <h2>Facilities</h2>
        <ul>
          {property.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </section>

      {/* Hotel Policies Section */}
      <section className="hotel-policies">
        <h2>Policies</h2>
        <p>Check-in: {property.policies.checkIn}</p>
        <p>Check-out: {property.policies.checkOut}</p>
        <p>Children: {property.policies.children}</p>
        <p>Cancellation: {property.policies.cancellation}</p>
      </section>

      {/* Similar Hotels Section */}
      <section className="similar-hotels">
        <h2>Similar Hotels</h2>
        {property.similarHotels.map((hotel, index) => (
          <div key={index} className="hotel-suggestion">
            <img src={hotel.image} alt={hotel.name} />
            <div>
              <p><strong>{hotel.name}</strong></p>
              <p>Starting at ₹{hotel.price}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HotelPage;
