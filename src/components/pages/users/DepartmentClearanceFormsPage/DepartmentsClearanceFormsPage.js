import React from 'react';
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';

const DepartmentsClearanceFormsPage = () => {
  const { state } = useLocationState();
  const { v2_departments_name: deptName = '' } = state;
  const pageTitle = `Manage Clearance Forms: ${deptName}`;

  return (
    <StandardPageTemplate pageTitle={pageTitle}>
      <div style={{ border: '2px solid red' }}>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
      <div style={{ border: '0.2px solid green', height: 200 }}>
        <Button icon={<FileAddOutlined />}>Add Cleareance Requirement</Button>
      </div>
      <div style={{ border: '2px solid green', height: 500 }}> ANTD.Table to list</div>
    </StandardPageTemplate>
  );
};

export default DepartmentsClearanceFormsPage;
