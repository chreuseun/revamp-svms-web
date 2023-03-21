import React from 'react';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';

const DepartmentsClearanceFormsPage = () => {
  const { state } = useLocationState();
  return (
    <StandardPageTemplate pageTitle="<DEPT_NAME/> Clearance Forms">
      <div style={{ border: '2px solid red' }}>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
    </StandardPageTemplate>
  );
};

export default DepartmentsClearanceFormsPage;
