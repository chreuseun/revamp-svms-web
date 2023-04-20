import React from 'react';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';

const ViolationConfigurationPage = () => {
  const { state } = useLocationState();

  return (
    <StandardPageTemplate pageTitle={'Violation Configuration Page'}>
      <pre style={{ fontSize: 6 }}>{JSON.stringify(state, null, 4)}</pre>
      <p>1. Add Violation</p>
      <p>2. Add Violation Sanction by violation ID</p>
      <p>3. Edit violations</p>
    </StandardPageTemplate>
  );
};

export default ViolationConfigurationPage;
