import React from 'react';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';

const DepartmentClearanceFormPage = () => {
  const { state } = useLocationState();

  const pageTitle = `Clearance Requirement: ${state?.v2_departments_name}`;

  return <StandardPageTemplate pageTitle={pageTitle}></StandardPageTemplate>;
};

export default DepartmentClearanceFormPage;
