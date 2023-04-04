import React from 'react';
import { Tag, Button, notification, Modal } from 'antd';
import { userAPIForStudentsDepartmentClearanceRecord } from 'src/hooks/APIs/users';

import PropTypes from 'prop-types';

const { usePOSTUpdateStudentClearanceRecordByID } = userAPIForStudentsDepartmentClearanceRecord;

const APPROVED_STATUS = 'APPROVED';
const REJECTED_STATUS = 'REJECTED';

const UpdateStudentRequirementIDStatus = ({ studentRecord = {} }) => {
  const { status, id: studentDeptClearanceRecordID = null } = studentRecord;
  const isApproved = status === APPROVED_STATUS;

  const { isPOSTUpdateStudentClearanceRecrodByIDLoading, runPOSTUpdateStudentClearanceRecrodByID } =
    usePOSTUpdateStudentClearanceRecordByID({
      onCompleted: data => {
        if (data?.data?.success) {
          Modal.success({
            onOk: () => window.location.reload(),
            content: `Record Successfully udpated`,
          });
        } else {
          notification.error({
            message: `${data?.data?.error_message}`,
          });
        }
      },
    });

  const onClickTag = updateStatus => () => {
    runPOSTUpdateStudentClearanceRecrodByID({
      status: updateStatus,
      studentsDepartmentClearanceRecordID: studentDeptClearanceRecordID,
    });
  };

  return (
    <Button
      style={{ border: 'none' }}
      loading={isPOSTUpdateStudentClearanceRecrodByIDLoading}
      onClick={onClickTag(isApproved ? REJECTED_STATUS : APPROVED_STATUS)}>
      <Tag color={isApproved ? 'green' : 'red'}>{status}</Tag>
    </Button>
  );
};

UpdateStudentRequirementIDStatus.propTypes = {
  studentRecord: PropTypes.object,
};

export default UpdateStudentRequirementIDStatus;
