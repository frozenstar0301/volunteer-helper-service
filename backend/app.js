const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const helperRoutes = require('./routes/helperRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

// Routes
app.use('/api/helpers', helperRoutes);
app.use('/api/weather', weatherRoutes);

module.exports = app;
