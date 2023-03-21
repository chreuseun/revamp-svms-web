import React from 'react';
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';
import { navigateToRoute } from 'src/utils/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';

const DepartmentsClearanceFormsPage = () => {
  const navigate = useNavigate();
  const { state: locationState } = useLocationState();
  const { v2_departments_name: deptName = '', v2_department_id: deptID } = locationState;
  const pageTitle = `Manage Clearance Forms: ${deptName}`;

  const navigateToAddClearanceForm = () => {
    const routeName = `${
      NAVIGATION_BAR_IDS?.USER?.USER_CLEARANCE_ADD_FORM.split(':')?.[0]
    }${deptID}`;

    console.log('STATE:', locationState);

    navigateToRoute({
      navigate,
      routeName,
      options: { state: locationState },
    });
  };

  return (
    <StandardPageTemplate pageTitle={pageTitle}>
      {/* <div style={{ border: '2px solid red' }}>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div> */}
      <div style={{}}>
        <Button onClick={navigateToAddClearanceForm} icon={<FileAddOutlined />}>
          Add Cleareance Requirement
        </Button>
      </div>
      {/* <div style={{ border: '2px solid green', height: 500 }}> ANTD.Table to list</div> */}
    </StandardPageTemplate>
  );
};

export default DepartmentsClearanceFormsPage;
