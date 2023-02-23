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
  DEPARTMENTS: {
    GET_DEPT_TYPES: `/v2/departments/types`,
    ADD_ONE_DEPT: `/v2/departments/add`,
    GET_DEPTS_BY_FILTER: `/v2/departments`,
    UPDATE_DEPT: `/v2/departments/update`,
  },
  EDUCATION_LEVELS: {
    GET_EDUCATION_LEVELS: `/v2/education_levels`,
    GET_EDUCATION_COURSE_YEARLEVEL: `/v2/education_levels/course_with_yearlevel`,
  },
  COURSES: {
    GET_ALL_COURSES_DETAILS: `/v2/courses`,
  },
};

export { DEFAULT_BASE_URL, ENDPOINTS };
