import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTAddAcademicYears = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTAddAcademicYearsLoading, runHTTPPostRequest } = useHTTPost({
    onCompleted,
    onError,
    url: ENDPOINTS?.ACADEMIC_YEARS.ADD_ACADEMIC_YEAR,
  });

  const runPOSTAddAcademicYears = async ({ baseyear = null }) => {
    await runHTTPPostRequest({
      data: {
        baseyear,
      },
    });
  };

  return {
    isPOSTAddAcademicYearsLoading,
    runPOSTAddAcademicYears,
  };
};

export default usePOSTAddAcademicYears;
