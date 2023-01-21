import React from 'react';

import PropTypes from 'prop-types';

const DefaultContainer = ({ children, customStyles = {} }) => {
  return (
    <div className="svms-column-container" style={customStyles}>
      {children}
    </div>
  );
};

DefaultContainer.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.element, PropTypes.func]),
  customStyles: PropTypes.oneOf([PropTypes.object]),
};

DefaultContainer.defaultProps = {
  children: null,
  customStyles: {},
};

export default DefaultContainer;
