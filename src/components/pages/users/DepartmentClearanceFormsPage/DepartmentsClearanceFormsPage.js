import React, { useEffect, useState } from 'react';
import { Button, notification } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { StandardPageTemplate } from 'src/components/templates';
import { useLocationState } from 'src/hooks/reactRouterDom';
import { navigateToRoute } from 'src/utils/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';
import DepartmentClearanceList from './DepartmentClearanceList';
import { userAPIForDepartmentsClearance } from 'src/hooks/APIs/users';

const { useGETDepartmentClearanceRequirementsByDepartmentID } = userAPIForDepartmentsClearance;

const DepartmentsClearanceFormsPage = () => {
  const navigate = useNavigate();
  const [clearanceReq, setClearanceReq] = useState([]);
  const { state: locationState } = useLocationState();
  const { v2_departments_name: deptName = '', v2_department_id: deptID } = locationState;
  const pageTitle = `Clearance Requirements: ${deptName}`;
  const { isGETDeptClearanceReqByDeptIDLoading, runGETDeptClearanceReqByDeptID } =
    useGETDepartmentClearanceRequirementsByDepartmentID({
      onCompleted: response => {
        const { success, error_message: errMsg = null, data = [] } = response?.data || {};

        if (success) {
          setClearanceReq(data);
        } else {
          notification.error({
            message: 'Dept. Clearance Requirements Error',
            description: errMsg,
          });
        }
      },
    });

  useEffect(() => {
    runGETDeptClearanceReqByDeptID({ v2_department_id: locationState?.v2_department_id || null });
  }, []);

  const navigateToAddClearanceForm = () => {
    const routeName = `${
      NAVIGATION_BAR_IDS?.USER?.USER_CLEARANCE_ADD_FORM.split(':')?.[0]
    }${deptID}`;

    navigateToRoute({
      navigate,
      routeName,
      options: { state: locationState },
    });
  };

  return (
    <StandardPageTemplate pageTitle={pageTitle} isLoading={isGETDeptClearanceReqByDeptIDLoading}>
      <div style={styles.inputHeaderContainer}>
        <Button onClick={navigateToAddClearanceForm} icon={<FileAddOutlined />}>
          Add Cleareance Requirement
        </Button>
      </div>
      <DepartmentClearanceList clearanceReqArray={clearanceReq} />
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
