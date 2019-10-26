import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';


const DailyWeather = ({ date, icon, list, maxTemp, minTemp, ...props }) => {
  return (
    <div className='dailyWeatherClass'>
      <h3>{date}</h3>
      <WeatherIcon icon={icon} />
      <div>{maxTemp}</div>
      <div>{minTemp}</div>
      <HourlyWeather list={list} />
    </div>
  );
};

export default DailyWeather
