const express = require('express');
const app = express();
const dotenv = require('dotenv');
const errorMiddleware = require('../../middlewares/error.middleware');

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRoutes = require('./routes/index.routes');
app.use('/api', indexRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Define port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 