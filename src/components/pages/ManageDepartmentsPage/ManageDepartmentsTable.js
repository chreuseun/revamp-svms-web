import React, { useState } from 'react';
import { Modal } from 'antd';

import PropTypes from 'prop-types';

import { ReusableAntdTable } from 'src/components/common';
import { DEPARTMENTS_TABLE_COLUMNS } from 'src/constants/departments';
import ManageDepartmentForm from './ManageDepartmentForm';

const showTestData = false;

const ManageDepartmentsTable = ({ departmentsData = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDepartmentRecord, setSelectedDepartmentRecord] = useState(null);

  const onRowClick = ({ record }) => {
    setSelectedDepartmentRecord(record);
    setIsOpen(true);
  };

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const modalTitle = selectedDepartmentRecord?.name || '';

  return (
    <>
      <ReusableAntdTable
        columns={DEPARTMENTS_TABLE_COLUMNS}
        dataSource={departmentsData}
        showTestUI={showTestData}
        onRowOnClick={onRowClick}
      />
      {!!isOpen && (
        <Modal
          title={modalTitle}
          centered
          open={isOpen}
          onOk={onOpenModal}
          onCancel={onCloseModal}
          footer={null}
          width={1000}>
          <ManageDepartmentForm departmentData={selectedDepartmentRecord} />
        </Modal>
      )}
    </>
  );
};

ManageDepartmentsTable.propTypes = {
  departmentsData: PropTypes.arrayOf(PropTypes.object),
};

export default ManageDepartmentsTable;
