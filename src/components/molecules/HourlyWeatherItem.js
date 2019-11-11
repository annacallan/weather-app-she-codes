import React from 'react';
import Icon from '../atoms/Icon';

const HourlyWeatherItem = ({ time, icon, maxTemp, timezone, ...props }) => {
  return (
    <div className='HWItem'>
    <ul>
      <div>{time}{timezone}</div>
      <Icon icon={icon} />
      <div>{maxTemp}</div>
    </ul>
    </div>
  );
};

export default HourlyWeatherItem

