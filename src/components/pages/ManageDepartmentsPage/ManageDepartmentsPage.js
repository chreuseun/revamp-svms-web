import React, { useState, useEffect } from 'react';
import { Input, Select } from 'antd';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import { useGETDepartmentsByFilter } from 'src/hooks/APIs/departments';
import { DEPARTMENT_STATES } from 'src/constants/departments';
import ManageDepartmentsTable from './ManageDepartmentsTable';

const ManageDepartmentsPage = () => {
  const [byIsActive, setByIsActive] = useState('');

  const { isGETDepartmentsByFilterLoading, runGETDepartmentsByFilter, departments } =
    useGETDepartmentsByFilter();

  useEffect(() => {
    runGETDepartmentsByFilter({ params: {} });
  }, []);

  const onChangeIsActiveState = val => {
    setByIsActive(val);
  };

  const onPressSearch = value => {
    if (isGETDepartmentsByFilterLoading) {
      return;
    }

    runGETDepartmentsByFilter({
      params: {
        department_name: value || '',
        is_active: byIsActive === '*' ? '' : byIsActive,
      },
    });
  };

  return (
    <DefaultContainer customStyles={styles.container} isLoading={isGETDepartmentsByFilterLoading}>
      <NavigationSidebar />
      <PageContentContainer
        title="Manage Departments"
        containerStyles={styles.pageContentContainer}>
        <div style={{ padding: 8, display: 'flex', flexDirection: 'row' }}>
          <Select
            size="large"
            style={{ width: '100%', marginRight: 8 }}
            onChange={onChangeIsActiveState}
            options={DEPARTMENT_STATES}
          />
          <Input.Search size="large" onSearch={onPressSearch} allowClear enterButton="Search" />
        </div>
        <ManageDepartmentsTable departmentsData={departments} />
      </PageContentContainer>
    </DefaultContainer>
  );
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

export default ManageDepartmentsPage;
