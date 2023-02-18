import { Form } from 'antd';
import { useEffect } from 'react';
import { ADD_DEPARTMENTS_FORM_INPUTS } from 'src/constants/departments';

const { useForm, useWatch } = Form;

const {
  ACADEMIC_DEPARTMENTS,
  ACADEMIC_LEVEL,
  COURSE,
  DEPT_NAME,
  DEPT_TYPES,
  HEAD_OFFICER,
  YEARLEVEL,
} = ADD_DEPARTMENTS_FORM_INPUTS;

const useAddDepartmentForm = () => {
  const [addDeptForm] = useForm();

  // INPUT
  const inputDeptName = useWatch(DEPT_NAME.name, addDeptForm);

  // SELECTS
  const selectedDepartmentType = useWatch(DEPT_TYPES.name, addDeptForm);
  const selectedAcadLevel = useWatch(ACADEMIC_LEVEL.name, addDeptForm);
  const selectedAcadDept = useWatch(ACADEMIC_DEPARTMENTS.name, addDeptForm);
  const selectedCourse = useWatch(COURSE.name, addDeptForm);
  const selectedYearLevel = useWatch(YEARLEVEL.name, addDeptForm);

  // INPUT
  const inputHeadOfficer = useWatch(HEAD_OFFICER.name, addDeptForm);

  // when selectedAcadLevel is changed then clear this fields
  useEffect(() => {
    addDeptForm.setFieldsValue({
      academic_department: null,
      course: null,
      yearlevel: null,
    });
  }, [selectedAcadLevel]);

  // when selectedAcadDept is changed then clear this fields
  useEffect(() => {
    addDeptForm.setFieldsValue({
      course: null,
      yearlevel: null,
    });
  }, [selectedAcadDept]);

  // when selectedCourse is changed then clear this fields
  useEffect(() => {
    addDeptForm.setFieldsValue({
      yearlevel: null,
    });
  }, [selectedCourse]);

  return {
    addDeptForm,
    inputDeptName,
    selectedDepartmentType,
    selectedAcadLevel,
    selectedAcadDept,
    selectedCourse,
    selectedYearLevel,
    inputHeadOfficer,
  };
};

export default useAddDepartmentForm;
