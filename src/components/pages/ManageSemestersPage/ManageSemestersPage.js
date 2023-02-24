import React from 'react';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';

const ManageDepartmentsPage = () => {
  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer title="Manage Semesters" containerStyles={styles.pageContentContainer}>
        <div
          style={{
            padding: 8,
            display: 'flex',
            flexDirection: 'row',
            border: 'solid 2px red',
          }}></div>
      </PageContentContainer>
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

export default ManageDepartmentsPage;
