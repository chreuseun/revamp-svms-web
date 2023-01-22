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
    ADMIN_ADD_USER: 'ADMIN_ADD_USER',
    ADMIN_MANAGE_USERS: 'ADMIN_MANAGE_USERS',

    ADMIN_DEPARTMENTS: 'ADMIN_DEPARTMENTS',
    ADMIN_ADD_DEPARTMENT: 'ADMIN_ADD_DEPARTMENT',
    ADMIN_MANAGE_DEPARTMENTS: 'ADMIN_MANAGER_DEPARTMENTS',

    ADMIN_ACADEMIC_YEAR: 'ADMIN_ACADEMIC_YEAR',
    ADMIN_MANAGE_ACADEMIC_YEARS: 'ADMIN_MANAGE_ACADEMIC_YEAR',
    ADMIN_MANAGE_SEMESTERS: 'ADMIN_MANAGE_SEMESTERS',

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

export { ADMIN_NAVIGATION_BAR_DATA, USER_NAVIGATION_BAR_DATA, SUBJECT_TEACHER_NAVIGATION_BAR_DATA };
