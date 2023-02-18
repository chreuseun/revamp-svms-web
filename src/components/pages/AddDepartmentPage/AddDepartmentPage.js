import React, { useEffect } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { groupBy } from 'lodash';

import {
  ADD_DEPARTMENTS_FORM_INPUTS,
  ADD_DEPARTMENT_FORM,
  EDUC_LEVEL_ID_KEY,
} from 'src/constants/departments';
import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';
import { useGETDepartmentTypes } from 'src/hooks/APIs/departments';
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

const { Option } = Select;

const {
  ACADEMIC_DEPARTMENTS,
  ACADEMIC_LEVEL,
  COURSE,
  DEPT_NAME,
  DEPT_TYPES,
  HEAD_OFFICER,
  YEARLEVEL,
} = ADD_DEPARTMENTS_FORM_INPUTS;

const AddDepartmentPage = () => {
  const {
    addDeptForm,
    inputDeptName,
    selectedAcadDept,
    inputHeadOfficer,
    selectedAcadLevel,
    selectedCourse,
    selectedDepartmentType,
    selectedYearLevel,
  } = useAddDepartmentForm();

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
  };

  const { runGETDepartmentTypes, isGETDepartmentTypesLoading, departmentTypes } =
    useGETDepartmentTypes();
  const { runGETEducationLevels, educationalLevels, isGETEducationLevels } =
    useGETEducationLevels();
  const { isGETAllCoursesLoading, runGETAllCourses, courseData } = useGETAllCourses();

  const isPageLoading =
    isGETEducationLevels || isGETDepartmentTypesLoading || isGETAllCoursesLoading;

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

  const onSubmitForm = values => {
    console.log('--- ADD DEPT SUBMIT FORM: ', values);
  };

  return (
    <DefaultContainer customStyles={styles.container} isLoading={isPageLoading}>
      <NavigationSidebar />
      <PageContentContainer title="Add Department" containerStyles={styles.pageContentContainer}>
        <pre style={{ fontSize: 8 }}>{JSON.stringify(testData, null, 4)}</pre>
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
