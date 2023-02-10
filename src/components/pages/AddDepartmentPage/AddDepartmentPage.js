import React, { useEffect } from 'react';
import { Form, Input, Select, Button } from 'antd';

import { ADD_DEPARTMENTS_FORM_INPUTS, TRADITIONAL_DEPT_DB_ID } from 'src/constants/departments';
import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';
import { useGETDepartmentTypes } from 'src/hooks/APIs/departments';
import {
  useGETEducationLevels,
  useGETEducationLevelsWithCoursesAndYearlevels,
} from 'src/hooks/APIs/educationLevels';

const { Option } = Select;
const { useWatch } = Form;

const AddDepartmentPage = () => {
  const [addDeptForm] = Form.useForm();
  const selectedDepartmentType = useWatch(ADD_DEPARTMENTS_FORM_INPUTS.DEPT_TYPES.name, addDeptForm);
  const { runGETDepartmentTypes, isGETDepartmentTypesLoading, departmentTypes } =
    useGETDepartmentTypes();
  const { runGETEducationLevels, educationalLevels } = useGETEducationLevels();
  const { runGETEducationLevelsWithCoursesAndYearlevels, courses, yearlevels } =
    useGETEducationLevelsWithCoursesAndYearlevels();

  useEffect(() => {
    runGETDepartmentTypes();
    runGETEducationLevels();
    runGETEducationLevelsWithCoursesAndYearlevels();
  }, []);

  const showTraditionalDeptTypesSelect = selectedDepartmentType === TRADITIONAL_DEPT_DB_ID;

  const onSubmitForm = values => {
    console.log('--- ADD DEPT SUBMIT FORM: ', values);
  };

  return (
    <DefaultContainer customStyles={styles.container} isLoading={isGETDepartmentTypesLoading}>
      <NavigationSidebar />
      <PageContentContainer title="Add Department" containerStyles={styles.pageContentContainer}>
        <Form
          form={addDeptForm}
          name="add-new-user-form"
          onFinish={onSubmitForm}
          autoComplete="off"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}>
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.DEPT_NAME}>
            <Input />
          </Form.Item>
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.DEPT_TYPES}>
            <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.DEPT_TYPES.placeholder}>
              {departmentTypes.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {!!showTraditionalDeptTypesSelect && (
            <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.DEPT_TRADITIONAL_TYPES}>
              <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.DEPT_TRADITIONAL_TYPES.placeholder}>
                {ADD_DEPARTMENTS_FORM_INPUTS.DEPT_TRADITIONAL_TYPES.selectOptions.map(
                  ({ value, label }) => (
                    <Option key={value} value={value}>
                      {label}
                    </Option>
                  ),
                )}
              </Select>
            </Form.Item>
          )}
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_LEVEL}>
            <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_LEVEL.placeholder}>
              {educationalLevels.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_DEPARTMENTS}>
            <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_DEPARTMENTS.placeholder}>
              {ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_DEPARTMENTS.selectOptions.map(
                ({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ),
              )}
            </Select>
          </Form.Item>
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.COURSE}>
            <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.COURSE.placeholder}>
              {courses.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.YEARLEVEL}>
            <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.YEARLEVEL.placeholder}>
              {yearlevels.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.HEAD_OFFICER}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button
              disabled={false}
              type="primary"
              style={{ width: 200, marginTop: 16 }}
              htmlType={'submit'}>
              Submit
            </Button>
          </Form.Item>
        </Form>
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
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
};

export default AddDepartmentPage;
