import { notification } from 'antd';

import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { USER_ENDPOINTS } from 'src/constants/endpoints';

const usePOSTUpdateStudentClearanceRecrodByID = ({
  onCompleted = () => {},
  onError = () => {},
} = {}) => {
  const {
    isPOSTRequestLoading: isPOSTUpdateStudentClearanceRecrodByIDLoading,
    runHTTPPostRequest,
  } = useHTTPost({
    url: USER_ENDPOINTS.STUDENTS_DEPARTMENT_CLEARANCE_REQUIREMENT
      .UPDATE_STUDENT_CLEARANCE_RECORD_BY_ID,
    onCompleted,
    onError: err => {
      notification.error({
        message: `Error@${usePOSTUpdateStudentClearanceRecrodByID}: ${err}`,
      });

      onError();
    },
  });

  const runPOSTUpdateStudentClearanceRecrodByID = async ({
    studentsDepartmentClearanceRecordID = null,
    status = null,
    accountIDUpdatedBy = null,
  } = {}) => {
    await runHTTPPostRequest({
      data: {
        v2_students_department_clearance_record_id: studentsDepartmentClearanceRecordID,
        status,
        account_id_updated_by: accountIDUpdatedBy,
      },
    });
  };

  return {
    runPOSTUpdateStudentClearanceRecrodByID,
    isPOSTUpdateStudentClearanceRecrodByIDLoading,
  };
};

export default usePOSTUpdateStudentClearanceRecrodByID;
