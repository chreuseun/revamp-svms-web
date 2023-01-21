import React from 'react';
import { NavigationSidebar, DefaultContainer } from 'src/components/common';

const HomePage = () => {
  return (
    <DefaultContainer customStyles={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <NavigationSidebar />
    </DefaultContainer>
  );
};

export default HomePage;
