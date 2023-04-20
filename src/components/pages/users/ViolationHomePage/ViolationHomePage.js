import React from 'react';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';

const ViolationHomePage = () => {
  const { state } = useLocationState();

  return (
    <StandardPageTemplate pageTitle={'Violation Home'}>
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </StandardPageTemplate>
  );
};

export default ViolationHomePage;
