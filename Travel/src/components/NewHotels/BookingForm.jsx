import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../NewHotels/BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const location = useLocation(); // Ensure you import this hook
  const { hotel, room } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('http://localhost:5173/bookings', { // Adjust URL if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionStatus('Booking confirmed!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: ''
        });
        setTimeout(() => {
          window.location.href = '/'; // Redirect to home or any other page
        }, 2000); // Redirect after 2 seconds
      } else {
        setSubmissionStatus('Failed to confirm booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-form-page">
      <h2>Book Your Stay</h2>
      {hotel && room && (
        <div className="booking-summary">
          <h3>Booking for {room.name} at {hotel.name}</h3>
          <p>Price per night: ₹{room.price}</p>
          <p>Breakfast Price: ₹{room.breakfastPrice}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-In Date:
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-Out Date:
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
        </button>
      </form>
      {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
    </div>
  );
};

export default BookingForm;
