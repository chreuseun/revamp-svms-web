import { ACCESS_TOKEN } from 'src/constants/localStorage';

const generateAuthorizationToken = ({ token = null }) => {
  try {
    return `Bearer ${token}`;
  } catch {
    return '';
  }
};

const getAuthorizationToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const initiateLogout = () => {
  localStorage.clear();
  window.location.reload(true);
};

export { generateAuthorizationToken, getAuthorizationToken, initiateLogout };
