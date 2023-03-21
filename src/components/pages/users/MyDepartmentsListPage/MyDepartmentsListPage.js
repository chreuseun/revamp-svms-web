import React, { useEffect, useState } from 'react';
import groupBy from 'lodash/groupBy';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import { userAPIForDepartments } from 'src/hooks/APIs/users';
import MyDepartmentsList from './MyDepartmentsList';
import { groupDepartmentsByEducLevelName } from 'src/utils/departments';

const { useGETDepartmentsListByAccountID } = userAPIForDepartments;

const MyDepartmentsListPage = () => {
  const [myDepartmentList, setMyDepartmentList] = useState([]);
  const { runGETDepartmentsListByAccountID, isGETDepartmentsListByAccountIDLoading } =
    useGETDepartmentsListByAccountID({
      onCompleted: (list = []) => {
        if (Array.isArray(list)) {
          setMyDepartmentList(groupDepartmentsByEducLevelName(list || []));
        }
      },
    });

  useEffect(() => {
    runGETDepartmentsListByAccountID();
  }, []);

  return (
    <DefaultContainer
      customStyles={styles.container}
      isLoading={isGETDepartmentsListByAccountIDLoading}>
      <NavigationSidebar />
      <PageContentContainer title="My Departments" containerStyles={styles.pageContentContainer}>
        <MyDepartmentsList groupedDepartmentList={myDepartmentList} />
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

export default MyDepartmentsListPage;
