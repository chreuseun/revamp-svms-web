import React from 'react';
import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import PropTypes from 'prop-types';

const StandardPageTemplate = ({ isLoading = false, children }) => {
  return (
    <DefaultContainer customStyles={styles.container} isLoading={isLoading}>
      <NavigationSidebar />
      <PageContentContainer title="Manage Semesters" containerStyles={styles.pageContentContainer}>
        {children}
      </PageContentContainer>
    </DefaultContainer>
  );
};

StandardPageTemplate.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.element]),
};

const styles = {
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  pageContentContainer: {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
};

export default StandardPageTemplate;
