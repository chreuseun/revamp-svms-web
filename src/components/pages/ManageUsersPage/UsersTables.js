import React from 'react';

import PropTypes from 'prop-types';

import { USER_TABLE_COLUMNS } from 'src/constants/users';
import { ReusableAntdTable } from 'src/components/common';

const showTestData = false;

const UsersTables = ({ userData = [] }) => {
  return (
    <ReusableAntdTable
      columns={USER_TABLE_COLUMNS}
      dataSource={userData}
      showTestUI={showTestData}
    />
  );
};

UsersTables.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      id: PropTypes.number,
      user_type_id: PropTypes.string,
      username: PropTypes.string,
      fullname: PropTypes.string,
      lastname: PropTypes.string,
      firstname: PropTypes.string,
      middlename: PropTypes.string,
      state: PropTypes.string,
      is_locked: PropTypes.number,
      contact_number: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
    }),
  ),
};

export default UsersTables;
