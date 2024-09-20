// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb+srv://Mohan:Mohan2004@cluster0.okrcq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
