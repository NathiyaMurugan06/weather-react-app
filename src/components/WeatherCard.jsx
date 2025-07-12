import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  // Extract weather icon and URL
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="card">
      <h2>{data.name}, {data.sys.country}</h2>
      <img src={iconUrl} alt="weather icon" className="weather-icon" />
      <p className="weather-main">{data.weather[0].main}</p>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
