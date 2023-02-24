import React from 'react';
import { NavigationSidebar, DefaultContainer } from 'src/components/common';
import { useGetAppStore } from 'src/hooks/redux';

const HomePage = () => {
  const { isInitialLoading } = useGetAppStore();

  return (
    <DefaultContainer
      isLoading={isInitialLoading}
      customStyles={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <NavigationSidebar />
    </DefaultContainer>
  );
};

export default HomePage;
