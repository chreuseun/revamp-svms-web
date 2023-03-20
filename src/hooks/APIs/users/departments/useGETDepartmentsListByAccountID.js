import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { USER_ENDPOINTS } from 'src/constants/endpoints';

const useGETDepartmentsListByAccountID = ({ onCompleted, onError } = {}) => {
  const { isGETRequestLoading: isGETDepartmentsListByAccountIDLoading, runHTTPGetRequest } =
    useHTTPGet({
      url: USER_ENDPOINTS.DEPARTMENTS.GET_DEPARTMENTS_LIST_BY_ACCOUNT_ID,
      onCompleted: response => {
        const {
          data = [],
          success = false,
          error_message: errorMessage = null,
        } = response?.data || {};

        if (success) {
          if (onCompleted) {
            onCompleted(data);
          }
        } else {
          notification.error({ message: `Get departments by account id: ${errorMessage}` });
        }
      },
      onError: error => {
        notification.error({ message: `Get departments by account id: ${error}` });

        if (onError) {
          onError(error);
        }
      },
    });

  const runGETDepartmentsListByAccountID = () => {
    runHTTPGetRequest({ config: {}, headers: {} });
  };

  return {
    runGETDepartmentsListByAccountID,
    isGETDepartmentsListByAccountIDLoading,
  };
};

export default useGETDepartmentsListByAccountID;
