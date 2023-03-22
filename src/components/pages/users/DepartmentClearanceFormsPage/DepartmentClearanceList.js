import React from 'react';
import { Table } from 'antd';

import PropTypes from 'prop-types';

const columns = [
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
  return (
    <>
      {/* <pre>{JSON.stringify(clearanceReqArray, null, 4)}</pre> */}
      <Table
        dataSource={clearanceReqArray}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              console.log('---- record: ', record);
              // if (onRowOnClick) {
              //   onRowOnClick({ rowIndex, record, event });
              // }
            },
          };
        }}
      />
    </>
  );
};

DepartmentClearanceList.propTypes = {
  clearanceReqArray: PropTypes.array,
};

DepartmentClearanceList.defaultProps = {
  clearanceReqArray: [],
};

export default DepartmentClearanceList;
