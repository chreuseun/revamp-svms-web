import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { ENDPOINTS } from 'src/constants/endpoints';

const usePOSTBulkUpsertStudents = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { isPOSTRequestLoading: isPOSTBulkUpsertStudentsLoading, runHTTPPostRequest } = useHTTPost({
    url: ENDPOINTS.STUDENTS.BULK_UPSERT_STUDENTS,
    onCompleted,
    onError,
  });

  const runPOSTBulkUpsertStudents = async ({ studentRecordsArray = [] } = {}) => {
    const generateUsername = studentRecordsArray.map(record => {
      return [...record, `${record?.[0]}-${record?.[9]}`];
    });

    await runHTTPPostRequest({
      data: {
        student_records_array: generateUsername,
      },
    });
  };

  return {
    runPOSTBulkUpsertStudents,
    isPOSTBulkUpsertStudentsLoading,
  };
};

export default usePOSTBulkUpsertStudents;
