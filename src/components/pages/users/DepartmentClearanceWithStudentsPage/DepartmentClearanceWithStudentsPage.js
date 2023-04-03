import React from 'react';
import { Typography } from 'antd';

import { StandardPageTemplate } from 'src/components/templates';
import DepartmentClearanceWithStudentsList from './DepartmentClearanceWithStudentsList';
import { useLocationState } from 'src/hooks/reactRouterDom';

const DepartmentsClearanceFormsPage = () => {
  const { state } = useLocationState();
  const { deptRequirementData, departmentData = {} } = state || {};
  const { name: deptReqName = '', id: deptReqID = '' } = deptRequirementData || {};
  const { v2_departments_name: v2DeptName = '' } = departmentData || {};

  const pageTitle = `${v2DeptName} Requirement: ${deptReqName}`;

  return (
    <StandardPageTemplate pageTitle={pageTitle} isLoading={false}>
      {/* <pre>{JSON.stringify(state, null, 4)}</pre> */}
      <Typography.Text>Requirement ID: {deptReqID}</Typography.Text>
      <DepartmentClearanceWithStudentsList />
    </StandardPageTemplate>
  );
};

export default DepartmentsClearanceFormsPage;
