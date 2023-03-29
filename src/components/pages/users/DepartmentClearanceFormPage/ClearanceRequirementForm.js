import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Spin, Modal, notification, Typography, Divider } from 'antd';

import { useLocationState } from 'src/hooks/reactRouterDom';
import { userAPIForDepartmentsClearance } from 'src/hooks/APIs/users';
import { useGETActiveAcademicYear } from 'src/hooks/APIs/academicYears';

const { useForm } = Form;
const { usePOSTAddOneDepartmentClearanceRequirement } = userAPIForDepartmentsClearance;

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
  const [activeAcademicYearData, setAcadamicYearData] = useState(null);
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

  const { isGETActiveAcademicYearLoading, runGETActiveAcademicYear } = useGETActiveAcademicYear({
    onCompleted: response => {
      const { success, data, error_message: errMsg } = response?.data || {};

      if (success) {
        setAcadamicYearData(data);
      } else {
        notification.error({
          message: `Error on Academic Year data`,
          description: errMsg,
        });
      }
    },
  });

  const isFormLoading = isGETActiveAcademicYearLoading || isPOSTAddOneDepartmentClearanceReqLoading;

  useEffect(() => {
    runGETActiveAcademicYear();
  }, []);

  const onFinish = values => {
    if (!activeAcademicYearData) {
      notification.error({ description: 'No Active Semester Info' });

      return;
    }

    const { description, initial_status: initialStatus, name, requirement_type: reqType } = values;
    const { semester, academic_year: acadYear } = activeAcademicYearData || {};
    const isReqTypeFixed = SELECT_CLEARANCE_TYPE?.[0].value === reqType;
    const v2SemID = isReqTypeFixed ? 0 : semester?.id;
    const v2AcadYearID = isReqTypeFixed ? 0 : acadYear?.id;

    runPOSTAddOneDepartmentClearanceReq({
      description,
      initialStatus,
      name,
      v2DeptId: state?.v2_department_id,
      type: reqType,
      v2AcadYearID,
      v2SemID,
    });
  };

  const activeSemText = activeAcademicYearData?.semester?.name;
  const activeAcademicYearText = activeAcademicYearData?.academic_year?.name;

  return (
    <Spin spinning={isFormLoading}>
      {!!activeAcademicYearText && (
        <Typography.Text>Active Academic Year: {activeAcademicYearText}</Typography.Text>
      )}
      <br />
      {!!activeSemText && <Typography.Text>Active Semester: {activeSemText}</Typography.Text>}
      <Divider />
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
