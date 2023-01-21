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

export { generateAuthorizationToken, getAuthorizationToken };
