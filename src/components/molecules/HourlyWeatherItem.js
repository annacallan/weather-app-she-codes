import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeatherItem = ({ time, icon, maxTemp, ...props }) => {
  return (
    <li>
      <div>{time}</div>
      <WeatherIcon icon={icon} />
      <div>{maxTemp}</div>
    </li>
  );
};

export default HourlyWeatherItem

