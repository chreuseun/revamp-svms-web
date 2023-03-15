// const heroku = 'https://dev-svms-express-server.herokuapp.com';
const local = 'http://192.168.100.2:3000';
const DEFAULT_BASE_URL = local; // heroku || local;

// ENDPOINTS LIST
const ENDPOINTS = {
  LOGIN: {
    API_LOGIN: '/api/login',
  },
  ACADEMIC_YEAR: {
    API_ACADYEAR_GET: '/api/acad_year/get',
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
    DEACTIVATE_USER_TO_DEPT: `v2/departments/account/deactivate`,
    ACTIVATE_USER_TO_DEPT: `v2/departments/account/activate`,
    GET_ACCOUNTS_IN_DEPT_ID: `/v2/departments/accounts`,
  },
  EDUCATION_LEVELS: {
    GET_EDUCATION_LEVELS: `/v2/education_levels`,
    GET_EDUCATION_COURSE_YEARLEVEL: `/v2/education_levels/course_with_yearlevel`,
  },
  COURSES: {
    GET_ALL_COURSES_DETAILS: `/v2/courses`,
  },
  SEMESTERS: {
    GET_ALL_SEMESTERS: `/v2/semesters`,
    SET_ACTIVE_SEMESTER: `/v2/semesters/set`,
  },
  ACADEMIC_YEARS: {
    GET_ALL_ACADEMIC_YEARS: `/v2/academic_years`,
    ADD_ACADEMIC_YEAR: `/v2/academic_years/add`,
    UPDATE_ACADEMIC_YEAR: `/v2/academic_years/update`,
  },
  STUDENTS: {
    BULK_UPSERT_STUDENTS: `/v2/student/bulk-insert`,
  },
};

export { DEFAULT_BASE_URL, ENDPOINTS };
