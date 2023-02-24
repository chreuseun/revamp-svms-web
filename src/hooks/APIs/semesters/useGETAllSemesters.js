import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGETAllSemesters = ({ onCompleted, onError } = {}) => {
  const { isGETRequestLoading: isGETAllSemestersLoading, runHTTPGetRequest } = useHTTPGet({
    url: ENDPOINTS.SEMESTERS.GET_ALL_SEMESTERS,
    onCompleted,
    onError,
  });

  const runGETAllSemesters = () => {
    runHTTPGetRequest({ config: {} });
  };

  return {
    runGETAllSemesters,
    isGETAllSemestersLoading,
  };
};

export default useGETAllSemesters;
