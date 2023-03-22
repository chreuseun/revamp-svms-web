import { notification } from 'antd';

import { USER_ENDPOINTS } from 'src/constants/endpoints';
import useHTTPGet from 'src/hooks/APIs/useHTTPGet';

const useGETDepartmentClearanceRequirementsByDepartmentID = ({
  onCompleted = () => {},
  onError = () => {},
} = {}) => {
  const { isGETRequestLoading: isGETDeptClearanceReqByDeptIDLoading, runHTTPGetRequest } =
    useHTTPGet({
      onCompleted,
      onError: err => {
        notification.error({
          message: err,
          description: 'ERROR@useGETDepartmentClearanceRequirementsByDepartmentID',
        });

        if (onError) {
          onError(err);
        }
      },
      url: USER_ENDPOINTS.DEPARTMENT_CLEARANCE_REQUIREMENT
        .GET_DEPARTMENT_CLEARANCE_BY_DEPARTMENT_ID,
    });

  const runGETDeptClearanceReqByDeptID = async ({ v2_department_id: v2DeprtID = null }) => {
    await runHTTPGetRequest({
      config: {
        params: {
          v2_department_id: v2DeprtID,
        },
      },
    });
  };

  return {
    runGETDeptClearanceReqByDeptID,
    isGETDeptClearanceReqByDeptIDLoading,
  };
};

export default useGETDepartmentClearanceRequirementsByDepartmentID;
