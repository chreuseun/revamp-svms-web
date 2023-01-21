const generateAuthorizationToken = ({ token = null }) => {
  try {
    if (!token) {
      throw new Error('invalid value of token');
    }

    return `Beare ${token}`;
  } catch {
    return '';
  }
};

export { generateAuthorizationToken };
