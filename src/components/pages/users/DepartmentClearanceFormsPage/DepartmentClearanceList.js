import React from 'react';
import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { navigateToRoute } from 'src/utils/reactRouterDom';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';

const columns = [
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
    dataIndex: 'creator_account_id',
    key: 'creator_account_id',
  },
  {
    title: 'Created At',
    key: 'created_at',
    dataIndex: 'created_at',
  },
];

const DepartmentClearanceList = ({ clearanceReqArray = [] }) => {
  const navigate = useNavigate();

  const onRowClick = record => () => {
    navigateToRoute({
      navigate,
      routeName: NAVIGATION_BAR_IDS.USER.USER_STUDENT_CLR_REQ_LIST,
      options: { state: record },
    });
  };

  return (
    <Table
      dataSource={clearanceReqArray}
      columns={columns}
      onRow={(record, _) => {
        return {
          onClick: onRowClick(record),
        };
      }}
    />
  );
};

DepartmentClearanceList.propTypes = {
  clearanceReqArray: PropTypes.array,
};

DepartmentClearanceList.defaultProps = {
  clearanceReqArray: [],
};

export default DepartmentClearanceList;
