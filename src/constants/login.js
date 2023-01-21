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

export { LOGIN_FORM, LOGIN_PAGE_TITLE };
