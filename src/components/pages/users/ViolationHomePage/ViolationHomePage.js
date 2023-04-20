import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';
import { navigateToRoute } from 'src/utils/reactRouterDom';

const ViolationHomePage = () => {
  const { state: locationState } = useLocationState();
  const navigate = useNavigate();

  const onNavigateToManageViolationList = () => {
    navigateToRoute({
      navigate,
      routeName: NAVIGATION_BAR_IDS.USER.USER_VIOLATIONS_CONFIGURATION,
      options: {
        state: locationState,
      },
    });
  };

  const onNavigateToIssueViolations = () => {
    navigateToRoute({
      navigate,
      routeName: NAVIGATION_BAR_IDS.USER.USER_ISSUE_VIOLATION,
      options: {
        state: locationState,
      },
    });
  };

  return (
    <StandardPageTemplate pageTitle={'Violation Home'}>
      <pre style={{ fontSize: 6 }}>{JSON.stringify(locationState, null, 4)}</pre>
      <Button
        onClick={onNavigateToManageViolationList}
        type="primary"
        title={'violations'}
        style={{ height: 60 }}
        size="large">
        Manage Violations List
      </Button>
      <Button
        onClick={onNavigateToIssueViolations}
        type="primary"
        title={'violations'}
        style={{ height: 60, marginTop: 8 }}
        size="large">
        Issue Violations
      </Button>
    </StandardPageTemplate>
  );
};

export default ViolationHomePage;
