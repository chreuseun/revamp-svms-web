import React from 'react';
import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';

const AddUserPage = () => {
  return (
    <DefaultContainer
      customStyles={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}>
      <NavigationSidebar />
      <PageContentContainer title="Add User" />
    </DefaultContainer>
  );
};

export default AddUserPage;
