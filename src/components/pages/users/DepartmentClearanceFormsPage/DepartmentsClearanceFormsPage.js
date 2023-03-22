import React from 'react';
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';
import { navigateToRoute } from 'src/utils/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';
import DepartmentClearanceList from './DepartmentClearanceList';

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
      <div style={{ border: '2px solid red' }}>
        <pre>{JSON.stringify(locationState, null, 4)}</pre>
      </div>
      <div style={styles.inputHeaderContainer}>
        <Button onClick={navigateToAddClearanceForm} icon={<FileAddOutlined />}>
          Add Cleareance Requirement
        </Button>
      </div>
      <DepartmentClearanceList />
    </StandardPageTemplate>
  );
};

const styles = {
  inputHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: '16px 0px',
  },
};

export default DepartmentsClearanceFormsPage;
