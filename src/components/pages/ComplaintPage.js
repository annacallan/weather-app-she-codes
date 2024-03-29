import React from 'react';
import TextLink from '../atoms/TextLink';
import WeatherPerson from '../molecules/WeatherPerson';
import ComplaintForm from '../organisms/ComplaintForm';
import PageTemplate from '../templates/PageTemplate';
import { Link } from 'react-router-dom';

const ComplaintPage = ({ city, temperature, changeCity, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Link to="/">
        <TextLink>I changed my mind!</TextLink>
      </Link>
      <WeatherPerson />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default ComplaintPage;
