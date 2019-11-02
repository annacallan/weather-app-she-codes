import React from 'react';
import Icon from '../atoms/Icon';

const HourlyWeatherItem = ({ time, icon, maxTemp, ...props }) => {
  return (
    <li>
      <div>{time}</div>
      <Icon icon={icon} />
      <div>{maxTemp}</div>
    </li>
  );
};

export default HourlyWeatherItem

