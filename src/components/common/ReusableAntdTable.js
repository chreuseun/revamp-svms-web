import React from 'react';
import { Table } from 'antd';

import PropTypes from 'prop-types';

const UsersTables = ({
  dataSource = [],
  onRowOnClick = () => {},
  columns = [],
  showTestUI = false,
}) => {
  return (
    <>
      {showTestUI && (
        <pre style={{ backgroundColor: '#DFDFDF' }}>{JSON.stringify(dataSource?.[0], null, 4)}</pre>
      )}
      <Table
        columns={columns}
        dataSource={dataSource}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              if (onRowOnClick) {
                onRowOnClick({ rowIndex, record, event });
              }
            },
          };
        }}
      />
      ;
    </>
  );
};

UsersTables.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object),
  onRowOnClick: PropTypes.func,
  columns: PropTypes.array,
  showTestUI: PropTypes.bool,
};

export default UsersTables;
