import React from 'react';
import { Form, Input, Select, Button, Typography } from 'antd';

import { ADD_DEPARTMENTS_FORM_INPUTS } from 'src/constants/departments';

import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';

const { Option } = Select;

const AddDepartmentPage = () => {
  const [addDeptForm] = Form.useForm();

  const onSubmitForm = values => {
    console.log('--- ADD DEPT SUBMIT FORM: ', values);
  };

  return (
    <DefaultContainer customStyles={styles.container} isLoading={false}>
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
              {ADD_DEPARTMENTS_FORM_INPUTS.DEPT_TYPES.selectOptions.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
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
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_LEVEL}>
            <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_LEVEL.placeholder}>
              {ADD_DEPARTMENTS_FORM_INPUTS.ACADEMIC_LEVEL.selectOptions.map(({ value, label }) => (
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
              {ADD_DEPARTMENTS_FORM_INPUTS.COURSE.selectOptions.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...ADD_DEPARTMENTS_FORM_INPUTS.YEARLEVEL}>
            <Select placeholder={ADD_DEPARTMENTS_FORM_INPUTS.YEARLEVEL.placeholder}>
              {ADD_DEPARTMENTS_FORM_INPUTS.YEARLEVEL.selectOptions.map(({ value, label }) => (
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
