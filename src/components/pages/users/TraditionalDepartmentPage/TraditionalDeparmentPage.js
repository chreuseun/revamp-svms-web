import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import { useLocationState } from 'src/hooks/reactRouterDom';
import { navigateToRoute } from 'src/utils/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';

const CLEARANCE_FORM_BUTTON = 'Manage Clearance Forms';
const CLEARANCE_LIST_BUTTON = 'Clearance List';

const TraditionalDepartmentPage = () => {
  const navigate = useNavigate();
  const { state: locationState } = useLocationState();
  const pageTitle = `${locationState?.v2_departments_name} Clearance`;

  useEffect(() => {
    if (locationState) {
      console.log('-- HAS STATE:', locationState);
    }
  }, []);

  const onNavigateToManageClearanceForms = () => {
    const routeName = `${NAVIGATION_BAR_IDS?.USER?.USER_CLEARANCE_FORMS.split(':')?.[0]}${
      locationState?.v2_department_id
    }`;

    navigateToRoute({
      navigate,
      routeName,
      options: {
        state: locationState,
      },
    });
  };

  const onNavigateToClearancesList = () => {
    const routeName = `${NAVIGATION_BAR_IDS?.USER?.USER_CLEARANCE_FORMS.split(':')?.[0]}${
      locationState?.v2_department_id
    }`;
  };

  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer title={pageTitle} containerStyles={styles.pageContentContainer}>
        <div>
          <Button
            onClick={onNavigateToClearancesList}
            type="primary"
            title={CLEARANCE_LIST_BUTTON}
            style={{}}>
            {CLEARANCE_LIST_BUTTON}
          </Button>
        </div>
        <br />
        <div>
          <Button
            onClick={onNavigateToManageClearanceForms}
            type="primary"
            title={CLEARANCE_FORM_BUTTON}
            style={{}}>
            {CLEARANCE_FORM_BUTTON}
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
