import React from 'react';
import BackLink from '../atoms/BackLink';
import WeatherPerson from '../molecules/WeatherPerson';
import ComplaintForm from '../organisms/ComplaintForm';
import PageTemplate from '../templates/PageTemplate';

const ComplaintPage = () => {
  return (
    <PageTemplate>
      <BackLink />
      <WeatherPerson />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default ComplaintPage;