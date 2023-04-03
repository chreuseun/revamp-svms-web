import React from 'react';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import PropTypes from 'prop-types';

import { navigateToRoute } from 'src/utils/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';
import { useLocationState } from 'src/hooks/reactRouterDom';

const columns = ({ onSeeStudents = () => {} }) => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Created By',
    dataIndex: 'creator_fullname',
    key: 'creator_fullname',
  },
  {
    title: 'Created At',
    key: 'created_at',
    dataIndex: 'created_at',
    render: updatedAt => <div>{moment(updatedAt).format('MMM DD, YYYY hh:mm')}</div>,
  },
  {
    title: '',
    key: 'action-see-students',
    dataIndex: 'action-see-students',
    render: (_, record) => (
      <div>
        <Button
          onClick={() => {
            onSeeStudents(record);
          }}
          type="primary">
          See Students
        </Button>
      </div>
    ),
  },
];

const DepartmentClearanceList = ({ clearanceReqArray = [] }) => {
  const { state: departmentData } = useLocationState();

  const navigate = useNavigate();

  const onSeeStudents = record => {
    navigateToRoute({
      navigate,
      routeName: NAVIGATION_BAR_IDS.USER.USER_STUDENT_CLR_REQ_LIST,
      options: { state: { deptRequirementData: record, departmentData } },
    });
  };

  return <Table dataSource={clearanceReqArray} columns={columns({ onSeeStudents })} />;
};

DepartmentClearanceList.propTypes = {
  clearanceReqArray: PropTypes.array,
};

DepartmentClearanceList.defaultProps = {
  clearanceReqArray: [],
};

export default DepartmentClearanceList;
