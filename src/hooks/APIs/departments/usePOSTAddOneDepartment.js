import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTAddOneDepartment = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTAddOneDepartment, runHTTPPostRequest } = useHTTPost({
    url: ENDPOINTS.DEPARTMENTS.ADD_ONE_DEPT,
    onCompleted,
    onError,
  });

  const runPOSTAddOneDepartment = async ({ data = {} }) => {
    await runHTTPPostRequest({
      data,
    });
  };

  return {
    isPOSTAddOneDepartment,
    runPOSTAddOneDepartment,
  };
};

export default usePOSTAddOneDepartment;
