import React, { useState } from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async (cityName) => {
        const apiKey = 'http://api.weatherapi.com/v1/current.json?key=14cecb40ea2a4fb5a0d124826243008&q=${city}'; // Use your API key here
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();
            console.log("Weather Data:", data); // Debugging the response
            setWeather(data);
            setError(''); // Clear error if the city is found
        } catch (error) {
            console.error("Error fetching weather:", error);
            setWeather(null);
            setError(error.message);
        }
    };

    const handleInputChange = (e) => {
        const cityName = e.target.value.trim();
        setCity(cityName);

        if (cityName) {
            fetchWeather(cityName);
        } else {
            setWeather(null);
            setError('');
        }
    };

    return (
        <div style={styles.container}>
            <h1>City Weather Forecast</h1>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
                style={styles.input}
            />
            {error && <p style={styles.error}>{error}</p>}
            {weather && (
                <div style={styles.weatherContainer}>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Pressure: {weather.main.pressure} hPa</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
    input: {
        padding: '10px',
        width: '200px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '20px',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
    weatherContainer: {
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
};

export default WeatherApp;