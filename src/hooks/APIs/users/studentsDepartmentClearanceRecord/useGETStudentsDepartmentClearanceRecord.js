import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { USER_ENDPOINTS } from 'src/constants/endpoints';

const useGETStudentsDepartmentClearanceReacord = ({ onCompleted, onError } = {}) => {
  const { isGETRequestLoading: isGETStudentsDeptClearanceRecordLoading, runHTTPGetRequest } =
    useHTTPGet({
      url: USER_ENDPOINTS.STUDENTS_DEPARTMENT_CLEARANCE_REQUIREMENT
        .GET_FILTED_STUDENT_DEPT_CLR_REQ_BY_ID,
      onCompleted: response => {
        const {
          data = [],
          success = false,
          error_message: errorMessage = null,
        } = response?.data || {};

        if (success) {
          if (onCompleted) {
            onCompleted(data);
          }
        } else {
          notification.error({ message: `useGETDepartmentsListByAccountID: ${errorMessage}` });
        }
      },
      onError: error => {
        notification.error({ message: `useGETDepartmentsListByAccountID: ${error}` });

        if (onError) {
          onError(error);
        }
      },
    });

  const useGETStudentsDepartmentClearanceReacord = ({
    v2StudentsDepartmentClearanceRecord = null,
  }) => {
    runHTTPGetRequest({
      config: {
        params: {
          v2_students_department_clearance_record: v2StudentsDepartmentClearanceRecord,
        },
      },
      headers: {},
    });
  };

  return {
    useGETStudentsDepartmentClearanceReacord,
    isGETStudentsDeptClearanceRecordLoading,
  };
};

export default useGETStudentsDepartmentClearanceReacord;
