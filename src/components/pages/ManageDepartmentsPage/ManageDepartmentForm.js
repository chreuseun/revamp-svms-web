import React, { useEffect, useState, useRef } from 'react';
import { Form, Input, Select, Button, Modal, Spin, Switch } from 'antd';
import { groupBy } from 'lodash';
import PropTypes from 'prop-types';

import {
  ADD_DEPARTMENTS_FORM_INPUTS,
  ADD_DEPARTMENT_FORM,
  EDUC_LEVEL_ID_KEY,
} from 'src/constants/departments';
import { useGETDepartmentTypes, usePOSTDepartmentUpdate } from 'src/hooks/APIs/departments';
import { useGETEducationLevels } from 'src/hooks/APIs/educationLevels';
import { useGETAllCourses } from 'src/hooks/APIs/courses';
import {
  showAcadDepartmentSelect,
  showCourseSelect,
  getAcadDepartmentsOptions,
  getCourseOptions,
  getYearlevelOptions,
} from 'src/utils/departments';
import { useAddDepartmentForm } from 'src/hooks/antdForms';
import ManageDepartmentsUserModal from './ManageDepartmentsUserModal';

const { Option } = Select;

const {
  ACADEMIC_DEPARTMENTS,
  ACADEMIC_LEVEL,
  COURSE,
  DEPT_NAME,
  DEPT_TYPES,
  HEAD_OFFICER,
  YEARLEVEL,
  STATUS,
} = ADD_DEPARTMENTS_FORM_INPUTS;

const showTestUI = false;

