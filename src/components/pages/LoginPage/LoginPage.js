import React from 'react';
import { Button, Form, Input, Typography } from 'antd';

import { DefaultContainer } from 'src/components/common';
import { LOGIN_FORM, LOGIN_PAGE_TITLE } from 'src/constants/login';
import { usePOSTLogin } from 'src/hooks/APIs/login';
import './login-page.css';

const { USERNAME_INPUT, PASSWORD_INPUT, SUBMIT_BUTTON } = LOGIN_FORM;

const LoginPage = () => {
  const [form] = Form.useForm();
  const { runPOSTLogin, isLoginLoading } = usePOSTLogin();

  const inputtedUsername = Form.useWatch(USERNAME_INPUT.name, form);
  const inputtedPassword = Form.useWatch(PASSWORD_INPUT.name, form);

  const onFinish = values => {
    console.log('Success:', values);
    const { password, username } = values;
    runPOSTLogin({ password, username });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const isDisabled = !inputtedUsername || !inputtedPassword;

  return (
    <DefaultContainer
      isLoading={isLoginLoading}
      customStyles={{
        justifyContent: 'flex-start',
        marginTop: 32,
      }}>
      <img
        src="/assets/images/dyci-logo.png"
        alt="logo"
        style={{ width: 200, height: 'auto', maxWidth: 200, minWidth: 70 }}
      />
      <Typography.Title style={{ margin: 0, padding: 0 }}>{LOGIN_PAGE_TITLE}</Typography.Title>
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
