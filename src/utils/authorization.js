const generateAuthorizationToken = ({ token = null }) => {
  try {
    if (!token) {
      throw new Error('invalid value of token');
    }

    return `Bearer ${token}`;
  } catch {
    return '';
  }
};

export { generateAuthorizationToken };
