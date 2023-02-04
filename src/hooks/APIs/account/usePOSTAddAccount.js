import { ENDPOINTS } from 'src/constants/endpoints';
import useHTTPost from 'src/hooks/APIs/useHTTPost';

const useAddAccount = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTAddAccountLoading, runHTTPPostRequest } = useHTTPost({
    url: ENDPOINTS.ACCOUNT.ADD,
    onCompleted,
    onError,
  });

  const runPOSTAddAccount = async ({ data = {} } = {}) => {
    await runHTTPPostRequest({
      data,
    });
  };

  return {
    isPOSTAddAccountLoading,
    runPOSTAddAccount,
  };
};

export default useAddAccount;