const ManageDepartmentForm = ({ departmentData = null }) => {
  const [isDoneSettingInitialval, setIsDoneSettingInitialVal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [openManageUsers, setOpenManageUsers] = useState(false);

  const { isPOSTUpdateDepartmentLoading, runPOSTUpdateOneDepartment } = usePOSTDepartmentUpdate({
    onCompleted: response => {
      const { success, error_message: errMsg = '' } = response?.data || {};

      if (success) {
        Modal.success({
          title: 'Department updated added',
          onOk: () => window.location.reload(),
        });
      } else {
        Modal.error({
          title: 'Update Department Error:',
          content: <div>{errMsg}</div>,
        });
      }
    },
    onError: err => {
      Modal.error({
        title: 'Update Department Error:',
        content: <div>{err}</div>,
      });
    },
  });
  const isDoneInitializedRef = useRef(false);

  const { runGETDepartmentTypes, isGETDepartmentTypesLoading, departmentTypes } =
    useGETDepartmentTypes();
  const { runGETEducationLevels, educationalLevels, isGETEducationLevels } =
    useGETEducationLevels();
  const { isGETAllCoursesLoading, runGETAllCourses, courseData } = useGETAllCourses();

  const isPageLoading =
    isGETEducationLevels ||
    isGETDepartmentTypesLoading ||
    isGETAllCoursesLoading ||
    isPOSTUpdateDepartmentLoading;

  const {
    addDeptForm,
    inputDeptName,
    selectedAcadDept,
    inputHeadOfficer,
    selectedAcadLevel,
    selectedCourse,
    selectedDepartmentType,
    selectedYearLevel,
  } = useAddDepartmentForm({ isShouldRunUserOnChange: isDoneSettingInitialval });

  const testData = {
    textInputs: {
      inputDeptName,
      inputHeadOfficer,
    },
    select: {
      selectedDepartmentType,
      selectedAcadLevel,
      selectedAcadDept,
      selectedCourse,
      selectedYearLevel,
    },
    editData: {
      ...departmentData,
    },
  };

  useEffect(() => {
    if (!isPageLoading && !isDoneInitializedRef.current) {
      isDoneInitializedRef.current = true;

      addDeptForm.setFieldValue(DEPT_NAME.name, departmentData?.name);
      addDeptForm.setFieldValue(DEPT_TYPES.name, departmentData?.department_type_id);
      addDeptForm.setFieldValue(HEAD_OFFICER.name, departmentData?.department_head_officer);

      addDeptForm.setFieldValue(ACADEMIC_LEVEL.name, departmentData?.educ_level_id);
      addDeptForm.setFieldValue(ACADEMIC_DEPARTMENTS.name, departmentData?.acad_dept_id);
      addDeptForm.setFieldValue(COURSE.name, departmentData?.course_id);
      addDeptForm.setFieldValue(YEARLEVEL.name, departmentData?.year_level);
      setIsActive(!!departmentData?.is_active);

      setTimeout(() => {
        setIsDoneSettingInitialVal(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    runGETDepartmentTypes();
    runGETEducationLevels();
    runGETAllCourses();
  }, []);

  const coursesByEducLevelId = groupBy(courseData, EDUC_LEVEL_ID_KEY);
  const acadDepartmentsOptions = getAcadDepartmentsOptions({
    coursesByEducLevelId,
    selectedAcadLevel,
  });
  const coursesOptions = getCourseOptions({
    coursesByEducLevelId,
    selectedAcadDept,
    selectedAcadLevel,
  });
  const yearLevelOptions = getYearlevelOptions({
    coursesByEducLevelId,
    selectedAcadLevel,
    selectedCourse,
  });

  const onSubmitForm = data => {
    if (isPageLoading) {
      return;
    }

    const composeData = {
      ...data,
      department_id: departmentData?.id,
    };

    runPOSTUpdateOneDepartment({ data: composeData });
  };

  const onChangeStatus = val => setIsActive(val);

  return (
    <Spin spinning={isPageLoading}>
      <Button
        onClick={() => {
          setOpenManageUsers(true);
        }}
        disabled={false}
        type="default"
        style={{ margin: '10px 0px' }}
        htmlType={'submit'}>
        Manage Users
      </Button>
      <div
        style={{
          flexGrow: 1,
          border: 'solid #9f9f9f 0.9px',
          marginRight: 5,
          borderRadius: 8,
          marginBottom: 5,
          ...styles.pageContentContainer,
        }}>
        {showTestUI && <pre style={{ fontSize: 8 }}>{JSON.stringify(testData, null, 4)}</pre>}
        <Form
          form={addDeptForm}
          name={ADD_DEPARTMENT_FORM}
          onFinish={onSubmitForm}
          autoComplete="off"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}>
          <Form.Item {...DEPT_NAME}>
            <Input />
          </Form.Item>
          <Form.Item {...STATUS}>
            <Switch checked={isActive} onChange={onChangeStatus} />
          </Form.Item>
          <Form.Item {...DEPT_TYPES}>
            <Select placeholder={DEPT_TYPES.placeholder}>
              {departmentTypes.map(({ value, description = '', label = '' }) => (
                <Option key={value} value={value}>
                  {label}
                  {description ? ` - ${description}` : ''}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...ACADEMIC_LEVEL}>
            <Select placeholder={ACADEMIC_LEVEL.placeholder}>
              {educationalLevels.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {showAcadDepartmentSelect({
            educationLevelID: selectedAcadLevel,
          }) && (
            <Form.Item {...ACADEMIC_DEPARTMENTS}>
              <Select placeholder={ACADEMIC_DEPARTMENTS.placeholder}>
                {acadDepartmentsOptions.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
          {showCourseSelect({ educationLevelID: selectedAcadLevel }) && (
            <Form.Item {...COURSE}>
              <Select placeholder={COURSE.placeholder}>
                {coursesOptions.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
          <Form.Item {...YEARLEVEL}>
            <Select placeholder={YEARLEVEL.placeholder}>
              {yearLevelOptions.map(({ value, label }) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...HEAD_OFFICER}>
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
      </div>
      {openManageUsers && (
        <ManageDepartmentsUserModal
          open={openManageUsers}
          onCancel={() => setOpenManageUsers(false)}
          onOk={() => setOpenManageUsers(true)}
          modalTitle="Manage Department User"
          departmentData={departmentData}
        />
      )}
    </Spin>
  );
};

ManageDepartmentForm.propTypes = {
  departmentData: PropTypes.object,
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

export default ManageDepartmentForm;
