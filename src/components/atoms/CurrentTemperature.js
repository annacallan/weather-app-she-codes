import React from 'react'

const CurrentTemperature = ({temperature, ...props}) => {
    return <div className='currentTemp'><b>{temperature}</b></div>;
  };

export default CurrentTemperature

