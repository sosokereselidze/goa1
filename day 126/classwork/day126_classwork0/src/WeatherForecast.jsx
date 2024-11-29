import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = 'http://api.weatherapi.com/v1/current.json?key=14b5b6894ee44d0a9f8123810242908&q=rustavi&aqi=no';

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();

  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Weather Forecast for {weatherData.location.name}</h2>
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>Weather: {weatherData.current.condition.text}</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
      <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
    </div>
  );
};

export default WeatherForecast;