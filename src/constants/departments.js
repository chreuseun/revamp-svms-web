import { ACADEMIC_LEVELS } from './academicLevels';

const TRADITIONAL_DEPT_DB_ID = 2;

const DEPARTMENTS_TYPES = {
  traditional: {
    value: 'traditional',
    label: 'Traditional',
  },
  violation: {
    value: 'violation',
    label: 'Violation',
  },
  activity: {
    value: 'activity',
    label: 'Activity',
  },
};

const DEPARTMENTS_TYPES_OPTIONS = [
  {
    value: 'traditional',
    label: 'Traditional',
  },
  {
    value: 'violation',
    label: 'Violation',
  },
  {
    value: 'activity',
    label: 'Activity',
  },
];

const DEPARTMENTS_TRADITIONAL_OPTIONS = [
  {
    value: '*',
    label: 'Default',
  },
  {
    value: 'finance',
    label: 'Finance',
  },
  {
    value: 'registrar',
    label: 'Registrar',
  },
];

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
    selectOptions: DEPARTMENTS_TYPES_OPTIONS,
  },
  DEPT_TRADITIONAL_TYPES: {
    label: 'What branch?',
    name: 'department_traditional_types',
    placeholder: 'Select a type',
    rules: [{ required: true, message: 'Field is required' }],
    selectOptions: DEPARTMENTS_TRADITIONAL_OPTIONS,
    displayWhen: [DEPARTMENTS_TYPES.traditional.value],
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

export {
  DEPARTMENTS_TYPES,
  ADD_DEPARTMENTS_FORM_INPUTS,
  DEPARTMENTS_TYPES_OPTIONS,
  TRADITIONAL_DEPT_DB_ID,
};
