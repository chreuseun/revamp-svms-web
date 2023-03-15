import React from 'react';

import { Form, Upload, Button, Spin, message, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCSVImporter } from 'src/hooks/csv';
import { STUDENT_UPLOAD_FORM } from 'src/constants/students';

const { useForm } = Form;
const { UPLOAD_STUDENT_CSV, FORM_NAME } = STUDENT_UPLOAD_FORM;

const UploadStudentCSVForm = () => {
  const [uploadStudentRecordsForm] = useForm();

  const { csvData, isImportingCSV, onImportFileHandler, setCSVData } = useCSVImporter();

  const onBeforeUpload = file => {
    onImportFileHandler(file);

    return false;
  };

  const onRemoveFile = () => {
    uploadStudentRecordsForm.setFieldValue(UPLOAD_STUDENT_CSV.name, null);
    setCSVData(null);
  };

  const onFinish = values => {
    if (!csvData) {
      message.error('CSV Data is required');
    }
  };

  const studentRecordCount = csvData?.rows?.length || 0;
  const columnNames = csvData?.columnNames || [];

  return (
    <Spin spinning={isImportingCSV}>
      <div style={styles.container}>
        <div>
          <Typography.Text type="success">Column names:</Typography.Text>
          <div style={{ marginLeft: 16 }}>
            {columnNames.map(col => (
              <div key={col}>{col || ''}</div>
            ))}
          </div>
        </div>
        <Typography.Text type="success">Record count:</Typography.Text>
        <div style={{ marginLeft: 16 }}>{studentRecordCount}</div>

        <Form form={uploadStudentRecordsForm} name={FORM_NAME} onFinish={onFinish}>
          <Form.Item {...UPLOAD_STUDENT_CSV} re>
            <Upload.Dragger
              maxCount={1}
              multiple={false}
              name="file"
              accept={'.csv'}
              onRemove={onRemoveFile}
              beforeUpload={onBeforeUpload}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  );
};

const styles = {
  container: {
    borderRadius: 8,
    maxWidth: '600px',
    padding: 2,
  },
};

export default UploadStudentCSVForm;
