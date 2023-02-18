import React from 'react';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';

const ManageDepartmentsPage = () => {
  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer
        title="Manage Departments"
        containerStyles={styles.pageContentContainer}></PageContentContainer>
    </DefaultContainer>
  );
};

const styles = {
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  pageContentContainer: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
};

export default ManageDepartmentsPage;
