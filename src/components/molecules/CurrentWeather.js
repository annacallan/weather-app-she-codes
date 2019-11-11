import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import TextLink from '../atoms/TextLink';
import CurrentTemperature from '../atoms/CurrentTemperature';
import CityPhoto from '../atoms/CityPhoto';


const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
  return (
    <div className='currentWeatherClass'>
      <CurrentCity city={city} />
     <div className='cityPhotoContainer'>
        <CityPhoto city={city} className='cityPhoto' style={{
          backgroundImage: `url(../../images/${city}.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',}} /> 
        <CurrentTemperature temperature={temperature} />
      </div>
      <TextLink onButtonClick={onTextLinkClick}>Change City</TextLink>
      <div className='pageDivider'></div>
    </div>
  );
};


export default CurrentWeather;


