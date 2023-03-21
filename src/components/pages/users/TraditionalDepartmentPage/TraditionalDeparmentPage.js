import React, { useEffect } from 'react';
import { Button } from 'antd';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import { useLocationState } from 'src/hooks/reactRouterDom';

const TraditionalDepartmentPage = () => {
  const { state: locationState } = useLocationState();
  const pageTitle = `Manage ${locationState?.v2_departments_name} Clearance`;

  useEffect(() => {
    if (locationState) {
      console.log('-- HAS STATE:', locationState);
    }
  }, []);

  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer title={pageTitle} containerStyles={styles.pageContentContainer}>
        <div>
          <Button type="primary" title="Create Clearance Form" style={{}}>
            Create Clearance Form
          </Button>
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
};

export default TraditionalDepartmentPage;
