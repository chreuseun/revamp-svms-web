import React from 'react';

import { Form, Upload, Button, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCSVImporter } from 'src/hooks/csv';
import { STUDENT_UPLOAD_FORM } from 'src/constants/students';

const { useForm } = Form;
const { UPLOAD_STUDENT_CSV } = STUDENT_UPLOAD_FORM;

const UploadStudentCSVForm = () => {
  const [uploadStudentRecordsForm] = useForm();

  const { csvData, isImportingCSV, onImportFileHandler, setCSVData } = useCSVImporter();

  const onBeforeUpload = file => {
    onImportFileHandler(file);

    return false;
  };

  const onRemoveFile = () => {
    setCSVData(null);
  };

  return (
    <Spin spinning={isImportingCSV}>
      <div style={styles.container}>
        <Form form={uploadStudentRecordsForm}>
          <Form.Item {...UPLOAD_STUDENT_CSV}>
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
        </Form>
        <pre>{JSON.stringify(csvData, null, 4)}</pre>
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
