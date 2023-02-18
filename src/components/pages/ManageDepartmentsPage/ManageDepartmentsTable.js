import React from 'react';

import PropTypes from 'prop-types';

import { ReusableAntdTable } from 'src/components/common';
import { DEPARTMENTS_TABLE_COLUMNS } from 'src/constants/departments';

const showTestData = false;

const ManageDepartmentsTable = ({ departmentsData = [] }) => {
  return (
    <ReusableAntdTable
      columns={DEPARTMENTS_TABLE_COLUMNS}
      dataSource={departmentsData}
      showTestUI={showTestData}
    />
  );
};

ManageDepartmentsTable.propTypes = {
  departmentsData: PropTypes.arrayOf(PropTypes.object),
};

export default ManageDepartmentsTable;
