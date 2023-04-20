import React from 'react';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';

const ViolationConfigurationPage = () => {
  const { state } = useLocationState();

  return (
    <StandardPageTemplate pageTitle={'Issue Violations'}>
      <pre style={{ fontSize: 6 }}>{JSON.stringify(state, null, 4)}</pre>
      <p>1. Display Students List by Educ Level </p>
      <ul>a. able to search by username , id , fullname</ul>
      <p>2. Click on student record</p>
      <p>3. API CALL to get the Violation record of student</p>
      <p>4. List all violations to add</p>
      <p>5. Add insert to violation student</p>
    </StandardPageTemplate>
  );
};

export default ViolationConfigurationPage;
