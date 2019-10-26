import React from 'react';
import KittyProfile from '../molecules/KittyProfile';
import PageTemplate from '../templates/PageTemplate';

const KittyPage = ({mood, photo,...props}) => {
  return (
    <PageTemplate>
        <KittyProfile />
    </PageTemplate>
  );
};

export default KittyPage;