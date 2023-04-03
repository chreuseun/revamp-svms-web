import React, { useEffect, useState } from 'react';
import { Table, Tag, Typography } from 'antd';
import moment from 'moment';

import { useLocationState } from 'src/hooks/reactRouterDom';
import { userAPIForStudentsDepartmentClearanceRecord } from 'src/hooks/APIs/users';
import UpdateStudentRequirementIDStatusButton from './UpdateStudentRequirementIDStatusButton';

const { useGETStudentsDepartmentClearanceRecord } = userAPIForStudentsDepartmentClearanceRecord;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Student ID',
    dataIndex: 'student_fullname',
    key: 'student_fullname',
    render: (_, student) => (
      <div>
        <Tag color={'blue'}>{student?.v2_students_id}</Tag>
        <Typography.Text>
          {student?.stud_lastname}, {student?.stud_firstname} {student?.stud_middlename}
        </Typography.Text>
      </div>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, studentRecord) => (
      <UpdateStudentRequirementIDStatusButton studentRecord={studentRecord} />
    ),
  },
  {
    title: 'Updated By',
    dataIndex: 'account_id_update_by',
    key: 'account_id_update_by',
  },
  {
    title: 'Updated At',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: updatedAt => <div>{moment(updatedAt).format('MMM DD, YYYY hh:mm')}</div>,
  },
];

const DepartmentClearanceWithStudentsList = () => {
  const { state = {} } = useLocationState();
  const [studentsWithClearance, setStudentsWithClearance] = useState([]);

  const { deptRequirementData = {} } = state;
  const { id } = deptRequirementData || {};
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
      {/* <pre>{JSON.stringify(studentsWithClearance, null, 4)}</pre> */}
      <Table
        columns={columns}
        loading={isGETStudentsDeptClearanceRecordLoading}
        dataSource={studentsWithClearance}
        onRow={() => {
          return {
            onClick: () => {
              // console.log('-- UPDATE STUDENT REQUIREMENT:', record);
            },
          };
        }}
      />
    </div>
  );
};

export default DepartmentClearanceWithStudentsList;
