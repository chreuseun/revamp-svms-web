const heroku = 'https://dev-svms-express-server.herokuapp.com';
const local = 'http://192.168.100.2:3000';
const DEFAULT_BASE_URL = local; // heroku || local;

// ENDPOINTS LIST
const ENDPOINTS = {
  LOGIN: {
    API_LOGIN: '/api/login', // login enter `username` & `password` check user if exisit in account
  },
  ACADEMIC_YEAR: {
    API_ACADYEAR_GET: '/api/acad_year/get', // get acadamic years
  },
  AUTH: {
    API_AUTH: '/api/auth',
    API_LOGOUT: '/api/logout',
  },
  ACCOUNT: {
    ADD: `/v2/account/add`,
    GET_ACCOUNTS: `/v2/account/accounts`,
  },
};

export { DEFAULT_BASE_URL, ENDPOINTS };
