import React from 'react';
import { Spin } from 'antd';

import PropTypes from 'prop-types';

const DefaultContainer = ({ children, customStyles = {}, isLoading = false } = {}) => {
  return (
    <Spin size="large" spinning={isLoading}>
      <div className="svms-column-container" style={customStyles}>
        {children}
      </div>
    </Spin>
  );
};

DefaultContainer.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.element, PropTypes.func]),
  customStyles: PropTypes.oneOf([PropTypes.object]),
  isLoading: PropTypes.bool,
};

DefaultContainer.defaultProps = {
  children: null,
  customStyles: {},
  isLoading: false,
};

export default DefaultContainer;
