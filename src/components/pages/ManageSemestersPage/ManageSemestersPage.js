import React, { useEffect, useState } from 'react';
import { notification, Table, Typography, Tag, Button } from 'antd';

import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';
import { useGETAllSemesters, usePOSTSetActiveSemester } from 'src/hooks/APIs/semesters';

const { Text } = Typography;

const columns = ({ onSetActiveSemester = () => () => {} }) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <Text>{text}</Text>,
  },
  {
    title: 'Is Active',
    dataIndex: 'is_active',
    key: 'is_active',
    render: isActive =>
      isActive ? <Tag color={'green'}>Active</Tag> : <Tag color={'red'}>Inactive</Tag>,
  },
  {
    title: '',
    dataIndex: 'actions_update',
    key: 'actions_update',
    render: (_, record) =>
      record?.is_active ? null : <Button onClick={onSetActiveSemester(record)}>Activate</Button>,
  },
];

const ManageDepartmentsPage = () => {
  const [semesters, setSemesters] = useState([]);

  const { isPOSTSetActiveSemesterLoading, runPOSTSetActiveSemester } = usePOSTSetActiveSemester({
    onCompleted: response => {
      if (response?.data?.success) {
        runGETAllSemesters();
      } else {
        notification.error({
          description: `Activating Semester failed : ${response?.data?.error_message}`,
        });
      }
    },
    onError: err => {
      notification.error({
        description: `Activate Semesters: ${err}`,
      });
    },
  });

  const { isGETAllSemestersLoading, runGETAllSemesters } = useGETAllSemesters({
    onCompleted: response => {
      setSemesters(response?.data?.data || []);
    },
    onError: err => {
      notification.error({ description: `Fetch all semester: ${err}` });
    },
  });

  useEffect(() => {
    runGETAllSemesters();
  }, []);

  const onSetActiveSemester = record => () => {
    const { id = null } = record || {};

    runPOSTSetActiveSemester({ semesterID: id });
  };

  const isPageLoading = isGETAllSemestersLoading || isPOSTSetActiveSemesterLoading;

  return (
    <DefaultContainer customStyles={styles.container} isLoading={isPageLoading}>
      <NavigationSidebar />
      <PageContentContainer title="Manage Semesters" containerStyles={styles.pageContentContainer}>
        <div style={styles.tableContainer}>
          <Table columns={columns({ onSetActiveSemester })} dataSource={semesters} />
        </div>
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
  tableContainer: {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'scroll',
    borderRadius: 8,
  },
};

export default ManageDepartmentsPage;
