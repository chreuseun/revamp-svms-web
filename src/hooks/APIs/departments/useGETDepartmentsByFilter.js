import { useState } from 'react';
import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGETDepartmentsByFilter = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const [departments, setDepartments] = useState([]);

  const { isGETRequestLoading: isGETDepartmentsByFilterLoading, runHTTPGetRequest } = useHTTPGet({
    url: ENDPOINTS.DEPARTMENTS.GET_DEPTS_BY_FILTER,
    onCompleted: response => {
      const { data = [], success = false, error_message: errorMessage } = response?.data || {};

      setDepartments(data);

      if (!success) {
        notification.error({
          description: `Response: Get departments Error:  ${errorMessage}`,
        });
      }

      if (onCompleted) {
        onCompleted(data);
      }
    },
    onError: err => {
      notification.error({
        description: `Get departments Error:  ${err}`,
      });

      if (onError) {
        onError(err);
      }
    },
  });

  const runGETDepartmentsByFilter = async ({ params = {} }) => {
    await runHTTPGetRequest({
      config: {
        params,
      },
    });
  };

  return {
    runGETDepartmentsByFilter,
    isGETDepartmentsByFilterLoading,
    departments,
  };
};

export default useGETDepartmentsByFilter;
