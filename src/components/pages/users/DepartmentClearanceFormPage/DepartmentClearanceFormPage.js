import React from 'react';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';
import ClearanceRequirementForm from './ClearanceRequirementForm';

const DepartmentClearanceFormPage = () => {
  const { state } = useLocationState();

  const pageTitle = `Clearance Requirement: ${state?.v2_departments_name}`;

  return (
    <StandardPageTemplate pageTitle={pageTitle}>
      <ClearanceRequirementForm />
    </StandardPageTemplate>
  );
};

export default DepartmentClearanceFormPage;
