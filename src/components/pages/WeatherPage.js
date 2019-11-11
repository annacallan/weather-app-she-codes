import React from 'react';
import Forecast from '../organisms/Forecast';
import PageTemplate from '../templates/PageTemplate';
import { Link } from 'react-router-dom';

const WeatherPage = ({ city, temperature, changeCity, forecast, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Forecast forecast={forecast} />
      <div className ='links'>
        <Link to="/complain" style={{color: 'white',}}>Complain about the weather!</Link>
        <br></br>
        <Link to="/catmood" style={{color: 'white',}}>Cat Forecast</Link>
      </div>
    </PageTemplate>
  );
};

export default WeatherPage;