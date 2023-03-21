import React from 'react';
import { Form, Input, Button, Select, Spin, Modal } from 'antd';

import { useLocationState } from 'src/hooks/reactRouterDom';
import { usePOSTAddOneDepartmentClearanceRequirement } from 'src/hooks/APIs/departmentClearance';

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

  const { isPOSTAddOneDepartmentClearanceReqLoading, runPOSTAddOneDepartmentClearanceReq } =
    usePOSTAddOneDepartmentClearanceRequirement({
      onCompleted: () => {
        Modal.success({
          content: 'Department Clearance Requirement is added',
          onOk: () => {
            window.location.reload();
          },
        });
      },
    });

  const onFinish = values => {
    const { description, initial_status: initialStatus, name } = values;

    runPOSTAddOneDepartmentClearanceReq({
      description,
      initialStatus,
      name,
      v2DeptId: state?.v2_department_id,
    });
  };

  return (
    <Spin spinning={isPOSTAddOneDepartmentClearanceReqLoading}>
      <Form style={{ maxWidth: 600 }} layout="horizontal" form={form} onFinish={onFinish}>
        <Form.Item
          label="Requirement Type"
          name="requirement_type"
          rules={[{ required: true, message: 'Field is required' }]}>
          <Select options={SELECT_CLEARANCE_TYPE} />
        </Form.Item>
        <Form.Item
          label="Initial Status"
          name="initial_status"
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
    </Spin>
  );
};

export default FormDisabledDemo;
