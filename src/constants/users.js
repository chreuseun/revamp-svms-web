const ACCOUNT_TYPES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  SUBJECT: 'SUBJECT',
};

const USER_TYPES_OPTIONS = [
  {
    value: ACCOUNT_TYPES.ADMIN,
    label: 'Admin',
  },
  {
    value: ACCOUNT_TYPES.USER,
    label: 'User',
  },
  {
    value: ACCOUNT_TYPES.SUBJECT,
    label: 'Subject',
  },
];

const ADD_USER_FORM_INPUTS = {
  LASTNAME: {
    label: 'Lastname',
    name: 'lastname',
    rules: [{ required: true, message: 'Lastname is required' }],
  },
  FIRSTNAME: {
    label: 'Firstname',
    name: 'firstname',
    rules: [{ required: true, message: 'Firstname is required' }],
  },
  MIDDLENAME: {
    label: 'Middlename',
    name: 'middlename',
  },
  USER_TYPE: {
    label: 'Type',
    name: 'user_type',
    placeholder: 'Select a type',
    rules: [{ required: true, message: 'User type is required' }],
    selectOptions: USER_TYPES_OPTIONS,
  },
  CONTACT_NO: {
    label: 'Contact Number',
    name: 'contact_number',
    rules: [
      { required: true, message: 'Contact number is required', pattern: /\d+/g, type: 'regexp' },
      { min: 10, message: 'Minimum 10 characters' },
    ],
  },
  USERNAME: {
    label: 'Username',
    name: 'username',
    rules: [
      { required: true, message: 'Username is required' },
      { min: 8, message: 'Minimum 8 characters' },
    ],
  },
  PASSWORD: {
    label: 'Password',
    name: 'password',
    rules: [
      { required: true, message: 'Password is required' },
      { min: 8, message: 'Minimum 8 characters' },
    ],
  },
  REPEAT_PASSWORD: {
    label: 'Retype password',
    name: 'retype_password',
    rules: [{ required: true, message: 'Retype password is required' }],
  },
};

const ADD_USER = {
  SUCCESS_ADD_MESSAGE: 'Account Created Successfully',
};

const MANAGE_USER_INPUT_LABELS = {
  BY_USER_TYPE: 'Search By User Type',
  BY_LOCKED: 'Search By Locked',
  BY_STATUS: 'Search By Status',
  BY_FULLNAME: 'Search by fullname',
  BY_DATERANGE: 'Search by Date Range',
};

const SEARCH_USERS_OPTIONS = {
  byUserTypeOptions: [
    {
      value: 'ALL',
      label: 'All',
    },
    ...USER_TYPES_OPTIONS,
  ],
  byLockedOptions: [
    {
      value: 'ALL',
      label: 'All',
    },
    {
      value: 1,
      label: 'Yes',
    },
    {
      value: 0,
      label: 'No',
    },
  ],
  byStateOptions: [
    {
      value: 'ALL',
      label: 'All',
    },
    {
      value: 1,
      label: 'Active',
    },
    {
      value: 0,
      label: 'Inactive',
    },
  ],
};

export {
  ACCOUNT_TYPES,
  ADD_USER_FORM_INPUTS,
  ADD_USER,
  USER_TYPES_OPTIONS,
  SEARCH_USERS_OPTIONS,
  MANAGE_USER_INPUT_LABELS,
};
