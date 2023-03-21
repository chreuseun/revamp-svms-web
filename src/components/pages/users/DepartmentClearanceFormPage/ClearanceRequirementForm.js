import React from 'react';
import { Form, Input, Button, Select } from 'antd';

import { useLocationState } from 'src/hooks/reactRouterDom';

const { useForm } = Form;

const SELECT_CLEARANCE_TYPE = [
  { value: 'FIXED', label: 'Fixed' },
  { value: 'BY_ACADEMIC_YEAR', label: 'By Academic Year' },
];

const SELECT_INITIAL_STATUS = [
  { value: 'APPROVED', label: 'Approved' },
  { value: 'REJECTED', label: 'Rejected' },
];

const FormDisabledDemo = () => {
  const { state } = useLocationState();
  const [form] = useForm();

  const onFinish = values => {
    // department_type_id
    // educ_level_id
    // v2_department_id

    /*
			v2_departments_id:114
			initial_status:APPROVED
			name:TEST_POST_MAN_1
			description:desc_TEST_POST_MAN_1
		*/
    console.log('--- ON FINISH: ', { state, values });
  };

  return (
    <Form style={{ maxWidth: 600 }} layout="horizontal" form={form} onFinish={onFinish}>
      <Form.Item
        label="Requirement Type"
        name="requirement-type"
        rules={[{ required: true, message: 'Field is required' }]}>
        <Select options={SELECT_CLEARANCE_TYPE} />
      </Form.Item>
      <Form.Item
        label="Initial Status"
        name="initial-status"
        rules={[{ required: true, message: 'Field is required' }]}>
        <Select options={SELECT_INITIAL_STATUS} />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Field is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Field is required' }]}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormDisabledDemo;
