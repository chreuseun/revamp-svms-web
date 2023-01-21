import React from 'react';
import { Button, Form, Input } from 'antd';

import { DefaultContainer } from 'src/components/common';
import { LOGIN_FORM, LOGIN_PAGE_TITLE } from 'src/constants/login';

const { USERNAME_INPUT, PASSWORD_INPUT, SUBMIT_BUTTON } = LOGIN_FORM;

const LoginPage = () => {
  const [form] = Form.useForm();

  const inputtedUsername = Form.useWatch(USERNAME_INPUT.name, form);
  const inputtedPassword = Form.useWatch(PASSWORD_INPUT.name, form);

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const isDisabled = !inputtedUsername || !inputtedPassword;

  return (
    <DefaultContainer>
      <h1>{LOGIN_PAGE_TITLE}</h1>

      <div className="login-page-form-div">
        <Form
          form={form}
          name="svms-login-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label={USERNAME_INPUT.label}
            name={USERNAME_INPUT.name}
            rules={USERNAME_INPUT.rulesArray}>
            <Input />
          </Form.Item>
          <Form.Item
            label={PASSWORD_INPUT.label}
            name={PASSWORD_INPUT.name}
            rules={PASSWORD_INPUT.rulesArray}>
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              disabled={isDisabled}
              type={SUBMIT_BUTTON.type}
              htmlType={SUBMIT_BUTTON.htmlType}>
              {SUBMIT_BUTTON.label}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </DefaultContainer>
  );
};

export default LoginPage;
