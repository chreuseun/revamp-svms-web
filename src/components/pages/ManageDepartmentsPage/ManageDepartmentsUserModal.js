import React, { useEffect, useState } from 'react';
import { Modal, Spin, notification, Table, Switch, Typography } from 'antd';
import PropTypes from 'prop-types';

import {
  usePOSTActivateUserToDepartment,
  usePOSTDeactivateUserToDepartment,
  useGETDepartmentWithAccount,
} from 'src/hooks/APIs/departments';

const { Text } = Typography;

const columns = ({ onActivatorSwitchChanged = () => () => {} } = {}) => [
  {
    title: 'Is Active',
    key: 'is-active',
    render: (_, record) => (
      <Switch checked={!!record?.department_id} onChange={onActivatorSwitchChanged(record)} />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'fullname',
    key: 'fullname',
    render: text => <Text>{text}</Text>,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: text => <Text>{text}</Text>,
  },
];

const ManageDepartmentsUserModal = ({
  modalTitle = '',
  onOk = () => {},
  onCancel = () => {},
  open = false,
  departmentData = null,
}) => {
  const { id: departmentID = null } = departmentData || {};

  const [accounts, setAccounts] = useState([]);

  const { isPOSTDeactivateUserToDepartmentLoading, runDeactivateUserToDepartment } =
    usePOSTDeactivateUserToDepartment({
      onError: err => {
        notification.error({
          message: `Deactivation to Department: ${err}`,
        });
      },
      onCompleted: response => {
        if (response?.data?.success) {
          runGETDepartmentWithAccount({
            departmentID,
            userTypeIDs: ['USER'],
          });
        }
      },
    });

  const { isPOSTActivateUserToDepartment, runPOSTActivateUserToDepartment } =
    usePOSTActivateUserToDepartment({
      onError: err => {
        notification.error({
          message: `Activation to Department: ${err}`,
        });
      },
      onCompleted: response => {
        if (response?.data?.success) {
          runGETDepartmentWithAccount({
            departmentID,
            userTypeIDs: ['USER'],
          });
        }
      },
    });

  const { isGETDepartmentWithAccountLoading, runGETDepartmentWithAccount } =
    useGETDepartmentWithAccount({
      onCompleted: response => {
        const userList = response?.data?.data || [];
        setAccounts(userList);
      },
      onError: err => {
        notification.error({
          description: `Fetching accounts with department: ${err}`,
        });
      },
    });

  useEffect(() => {
    runGETDepartmentWithAccount({
      departmentID,
      userTypeIDs: ['USER'],
    });
  }, []);

  const onActivatorSwitchChanged = userRecord => checkValue => {
    const userAccountID = userRecord?.account_id || null;

    if (checkValue) {
      runPOSTActivateUserToDepartment({
        accountID: userAccountID,
        departmentID,
      });
    } else {
      runDeactivateUserToDepartment({
        accountID: userAccountID,
        departmentID,
      });
    }
  };

  const renderColumns = columns({
    onActivatorSwitchChanged,
  });

  const isSpinning =
    isGETDepartmentWithAccountLoading ||
    isPOSTDeactivateUserToDepartmentLoading ||
    isPOSTActivateUserToDepartment;

  return (
    <Modal
      title={modalTitle}
      centered
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      width={1000}>
      <Spin spinning={isSpinning}>
        <div style={styles.main}>
          <div style={styles.scrollList}>
            <Table columns={renderColumns} dataSource={accounts} />
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

const styles = {
  main: {
    height: '80vh',
    border: '2px #DFDFDF solid',
    overflow: 'scroll',
    borderRadius: 8,
    padding: 8,
  },
  scrollList: {
    overflow: 'scroll',
  },
};

ManageDepartmentsUserModal.propTypes = {
  modalTitle: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  departmentData: PropTypes.object,
};

export default ManageDepartmentsUserModal;
