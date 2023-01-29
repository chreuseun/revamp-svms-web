const ACCOUNT_TYPES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  SUBJECT: 'SUBJECT',
};

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
    selectOptions: [
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
    ],
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

export { ACCOUNT_TYPES, ADD_USER_FORM_INPUTS };
