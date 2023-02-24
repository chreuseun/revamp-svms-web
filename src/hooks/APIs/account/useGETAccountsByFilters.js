import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGetAccountsByFilters = ({ onCompleted = () => {}, onError = () => {} }) => {
  const { isGETRequestLoading: isGETAccountsByFiltersLoading, runHTTPGetRequest } = useHTTPGet({
    url: ENDPOINTS.ACCOUNT.GET_ACCOUNTS,
    onCompleted: data => {
      onCompleted(data);
    },
    onError: error => {
      onError(error);
    },
  });

  const runGETAccountsByFilters = async ({ params = {} }) => {
    await runHTTPGetRequest({
      config: {
        params,
      },
    });
  };

  return {
    isGETAccountsByFiltersLoading,
    runGETAccountsByFilters,
  };
};

export default useGetAccountsByFilters;
