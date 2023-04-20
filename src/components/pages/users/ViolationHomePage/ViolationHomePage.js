import React from 'react';
import { Button } from 'antd';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';

const ViolationHomePage = () => {
  const { state } = useLocationState();

  return (
    <StandardPageTemplate pageTitle={'Violation Home'}>
      <pre style={{ fontSize: 6 }}>{JSON.stringify(state, null, 4)}</pre>
      <Button
        onClick={() => {}}
        type="primary"
        title={'violations'}
        style={{ height: 60 }}
        size="large">
        Manage Violations List
      </Button>
      <Button
        onClick={() => {}}
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
