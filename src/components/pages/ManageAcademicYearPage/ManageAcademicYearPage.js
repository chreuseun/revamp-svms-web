import React from 'react';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';

const ManageAcademicYearPage = () => {
  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer
        title="Manage Academic Years"
        containerStyles={styles.pageContentContainer}>
        <div style={styles.tableContainer}>
          {/* <Table columns={columns({ onSetActiveSemester })} dataSource={semesters} /> */}
        </div>
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
  tableContainer: {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'scroll',
    borderRadius: 8,
  },
};

export default ManageAcademicYearPage;
