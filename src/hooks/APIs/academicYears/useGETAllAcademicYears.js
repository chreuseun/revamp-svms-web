import { ENDPOINTS } from 'src/constants/endpoints';
import useHTTPGet from 'src/hooks/APIs/useHTTPGet';

const useGETAllAcademicYears = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isGETRequestLoading: isGETAllAcademicYearsLoading, runHTTPGetRequest } = useHTTPGet({
    onCompleted,
    onError,
    url: ENDPOINTS?.ACADEMIC_YEARS.GET_ALL_ACADEMIC_YEARS,
  });

  const runGETAllAcademicYears = async () => {
    await runHTTPGetRequest({ config: {} });
  };

  return {
    runGETAllAcademicYears,
    isGETAllAcademicYearsLoading,
  };
};

export default useGETAllAcademicYears;
