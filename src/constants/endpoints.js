const heroku = 'https://dev-svms-express-server.herokuapp.com';
const local = 'http://192.168.125.201:4040';
const DEFAULT_BASE_URL = heroku || local;

const ENDPOINTS = {
  LOGIN: {
    API_LOGIN: '/api/login',
  },
  ACADEMIC_YEAR: {
    API_ACADYEAR_GET: `/api/acad_year/get`,
  },
};

export { DEFAULT_BASE_URL, ENDPOINTS };
