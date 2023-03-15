import React, { useEffect, useState } from 'react';
import { notification, Table, Typography, Tag, Button, Input, Modal } from 'antd';

import {
  useGETAllAcademicYears,
  usePOSTAddAcademicYears,
  usePOSTUpdateOneAcademicYear,
} from 'src/hooks/APIs/academicYears';
import { DefaultContainer, NavigationSidebar, PageContentContainer } from 'src/components/common';

const { Text } = Typography;

const columns = ({ onActivateAcademicYear = () => () => {} }) => [
  {
    title: '',
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
      record?.is_active ? null : <Button onClick={onActivateAcademicYear(record)}>Activate</Button>,
  },
];

const ManageAcademicYearPage = () => {
  const [academicYears, setAcademicYears] = useState([]);
  const [addInputSY, setAddInputSY] = useState(null);

  const { isGETAllAcademicYearsLoading, runGETAllAcademicYears } = useGETAllAcademicYears({
    onCompleted: response => {
      const { data = {} } = response || {};

      const { data: list = [], success, error_message: errMsg = '' } = data || {};

      if (success) {
        setAcademicYears(list);
      } else {
        notification.error({
          description: `${errMsg}`,
          message: 'Get All Academic Year Error. code 1',
        });
      }
    },
    onError: err => {
      notification.error({
        description: `${err}`,
        message: 'Get All Academic Year Error',
      });
    },
  });

  const { isPOSTAddAcademicYearsLoading, runPOSTAddAcademicYears } = usePOSTAddAcademicYears({
    onCompleted: response => {
      const { success, error_message: errMsg } = response?.data || {};

      if (success) {
        runGETAllAcademicYears();
        setAddInputSY(null);

        Modal.success({
          content: `Add new academic year successfully`,
        });
      } else {
        notification.error({
          description: 'Add Academic Year Error .1',
          message: `${errMsg}`,
        });
      }
    },
    onError: err => {
      notification.error({
        description: 'Add Academic Year Error',
        message: `${err}`,
      });
    },
  });

  const { isPOSTUpdateOnceAcademicYear, runPOSTUpdateOneAcademicYear } =
    usePOSTUpdateOneAcademicYear({
      onCompleted: response => {
        const { success, error_message: errMsg } = response?.data || {};

        if (success) {
          runGETAllAcademicYears();
          setAddInputSY(null);

          Modal.success({
            content: `Update successful`,
          });
        } else {
          notification.error({
            description: 'Add Academic Year Error .1',
            message: `${errMsg}`,
          });
        }
      },
      onError: err => {
        notification.error({
          description: 'Add Academic Year Error .1',
          message: `${err}`,
        });
      },
    });

  const isPageLoading =
    isGETAllAcademicYearsLoading || isPOSTAddAcademicYearsLoading || isPOSTUpdateOnceAcademicYear;

  const onActivateAcademicYear = record => () => {
    if (isPageLoading) {
      return;
    }

    const { id = null } = record || {};

    runPOSTUpdateOneAcademicYear({ id, isActive: 1 });
  };

  const onCreateNewAcademicYear = () => {
    if (isPageLoading) {
      return;
    }

    runPOSTAddAcademicYears({ baseyear: addInputSY });
  };

  const onChangeINputAddSY = event => {
    const val = event?.target?.value;
    setAddInputSY(val);
  };

  useEffect(() => {
    runGETAllAcademicYears();
  }, []);

  return (
    <DefaultContainer customStyles={styles.container} isLoading={isPageLoading}>
      <NavigationSidebar />
      <PageContentContainer
        title="Manage Academic Years"
        containerStyles={styles.pageContentContainer}>
        <div style={styles.tableContainer}>
          <div>
            <Input.Group compact>
              <Input value={addInputSY} style={{ width: 150 }} onChange={onChangeINputAddSY} />
              <Button onClick={onCreateNewAcademicYear} type="primary">
                Add New Academic Year
              </Button>
            </Input.Group>
          </div>
          <Table columns={columns({ onActivateAcademicYear })} dataSource={academicYears} />
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

export default ManageAcademicYearPage;
