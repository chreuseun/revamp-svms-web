import React, { useEffect, useState } from 'react';
import { Modal, Spin, notification, Table, Switch, Typography, Tag } from 'antd';
import PropTypes from 'prop-types';

import { useGETAccountsByFilters } from 'src/hooks/APIs/account';
import {
  usePOSTActivateUserToDepartment,
  usePOSTDeactivateUserToDepartment,
} from 'src/hooks/APIs/departments';

const { Text } = Typography;

const columns = ({ onActivatorSwitchChanged = () => () => {} } = {}) => [
  {
    title: 'Is Active',
    key: 'is-active',
    render: (_, record) => <Switch onChange={onActivatorSwitchChanged(record)} />,
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
  {
    title: 'Account State',
    dataIndex: 'state',
    key: 'state',
    render: state =>
      Number(state) ? <Tag color={'green'}>Active</Tag> : <Tag color={'red'}>Inactive</Tag>,
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
  const { isGETAccountsByFiltersLoading, runGETAccountsByFilters } = useGETAccountsByFilters({
    onCompleted: response => {
      const results = response?.data?.data?.results || [];

      setAccounts(results);
    },
    onError: err => {
      notification.error({
        message: err,
      });
    },
  });

  const { isPOSTDeactivateUserToDepartmentLoading, runDeactivateUserToDepartment } =
    usePOSTDeactivateUserToDepartment({
      onError: err => {
        notification.error({
          message: `Deactivation to Department: ${err}`,
        });
      },
    });

  const { isPOSTActivateUserToDepartment, runPOSTActivateUserToDepartment } =
    usePOSTActivateUserToDepartment({
      onError: err => {
        notification.error({
          message: `Activation to Department: ${err}`,
        });
      },
    });

  useEffect(() => {
    runGETAccountsByFilters({ params: {} });
  }, []);

  const onActivatorSwitchChanged = userRecord => checkValue => {
    if (checkValue) {
      runPOSTActivateUserToDepartment({
        accountID: userRecord?.id || null,
        departmentID,
      });
    } else {
      runDeactivateUserToDepartment({
        accountID: userRecord?.id || null,
        departmentID,
      });
    }
    console.log('---- ', { account_id: userRecord?.id, checkValue, departmentID });
  };

  const renderColumns = columns({
    onActivatorSwitchChanged,
  });

  const isSpinning =
    isGETAccountsByFiltersLoading ||
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
