import React, { useEffect } from 'react';
import { Button, Divider, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import { useLocationState } from 'src/hooks/reactRouterDom';
import { navigateToRoute } from 'src/utils/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';
import { isViolationDepartment } from 'src/utils/departments';

const CLEARANCE_FORM_BUTTON = 'Manage Clearance Forms';
const CLEARANCE_LIST_BUTTON = 'Clearance List';
const VIOLATION_SYSTEM = 'Open Manage Student Violation Records';

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
    // const routeName = `${NAVIGATION_BAR_IDS?.USER?.USER_CLEARANCE_FORMS.split(':')?.[0]}${
    //   locationState?.v2_department_id
    // }`;
  };

  const onNavigateToViolationHome = () => {
    navigateToRoute({
      navigate,
      routeName: NAVIGATION_BAR_IDS.USER.USER_VIOLATION_HOME,
      options: {
        state: locationState,
      },
    });
  };

  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
      <NavigationSidebar />
      <PageContentContainer title={pageTitle} containerStyles={styles.pageContentContainer}>
        <Divider></Divider>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Clearance management
        </Typography.Title>
        <div style={styles.primaryBtnContainer}>
          <Button
            onClick={onNavigateToClearancesList}
            type="primary"
            title={CLEARANCE_LIST_BUTTON}
            style={{ height: 60, marginRight: 20 }}
            size="large">
            {CLEARANCE_LIST_BUTTON}
          </Button>
          <Button
            onClick={onNavigateToManageClearanceForms}
            type="primary"
            title={CLEARANCE_FORM_BUTTON}
            style={{ height: 60 }}
            size="large">
            {CLEARANCE_FORM_BUTTON}
          </Button>
        </div>

        {isViolationDepartment({ deptTypeName: locationState.department_type_name }) && (
          <>
            <Divider></Divider>
            <Typography.Title level={3} style={{ textAlign: 'center' }}>
              Student Violation Management
            </Typography.Title>
            <div style={styles.primaryBtnContainer}>
              <Button
                onClick={onNavigateToViolationHome}
                type="primary"
                title={CLEARANCE_FORM_BUTTON}
                style={{ height: 60 }}
                size="large">
                {VIOLATION_SYSTEM}
              </Button>
            </div>
          </>
        )}
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
  primaryBtnContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default TraditionalDepartmentPage;
