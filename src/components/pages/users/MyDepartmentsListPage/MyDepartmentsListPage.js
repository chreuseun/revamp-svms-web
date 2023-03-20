import React, { useEffect, useState } from 'react';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import { userAPIForDepartments } from 'src/hooks/APIs/users';
import MyDepartmentsList from './MyDepartmentsList';

const { useGETDepartmentsListByAccountID } = userAPIForDepartments;

const MyDepartmentsListPage = () => {
  const [myDepartmentList, setMyDepartmentList] = useState([]);
  const { runGETDepartmentsListByAccountID, isGETDepartmentsListByAccountIDLoading } =
    useGETDepartmentsListByAccountID({
      onCompleted: (list = []) => {
        if (Array.isArray(list)) {
          setMyDepartmentList(list || []);
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
        <MyDepartmentsList myDepartmentsArray={myDepartmentList} />
        <pre style={{ fontSize: 8 }}>{JSON.stringify(myDepartmentList, null, 4)}</pre>
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
