import React from 'react';

import { StandardPageTemplate } from 'src/components/templates';
import DepartmentClearanceWithStudentsList from './DepartmentClearanceWithStudentsList';

const DepartmentsClearanceFormsPage = () => {
  const pageTitle = `Student with Dept. Clearance Requirement ID`;

  return (
    <StandardPageTemplate pageTitle={pageTitle} isLoading={false}>
      <DepartmentClearanceWithStudentsList />
    </StandardPageTemplate>
  );
};

export default DepartmentsClearanceFormsPage;
