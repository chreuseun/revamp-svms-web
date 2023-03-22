import { notification } from 'antd';

import { ENDPOINTS } from 'src/constants/endpoints';
import useHTTPGet from 'src/hooks/APIs/useHTTPGet';

const useGETActiveAcademicYear = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isGETRequestLoading: isGETActiveAcademicYearLoading, runHTTPGetRequest } = useHTTPGet({
    onCompleted,
    onError: err => {
      notification.error({ message: err, description: 'Get Active Academic year error' });

      if (onError) {
        onError(err);
      }
    },
    url: ENDPOINTS.ACADEMIC_YEARS.GET_ACTIVE_ACADEMIC_YEAR,
  });

  const runGETActiveAcademicYear = async () => {
    await runHTTPGetRequest({ config: {} });
  };

  return {
    isGETActiveAcademicYearLoading,
    runGETActiveAcademicYear,
  };
};

export default useGETActiveAcademicYear;
