import { useState } from 'react';
import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGETDepartmentTypes = () => {
  const [departmentTypes, setDepartmentTypes] = useState([]);

  const { isGETRequestLoading: isGETDepartmentTypesLoading, runHTTPGetRequest } = useHTTPGet({
    url: ENDPOINTS.DEPARTMENTS.GET_DEPT_TYPES,
    onCompleted: data => {
      setDepartmentTypes(data?.data || []);
    },
    onError: error => {
      notification.error({
        message: `Dept. types: ${error}`,
      });
    },
  });

  const runGETDepartmentTypes = async () => {
    await runHTTPGetRequest();
  };

  return {
    runGETDepartmentTypes,
    isGETDepartmentTypesLoading,
    departmentTypes,
  };
};

export default useGETDepartmentTypes;
