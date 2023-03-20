import React from 'react';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';

const MyDepartmentsListPage = () => {
  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer
        title="My Departments"
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
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
};

export default MyDepartmentsListPage;
