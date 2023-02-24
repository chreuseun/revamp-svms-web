import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title = null }) => {
  return (
    <div
      style={{
        height: 54,
      }}>
      {title && <h1>{title}</h1>}
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
