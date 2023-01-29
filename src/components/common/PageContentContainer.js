import React from 'react';

import PropTypes from 'prop-types';

import PageHeader from './PageHeader';

const PageContentContainer = ({ title = null, children = null }) => {
  return (
    <div
      style={{
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 5,
      }}>
      <PageHeader title={title} />
      <div
        style={{
          flexGrow: 1,
          border: 'solid #9f9f9f 0.9px',
          marginRight: 5,
          borderRadius: 8,
          marginBottom: 5,
        }}></div>
    </div>
  );
};

PageContentContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.node]),
};

export default PageContentContainer;
