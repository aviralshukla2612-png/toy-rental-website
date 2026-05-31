require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// serve static files from uploads folder
app.use('/uploads', express.static('uploads'));

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the Toy Rental API');
});

app.use(
  '/api/products',
  require('./routes/product.route')
);

// API routes
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/test', require('./routes/test.route'));
app.use('/api/practice', require('./routes/practice.route'));
;


// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})