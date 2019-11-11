import React from 'react';
import Icon from '../atoms/Icon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';


const DailyWeather = ({
    date,
    icon,
    list,
    maxTemp,
    minTemp,
    onDailyClick,
    showHourly,
    ...props
  }) => {
  return (
    <>
      <div className='DWBlock' onClick={onDailyClick}>
        <h3 className='DWTitle'> {moment(date).format('dddd')}</h3>
          <div className='DWTempBlock'>
            <Icon icon={icon} /> &nbsp;
            <div>{minTemp} &nbsp;</div>
            <div><b>{maxTemp}</b>&nbsp;</div>
          </div>
        </div>
    {/* <HourlyWeather list={list} /> */}
    {showHourly && <HourlyWeather list={list} />}
    </>
   
  );
};

export default DailyWeather
