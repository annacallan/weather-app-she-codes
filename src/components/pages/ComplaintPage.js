import React from 'react';
import TextLink from '../atoms/TextLink';
import WeatherPerson from '../molecules/WeatherPerson';
import ComplaintForm from '../organisms/ComplaintForm';
import PageTemplate from '../templates/PageTemplate';
import { CURRENT_WEATHER } from '../../data/mockWeather';

const ComplaintPage = () => {
  return (
    <PageTemplate
      city={CURRENT_WEATHER.name}
      temperature={CURRENT_WEATHER.main.temp}
      changeCity={() => console.log('Change the city!')}
    >
      <TextLink>I changed my mind!</TextLink>
      <WeatherPerson />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default ComplaintPage;
