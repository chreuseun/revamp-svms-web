import React from 'react';

import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';

const AddDepertmentPage = () => {
  return (
    <DefaultContainer
      customStyles={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}
      isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer
        title="Add Department"
        containerStyles={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}></PageContentContainer>
    </DefaultContainer>
  );
};

export default AddDepertmentPage;
