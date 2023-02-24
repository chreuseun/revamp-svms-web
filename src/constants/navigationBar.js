import {
  UserOutlined,
  ScheduleOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
  BuildOutlined,
  GroupOutlined,
  UpSquareOutlined,
  SwitcherOutlined,
  ColumnWidthOutlined,
} from '@ant-design/icons';

const NAVIGATION_BAR_IDS = {
  ADMIN: {
    ADMIN_USERS: 'ADMIN_USERS',
    ADMIN_ADD_USER: '/add-user',
    ADMIN_MANAGE_USERS: '/manage-users',

    ADMIN_DEPARTMENTS: 'ADMIN_DEPARTMENTS',
    ADMIN_ADD_DEPARTMENT: '/add-deparment',
    ADMIN_MANAGE_DEPARTMENTS: '/manage-departments',

    ADMIN_ACADEMIC_YEAR: 'ADMIN_ACADEMIC_YEAR',
    ADMIN_MANAGE_ACADEMIC_YEARS: '/manage-academic-year',
    ADMIN_MANAGE_SEMESTERS: '/manage-semesters',

    ADMIN_STUDENTS: 'ADMIN_STUDENTS',
    ADMIN_UPLOAD_STUDENT_CSV: 'ADMIN_UPLOAD_STUDENT_CSV',
    ADMIN_MANAGE_STUDENTS: 'ADMIN_MANAGE_STUDENTS',
  },
};

const ADMIN_NAVIGATION_BAR_DATA = [
  {
    key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_USERS,
    icon: <UserOutlined />,
    label: 'Users',
    children: [
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_ADD_USER,
        icon: <UsergroupAddOutlined />,
        label: 'Add User',
        to: 'add-user',
      },
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_USERS,
        icon: <UserSwitchOutlined />,
        label: 'Manager Users',
      },
    ],
  },
  {
    key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_DEPARTMENTS,
    icon: <ColumnWidthOutlined />,
    label: 'Departments',
    children: [
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_ADD_DEPARTMENT,
        icon: <BuildOutlined />,
        label: 'Add Department',
      },
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_DEPARTMENTS,
        icon: <UpSquareOutlined />,
        label: 'Manage Departments',
      },
    ],
  },
  {
    key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_ACADEMIC_YEAR,
    icon: <SwitcherOutlined />,
    label: 'Academic Year',
    children: [
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_ACADEMIC_YEARS,
        icon: <GroupOutlined />,
        label: 'Manage Academic Year',
      },
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_SEMESTERS,
        icon: <ScheduleOutlined />,
        label: 'Manage Semesters',
      },
    ],
  },
  {
    key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_STUDENTS,
    icon: <SwitcherOutlined />,
    label: 'Students',
    children: [
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_UPLOAD_STUDENT_CSV,
        icon: <GroupOutlined />,
        label: 'Upload CSV',
      },
      {
        key: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_STUDENTS,
        icon: <ScheduleOutlined />,
        label: 'Manage Students',
      },
    ],
  },
];

const USER_NAVIGATION_BAR_DATA = [];

const SUBJECT_TEACHER_NAVIGATION_BAR_DATA = [];

export {
  ADMIN_NAVIGATION_BAR_DATA,
  USER_NAVIGATION_BAR_DATA,
  SUBJECT_TEACHER_NAVIGATION_BAR_DATA,
  NAVIGATION_BAR_IDS,
};
