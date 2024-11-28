import React, { useState, useEffect } from 'react';
import './HelperCard.css';

const HelperCard = ({ title, description, phone, status, location, date }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);
  const closeWeatherModal = () => setShowWeatherModal(false);

  const fetchWeather = async () => {
    const apiKey = 'c57833891597fc74c5b7787cf948c451';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
      setShowWeatherModal(true);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className={`helper-card ${status === true ? 'bg-color-donation-orange' : 'bg-color-light-grey'}`}>
      <a 
        href='https://www.mariecurie.org.uk/help/helper-volunteers'
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}>
        <h3 className="helper-card-title">{title}</h3>
      </a>
      <hr />

      <div className="helper-card-description-container">
        <div className={`helper-card-description ${showFullDescription ? 'expanded' : ''}`}>
          {showFullDescription ? description : `${description.substring(0, 150)}...`}
        </div>
        <div className="description-toggle-container">
          <button className="description-toggle" onClick={toggleDescription}>
            {showFullDescription ? 'Less' : 'More'}
          </button>
        </div>
      </div>

      <div className="helper-card-contact-container">
        <p className="helper-card-phone">{phone}</p>
        <p className="helper-card-location" onClick={fetchWeather}>
          {location}
        </p>
      </div>

      <hr />

      <div className="helper-card-status">
        {status === true
          ? `Open until ${date}`
          : `Reopens on ${date}`}
      </div>

      {showWeatherModal && weatherData && (
        <div className="weather-modal">
          <div className="weather-modal-content">
            <span className="weather-modal-close" onClick={closeWeatherModal}>&times;</span>
            <h3>Weather for {location}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelperCard;
