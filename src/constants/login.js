const LOGIN_FORM = {
  USERNAME_INPUT: {
    label: 'Username',
    name: 'username',
    rulesArray: [{ required: true, message: 'Please input your username!' }],
  },
  PASSWORD_INPUT: {
    label: 'Password',
    name: 'password',
    rulesArray: [{ required: true, message: 'Please input your password!' }],
  },
  SUBMIT_BUTTON: {
    label: 'Submit',
    type: 'primary',
    htmlType: 'submit',
  },
};

const LOGIN_PAGE_TITLE = 'SVMS';

const LOGIN_API_MESSAGE = {
  SUCCESS: {
    message: `Login Sucessful`,
    placement: 'top',
  },
  ERROR: {
    ERROR_API: {
      message: `Login Authorization`,
      placement: 'top',
    },
    ERROR_CATCH: {
      message: `Login Error`,
      placement: 'top',
    },
  },
  WARNING: {
    message: `Login Invalid`,
    description: `Login invalid`,
    placement: 'top',
  },
};

export { LOGIN_FORM, LOGIN_PAGE_TITLE, LOGIN_API_MESSAGE };
