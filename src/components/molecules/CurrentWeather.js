import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import ChangeCityButton from '../atoms/ChangeCityButton';
import CurrentTemperature from '../atoms/CurrentTemperature';

const CurrentWeather = () => {
  return (
    <div>
      <CurrentCity />
      <ChangeCityButton />
      <CurrentTemperature />
    </div>
  );
};


export default CurrentWeather;


