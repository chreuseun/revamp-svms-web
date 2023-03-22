import { notification } from 'antd';

import { ENDPOINTS } from 'src/constants/endpoints';
import useHTTPGet from 'src/hooks/APIs/useHTTPGet';

const useGETActiveAcademicYear = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isGETRequestLoading: isGETAllAcademicYearsLoading, runHTTPGetRequest } = useHTTPGet({
    onCompleted,
    onError: err => {
      notification.error({ message: err, description: 'Get Active Academic year error' });

      if (onError) {
        onError(err);
      }
    },
    url: ENDPOINTS.ACADEMIC_YEARS.GET_ACTIVE_ACADEMIC_YEAR,
  });

  const runGETAllAcademicYears = async () => {
    await runHTTPGetRequest({ config: {} });
  };

  return {
    runGETAllAcademicYears,
    isGETAllAcademicYearsLoading,
  };
};

export default useGETActiveAcademicYear;
