// In routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

router.post('/booking/:id', async (req, res) => {
  const { hotelName, name, email, phone, checkInDate, checkOutDate, price, image, success } = req.body;

  try {
    const booking = new Booking({
      hotelName,
      name,
      email,
      phone,
      checkInDate,
      checkOutDate,
      price,
      image,
      success,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking saved successfully', booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
