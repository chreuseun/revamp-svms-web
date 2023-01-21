import React, { useEffect } from 'react';
import { NavigationSidebar, DefaultContainer } from 'src/components/common';
import { useGETAuth } from 'src/hooks/APIs/authorization';

const HomePage = () => {
  const { isGETAuthLoading, runGETAuth } = useGETAuth();
  useEffect(() => {
    runGETAuth();
  }, []);
  return (
    <DefaultContainer
      customStyles={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
      isLoading={isGETAuthLoading}>
      <NavigationSidebar />
    </DefaultContainer>
  );
};

export default HomePage;
