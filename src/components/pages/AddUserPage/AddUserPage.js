import React from 'react';
import { Form, Input, Select, Button, Typography } from 'antd';

import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';
import { ADD_USER_FORM_INPUTS } from 'src/constants/users';

const { Option } = Select;

const { useWatch } = Form;

const AddUserPage = () => {
  const [addUserForm] = Form.useForm();

  const firstname = useWatch(ADD_USER_FORM_INPUTS.FIRSTNAME.name, addUserForm);
  const lastname = useWatch(ADD_USER_FORM_INPUTS.LASTNAME.name, addUserForm);
  const middlename = useWatch(ADD_USER_FORM_INPUTS.MIDDLENAME.name, addUserForm);
  const usertype = useWatch(ADD_USER_FORM_INPUTS.USER_TYPE.name, addUserForm);
  const username = useWatch(ADD_USER_FORM_INPUTS.USERNAME.name, addUserForm);
  const contactNo = useWatch(ADD_USER_FORM_INPUTS.CONTACT_NO.name, addUserForm);
  const password = useWatch(ADD_USER_FORM_INPUTS.PASSWORD.name, addUserForm);
  const repeatPassword = useWatch(ADD_USER_FORM_INPUTS.REPEAT_PASSWORD.name, addUserForm);
  const isRepeatPasswordMatched = !(password === repeatPassword);

  const onChangeUserType = userTypeValue => {
    console.log('--- USER_TYPE_VALUE: ', userTypeValue);
  };

  const onSubmitForm = values => {
    console.log('--- VALUES: ', values);
  };

  return (
    <DefaultContainer customStyles={styles.container}>
      <NavigationSidebar />
      <PageContentContainer
        containerStyles={{
          padding: 30,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'scroll',
        }}
        title="Add User">
        <Form
          form={addUserForm}
          name="add-new-user-form"
          onFinish={onSubmitForm}
          autoComplete="off"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}>
          <Form.Item {...ADD_USER_FORM_INPUTS.LASTNAME}>
            <Input />
          </Form.Item>
          <Form.Item {...ADD_USER_FORM_INPUTS.FIRSTNAME}>
            <Input />
          </Form.Item>
          <Form.Item {...ADD_USER_FORM_INPUTS.MIDDLENAME}>
            <Input />
          </Form.Item>
          <Form.Item {...ADD_USER_FORM_INPUTS.USER_TYPE}>
            <Select
              placeholder={ADD_USER_FORM_INPUTS.USER_TYPE.placeholder}
              onChange={onChangeUserType}>
              {ADD_USER_FORM_INPUTS.USER_TYPE.selectOptions.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...ADD_USER_FORM_INPUTS.CONTACT_NO}>
            <Input />
          </Form.Item>
          <Form.Item {...ADD_USER_FORM_INPUTS.USERNAME}>
            <Input />
          </Form.Item>
          <Form.Item {...ADD_USER_FORM_INPUTS.PASSWORD}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            {...ADD_USER_FORM_INPUTS.REPEAT_PASSWORD}
            extra={
              isRepeatPasswordMatched && (
                <Typography.Text type="danger">{'Password do not match'}</Typography.Text>
              )
            }>
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button
              disabled={isRepeatPasswordMatched}
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
};

export default AddUserPage;
