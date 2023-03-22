import { notification } from 'antd';

import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { USER_ENDPOINTS } from 'src/constants/endpoints';

const usePOSTAddOneDepartmentClearanceRequirement = ({ onCompleted, onError } = {}) => {
  const { isPOSTRequestLoading: isPOSTAddOneDepartmentClearanceReqLoading, runHTTPPostRequest } =
    useHTTPost({
      url: USER_ENDPOINTS.DEPARTMENT_CLEARANCE_REQUIREMENT.ADD_ONE_DEPARTMENT_CLEARANCE_RECORD,
      onCompleted: response => {
        const { error_message: errMsg, data, success } = response?.data || {};

        if (success) {
          onCompleted(data);
        } else {
          notification.error({
            description: `Error@ adding requirement: ${errMsg}`,
          });
        }
      },
      onError: err => {
        notification.error({
          description: `Error@ adding requirement: ${err}`,
        });

        if (onError) {
          onError(err);
        }
      },
    });

  const runPOSTAddOneDepartmentClearanceReq = async ({
    v2DeptId = null,
    initialStatus = null,
    name = null,
    description = null,
    type = null,
    v2SemID = null,
    v2AcadYearID = null,
  } = {}) => {
    await runHTTPPostRequest({
      data: {
        v2_departments_id: v2DeptId,
        initial_status: initialStatus,
        name,
        description,
        type,
        v2_semester_id: v2SemID,
        v2_academic_year_id: v2AcadYearID,
      },
    });
  };

  return {
    runPOSTAddOneDepartmentClearanceReq,
    isPOSTAddOneDepartmentClearanceReqLoading,
  };
};

export default usePOSTAddOneDepartmentClearanceRequirement;
