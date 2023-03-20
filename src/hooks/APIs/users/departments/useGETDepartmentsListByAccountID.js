import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { USER_ENDPOINTS } from 'src/constants/endpoints';

const useGETDepartmentsListByAccountID = ({ onCompleted, onError } = {}) => {
  const { isGETRequestLoading: isGETDepartmentsListByAccountIDLoading, runHTTPGetRequest } =
    useHTTPGet({
      url: USER_ENDPOINTS.DEPARTMENTS.GET_DEPARTMENTS_LIST_BY_ACCOUNT_ID,
      onCompleted,
      onError: error => {
        notification.error({ message: `Get departments by account id: ${error}` });
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