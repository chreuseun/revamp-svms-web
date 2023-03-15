import { useState } from 'react';

import { message } from 'antd';
import { csvStringToArray } from 'src/utils/csv';

const useCSVImported = () => {
  const [csvData, setCSVData] = useState(null);
  const [isImportingCSV, setIsImportingCSV] = useState(false);

  const onImportFileHandler = file => {
    setIsImportingCSV(true);
    setCSVData([]);
    const reader = new FileReader();

    message.info('Importing file');

    reader.onload = e => {
      const csvString = e?.target?.result || null;

      const csvData = csvStringToArray(csvString);

      setCSVData(csvData);
      message.success('File imported');
      setIsImportingCSV(false);
    };

    reader.onerror = () => {
      message.error('Importing failed');
      setIsImportingCSV(false);
    };

    reader.readAsText(file);
  };

  return {
    isImportingCSV,
    setIsImportingCSV,
    csvData,
    setCSVData,
    onImportFileHandler,
  };
};

export default useCSVImported;
