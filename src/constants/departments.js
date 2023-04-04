import { Typography, Tag } from 'antd';
import moment from 'moment';

import { ACADEMIC_LEVELS } from './academicLevels';

const { Text } = Typography;

const ADD_DEPARTMENTS_FORM_INPUTS = {
  DEPT_NAME: {
    label: 'Name',
    name: 'department_name',
    rules: [{ required: true, message: 'Name is required' }],
  },
  DEPT_TYPES: {
    label: 'Type',
    name: 'department_type',
    rules: [{ required: true, message: 'Type is required' }],
    placeholder: 'Select a type',
  },
  ACADEMIC_LEVEL: {
    label: 'Academic Level',
    name: 'academic_level',
    placeholder: 'What traditional type',
    rules: [{ required: true, message: 'User type is required' }],
    selectOptions: [
      ACADEMIC_LEVELS.GRADE_SCHOOL,
      ACADEMIC_LEVELS.JUNIOR_HS,
      ACADEMIC_LEVELS.SENIOR_HS,
      ACADEMIC_LEVELS.COLLEGE,
    ],
  },
  ACADEMIC_DEPARTMENTS: {
    label: 'Academic Department',
    name: 'academic_department',
    rules: [{ required: true, message: 'Academic dept. is required' }],
    placeholder: 'Select Academic department',
    selectOptions: [],
  },
  COURSE: {
    label: 'Course',
    name: 'course',
    rules: [{ required: true, message: 'Field is required' }],
    placeholder: 'Select course',
    selectOptions: [],
  },
  YEARLEVEL: {
    label: 'Yearlevel',
    name: 'yearlevel',
    rules: [{ required: true, message: 'Field is required' }],
    placeholder: 'Select year level',
    selectOptions: [],
  },
  HEAD_OFFICER: {
    label: 'Head Officer',
    name: 'head_officer',
    rules: [{ required: true, message: 'Field is required' }],
  },
  STATUS: {
    label: 'Status',
    name: 'status',
    valuePropName: 'status',
    rules: [{ required: true, message: 'Field is required' }],
  },
};

const ADD_DEPARTMENT_FORM = `add-new-department-form`;

const EDUC_LEVEL_ID_KEY = 'educ_level_id';

const DEPARTMENT_STATES = [
  {
    value: '*',
    label: '- All -',
  },
  {
    value: '1',
    label: 'Active',
  },
  {
    value: '0',
    label: 'Inactive',
  },
];

const DEPARTMENTS_TABLE_COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: name => <Text>{name}</Text>,
  },
  {
    title: 'Education level',
    dataIndex: 'educ_level_name',
    key: 'educ_level_name',
    render: educLevelName => <Text>{educLevelName}</Text>,
  },
  {
    title: 'Department Type',
    dataIndex: 'department_type_id',
    key: 'department_type_id',
    render: departmentTypeId => <Text>{departmentTypeId}</Text>,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    key: 'is_active',
    render: isActive =>
      Number(isActive) ? <Tag color={'green'}>Active</Tag> : <Tag color={'red'}>Inactive</Tag>,
  },
  {
    title: 'Officer',
    dataIndex: 'department_head_officer',
    key: 'department_head_officer',
    render: departmentHeadOfficer => <Text>{departmentHeadOfficer}</Text>,
  },
  {
    title: 'Create At',
    dataIndex: 'created_at',
    key: 'created_at',
    render: createdAt => <Text>{moment(createdAt).format('MMM DD, YYYY h:mm a')}</Text>,
  },
];

// color pallets https://www.pinterest.ph/pin/15551561205937872/
// #e9311a #ed6335 #ecae7d #8db4ad #026c80 #064c72
const DEPARTMENT_TYPES_CONFIG = {
  SUBJECT: {
    bgColor: '#e9311a',
    textColor: '#FFF',
  },
  TRADITIONAL: {
    bgColor: '#ed6335',
    textColor: '#FFF',
    name: 'TRADITIONAL',
  },
  VIOLATION: {
    bgColor: '#ecae7d',
    textColor: '#FFF',
  },
  ACTIVITY: {
    bgColor: '#8db4ad',
    textColor: '#FFF',
  },
  FINANCE: {
    bgColor: '#026c80',
    textColor: '#FFF',
  },
  REGISTRAR: {
    bgColor: '#064c72',
    textColor: '#FFF',
  },
};

export {
  ADD_DEPARTMENTS_FORM_INPUTS,
  ADD_DEPARTMENT_FORM,
  EDUC_LEVEL_ID_KEY,
  DEPARTMENT_STATES,
  DEPARTMENTS_TABLE_COLUMNS,
  DEPARTMENT_TYPES_CONFIG,
};
