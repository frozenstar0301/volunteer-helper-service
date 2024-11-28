const axios = require('axios');

exports.getWeather = async (req, res) => {
  const region = req.query.region || 'London';
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
