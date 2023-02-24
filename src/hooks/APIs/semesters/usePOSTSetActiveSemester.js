import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTSetActiveSemester = ({ onCompleted, onError } = {}) => {
  const { isPOSTRequestLoading: isPOSTSetActiveSemesterLoading, runHTTPPostRequest } = useHTTPost({
    url: ENDPOINTS.SEMESTERS.SET_ACTIVE_SEMESTER,
    onCompleted,
    onError,
  });

  const runPOSTSetActiveSemester = async ({ semesterID = null } = {}) => {
    await runHTTPPostRequest({
      data: {
        semester_id: semesterID,
      },
    });
  };

  return {
    runPOSTSetActiveSemester,
    isPOSTSetActiveSemesterLoading,
  };
};

export default usePOSTSetActiveSemester;
