const express = require('express');
const mongoose = require('mongoose');
const bookingRoutes = require('../server/models/Booking');

const app = express();

app.use(express.json());

// Hardcoded MongoDB connection string
const mongoURI = 'mongodb+srv://Mohan:Mohan2004@cluster0.okrcq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/booking/:id', bookingRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
