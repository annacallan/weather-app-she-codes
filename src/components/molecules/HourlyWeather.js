// Moment.js is a JS library that makes formatting dates in JS super easy!
import moment from 'moment';
import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import TimezoneToAdd from '../atoms/TimezoneToAdd';


  

const HourlyWeather = ({ list, city, timezone, ...props }) => {
  return (
    <div className='HWList'>
    <ul>
      {list.map(item => (
        <HourlyWeatherItem 
          key={item.dt}
          timezone={item.timezone}
          var tz ={({timezone}/3600)}
          // timezone={(item.timezone)/3600}
          time={moment(item.dt_txt).add(TimezoneToAdd).format('ha')}
          // time={item.dt}
          icon={item.weather[0].icon}
          maxTemp={`${parseInt(item.main.temp_max)}º`}
        />
      ))}
    </ul>
    </div>
  );
};

export default HourlyWeather;
