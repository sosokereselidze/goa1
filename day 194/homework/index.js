const express = require('express');
const app = express();
const axios = require('axios');


const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    const weatherData = response.data;
    const temperature = weatherData.main.temp;
    const status = weatherData.weather[0].description;

    res.json({
      city: city,
      temperature: `${temperature}°C`,
      status: status.charAt(0).toUpperCase() + status.slice(1)
    });
  } catch (error) {
    res.status(500).json({
      error: 'Could not fetch weather data'
    });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});