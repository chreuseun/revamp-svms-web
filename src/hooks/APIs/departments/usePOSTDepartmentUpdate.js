import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTDepartmentUpdate = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTUpdateDepartmentLoading, runHTTPPostRequest } = useHTTPost({
    url: ENDPOINTS.DEPARTMENTS.UPDATE_DEPT,
    onCompleted,
    onError,
  });

  const runPOSTUpdateOneDepartment = async ({ data = {} } = {}) => {
    await runHTTPPostRequest({
      data,
    });
  };

  return {
    isPOSTUpdateDepartmentLoading,
    runPOSTUpdateOneDepartment,
  };
};

export default usePOSTDepartmentUpdate;
