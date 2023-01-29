import React from 'react';
import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';

const ManageUsers = () => {
  return (
    <DefaultContainer
      customStyles={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}>
      <NavigationSidebar />
      <PageContentContainer title="Manage Users" />
    </DefaultContainer>
  );
};

export default ManageUsers;
