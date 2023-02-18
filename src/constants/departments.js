import { ACADEMIC_LEVELS } from './academicLevels';

const TRADITIONAL_DEPT_DB_ID = 2;

const ADD_DEPARTMENTS_FORM_INPUTS = {
  DEPT_NAME: {
    label: 'Name',
    name: 'department_name',
    rules: [{ required: true, message: 'Name is required' }],
  },
  DEPT_TYPES: {
    label: 'Type',
    name: 'department_type',
    rules: [{ required: true, message: 'Type is required' }],
    placeholder: 'Select a type',
  },
  ACADEMIC_LEVEL: {
    label: 'Academic Level',
    name: 'academic_level',
    placeholder: 'What traditional type',
    rules: [{ required: true, message: 'User type is required' }],
    selectOptions: [
      ACADEMIC_LEVELS.GRADE_SCHOOL,
      ACADEMIC_LEVELS.JUNIOR_HS,
      ACADEMIC_LEVELS.SENIOR_HS,
      ACADEMIC_LEVELS.COLLEGE,
    ],
  },
  ACADEMIC_DEPARTMENTS: {
    label: 'Academic Department',
    name: 'academic_department',
    rules: [{ required: true, message: 'Academic dept. is required' }],
    placeholder: 'Select Academic department',
    selectOptions: [],
  },
  COURSE: {
    label: 'Course',
    name: 'course',
    rules: [{ required: true, message: 'Field is required' }],
    placeholder: 'Select course',
    selectOptions: [],
  },
  YEARLEVEL: {
    label: 'Yearlevel',
    name: 'yearlevel',
    rules: [{ required: true, message: 'Field is required' }],
    placeholder: 'Select year level',
    selectOptions: [],
  },
  HEAD_OFFICER: {
    label: 'Head Officer',
    name: 'head_officer',
    rules: [{ required: true, message: 'Field is required' }],
  },
};

const ADD_DEPARTMENT_FORM = `add-new-department-form`;

const EDUC_LEVEL_ID_KEY = 'educ_level_id';

export {
  ADD_DEPARTMENTS_FORM_INPUTS,
  TRADITIONAL_DEPT_DB_ID,
  ADD_DEPARTMENT_FORM,
  EDUC_LEVEL_ID_KEY,
};
