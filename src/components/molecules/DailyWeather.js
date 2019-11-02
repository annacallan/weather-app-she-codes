import React from 'react';
import Icon from '../atoms/Icon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';


const DailyWeather = ({ date, icon, list, maxTemp, minTemp, ...props }) => {
  return (
    <div className='dailyWeatherClass'>
      <h3>{moment(date).format('dddd')}</h3>
      <Icon icon={icon} />
      <div>{maxTemp}</div>
      <div>{minTemp}</div>
      <HourlyWeather list={list} />
    </div>
  );
};

export default DailyWeather
