import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGETDepartmentWithAccount = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isGETRequestLoading: isGETDepartmentWithAccountLoading, runHTTPGetRequest } = useHTTPGet({
    url: ENDPOINTS.DEPARTMENTS.GET_ACCOUNTS_IN_DEPT_ID,
    onCompleted,
    onError,
  });

  const runGETDepartmentWithAccount = async ({ userTypeIDs = [], departmentID = null } = {}) => {
    runHTTPGetRequest({
      config: {
        params: {
          department_id: departmentID,
          user_type_ids: JSON.stringify(userTypeIDs),
        },
      },
    });
  };

  return {
    isGETDepartmentWithAccountLoading,
    runGETDepartmentWithAccount,
  };
};

export default useGETDepartmentWithAccount;
