import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';

import { useLocationState } from 'src/hooks/reactRouterDom';
import { userAPIForStudentsDepartmentClearanceRecord } from 'src/hooks/APIs/users';

const { useGETStudentsDepartmentClearanceRecord } = userAPIForStudentsDepartmentClearanceRecord;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Student ID',
    dataIndex: 'v2_students_id',
    key: 'v2_students_id',
  },

  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: status => (
      <>
        {status === 'APPROVED' ? (
          <Tag color="green">{status}</Tag>
        ) : (
          <Tag color="red">{status}</Tag>
        )}
      </>
    ),
  },
];

const DepartmentClearanceWithStudentsList = () => {
  const { state = {} } = useLocationState();
  const [studentsWithClearance, setStudentsWithClearance] = useState([]);

  const { id = null } = state;
  const { isGETStudentsDeptClearanceRecordLoading, useGETStudentsDepartmentClearanceReacord } =
    useGETStudentsDepartmentClearanceRecord({
      onCompleted: data => {
        setStudentsWithClearance(data || []);
      },
    });

  useEffect(() => {
    useGETStudentsDepartmentClearanceReacord({
      v2StudentsDepartmentClearanceRecord: id,
    });
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        loading={isGETStudentsDeptClearanceRecordLoading}
        dataSource={studentsWithClearance}
      />
    </div>
  );
};

export default DepartmentClearanceWithStudentsList;
