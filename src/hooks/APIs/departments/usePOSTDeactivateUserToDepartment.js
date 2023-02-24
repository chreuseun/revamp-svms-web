import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTDeactivateUserToDepartment = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTDeactivateUserToDepartmentLoading, runHTTPPostRequest } =
    useHTTPost({
      url: ENDPOINTS.DEPARTMENTS.DEACTIVATE_USER_TO_DEPT,
      onCompleted,
      onError,
    });

  const runDeactivateUserToDepartment = async ({ accountID = null, departmentID = null } = {}) => {
    await runHTTPPostRequest({
      data: {
        account_id: accountID,
        department_id: departmentID,
      },
    });
  };

  return {
    isPOSTDeactivateUserToDepartmentLoading,
    runDeactivateUserToDepartment,
  };
};

export default usePOSTDeactivateUserToDepartment;
