import React from 'react';
import { Form, Input, Select, Button, Typography, notification, Modal } from 'antd';

import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';
import { ADD_USER_FORM_INPUTS, ADD_USER } from 'src/constants/users';
import { useGetAppStore } from 'src/hooks/redux';
import { usePOSTAddAccount } from 'src/hooks/APIs/account';
import { reloadWindow } from 'src/utils/app';

const { Option } = Select;

const { useWatch } = Form;

const AddUserPage = () => {
  const [addUserForm] = Form.useForm();
  const { isInitialLoading } = useGetAppStore();

  const { isPOSTAddAccountLoading, runPOSTAddAccount } = usePOSTAddAccount({
    onCompleted: response => {
      const { data } = response;
      const { success, error_message: errMsg = '' } = data || {};

      if (success) {
        Modal.success({
          title: ADD_USER.SUCCESS_ADD_MESSAGE,
          onOk: () => {
            reloadWindow();
          },
        });
      } else {
        notification.error({
          message: errMsg,
        });
      }
    },
    onError: error => {
      notification.error({
        message: error,
      });
    },
  });

  const password = useWatch(ADD_USER_FORM_INPUTS.PASSWORD.name, addUserForm);
  const repeatPassword = useWatch(ADD_USER_FORM_INPUTS.REPEAT_PASSWORD.name, addUserForm);
  const isRepeatPasswordMatched = !(password === repeatPassword);

  const onSubmitForm = values => {
    const {
      user_type: userTypeId,
      username,
      password = '',
      lastname,
      firstname,
      middlename,
      contact_number: contactNo,
    } = values;

    const addAccountParams = {
      user_type_id: userTypeId,
      username,
      password,
      lastname,
      firstname,
      middlename,
      contact_number: contactNo,
    };

    runPOSTAddAccount({ data: addAccountParams });
  };

  return (
    <DefaultContainer
      isLoading={isInitialLoading || isPOSTAddAccountLoading}
      customStyles={styles.container}>
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
            <Select placeholder={ADD_USER_FORM_INPUTS.USER_TYPE.placeholder}>
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
