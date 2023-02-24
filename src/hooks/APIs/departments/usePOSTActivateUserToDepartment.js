import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTActivateUserToDepartment = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTActivateUserToDepartment, runHTTPPostRequest } = useHTTPost({
    url: ENDPOINTS.DEPARTMENTS.ACTIVATE_USER_TO_DEPT,
    onCompleted,
    onError,
  });

  const runPOSTActivateUserToDepartment = async ({
    accountID = null,
    departmentID = null,
  } = {}) => {
    await runHTTPPostRequest({
      data: {
        account_id: accountID,
        department_id: departmentID,
      },
    });
  };

  return {
    isPOSTActivateUserToDepartment,
    runPOSTActivateUserToDepartment,
  };
};

export default usePOSTActivateUserToDepartment;
