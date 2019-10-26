import React from 'react';
import Forecast from '../organisms/Forecast';
import PageTemplate from '../templates/PageTemplate';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../../data/mockWeather';
import { Link } from 'react-router-dom';

const WeatherPage = ({ city, temperature, changeCity, forecast, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Forecast forecast={forecast} />;
      <Link to="/complain">Complain about the weather!</Link>
    </PageTemplate>
  );
};

export default WeatherPage;