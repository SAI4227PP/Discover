// BookingPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotelproducts } from '../assets/assets'; // Adjust the path as needed

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for programmatic navigation
  const product = hotelproducts.find((item) => item.id === id);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
  });
  const [errors, setErrors] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!product) {
    return <div className="text-center py-8 text-3xl text-red-600">Product not found.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid phone number is required.";
    if (!formData.checkInDate) newErrors.checkInDate = "Check-in date is required.";
    if (!formData.checkOutDate) newErrors.checkOutDate = "Check-out date is required.";
    if (new Date(formData.checkInDate) >= new Date(formData.checkOutDate))
      newErrors.checkOutDate = "Check-out date must be after check-in date.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setBookingSuccess(true);
      // Redirect to HotelBookTrack with booking details in the query string
      navigate(`/HotelBookTrack?hotelName=${encodeURIComponent(product.name)}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&checkInDate=${encodeURIComponent(formData.checkInDate)}&checkOutDate=${encodeURIComponent(formData.checkOutDate)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image?.[0] || '/path/to/default-image.jpg')}`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkInDate: '',
        checkOutDate: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto my-10 p-6">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.image?.length > 0 ? product.image[0] : "/path/to/default-image.jpg"}
            alt={product.name || "Product image"}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Description and Price */}
        <div className="w-full mt-6 md:mt-8 text-center">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700 mt-4 mb-4">
            {product.description || "This is a great product that offers amazing features."}
          </p>
          <p className="text-gray-900 font-semibold text-xl">${parseFloat(product.price).toFixed(2)}</p>
        </div>

        {/* Booking Form or Booking Details */}
        <div className="w-full mt-6 md:mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {bookingSuccess ? (
              <div className="text-center text-green-600">
                <p className="text-2xl mb-4">Booking Successful!</p>
                <p>Thank you for booking with us. You will be redirected to your booking details shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-4">Book Your Stay</h3>

                {/* Name Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border-2 border-gray-300 px-3 py-2 rounded-md ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-2 border-gray-300 px-3 py-2 rounded-md ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Phone Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border-2 border-gray-300 px-3 py-2 rounded-md ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                {/* Check-in Date Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="checkInDate">Check-in Date</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className={`w-full border-2 border-gray-300 px-3 py-2 rounded-md ${errors.checkInDate ? 'border-red-500' : ''}`}
                  />
                  {errors.checkInDate && <p className="text-red-500 text-sm">{errors.checkInDate}</p>}
                </div>

                {/* Check-out Date Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="checkOutDate">Check-out Date</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    className={`w-full border-2 border-gray-300 px-3 py-2 rounded-md ${errors.checkOutDate ? 'border-red-500' : ''}`}
                  />
                  {errors.checkOutDate && <p className="text-red-500 text-sm">{errors.checkOutDate}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Book Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
