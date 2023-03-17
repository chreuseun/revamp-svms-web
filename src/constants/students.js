const STUDENT_UPLOAD_FORM = {
  FORM_NAME: 'student-csv-upload',
  UPLOAD_STUDENT_CSV: {
    label: 'Upload Student Record',
    name: 'students_csv',
    rules: [{ required: true, message: 'CSV file is required' }],
  },
};

export { STUDENT_UPLOAD_FORM };
