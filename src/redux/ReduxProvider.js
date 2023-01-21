import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import store from './store';

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

ReduxProvider.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.func, PropTypes.element]),
};

ReduxProvider.defaultProps = {
  children: null,
};

export default ReduxProvider;
