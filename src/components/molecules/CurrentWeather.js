import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import TextLink from '../atoms/TextLink';
import CurrentTemperature from '../atoms/CurrentTemperature';


const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
  return (
    <div className='currentWeatherClass'>
      <CurrentCity city={city} />
      <TextLink onButtonClick={onTextLinkClick}>Change City</TextLink>
      <CurrentTemperature temperature={temperature} />
    </div>
  );
};


export default CurrentWeather;


