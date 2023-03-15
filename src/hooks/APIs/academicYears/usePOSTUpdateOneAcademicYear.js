import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTUpdateOneAcademicYear = ({ onError = () => {}, onCompleted = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTUpdateOnceAcademicYear, runHTTPPostRequest } = useHTTPost({
    url: ENDPOINTS.ACADEMIC_YEARS.UPDATE_ACADEMIC_YEAR,
    onCompleted,
    onError,
  });

  const runPOSTUpdateOneAcademicYear = async ({ id = null, isActive = null } = {}) => {
    runHTTPPostRequest({
      data: {
        is_active: isActive,
        id,
      },
    });
  };

  return {
    isPOSTUpdateOnceAcademicYear,
    runPOSTUpdateOneAcademicYear,
  };
};

export default usePOSTUpdateOneAcademicYear;
