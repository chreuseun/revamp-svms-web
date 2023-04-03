import React, { useState } from 'react';
import { Tag, Button } from 'antd';

import PropTypes from 'prop-types';

const APPROVED_STATUS = 'APPROVED';
const REJECTED_STATUS = 'REJECTED';

const UpdateStudentRequirementIDStatus = ({ studentRecord = {} }) => {
  const { status } = studentRecord;
  const [currentStatus, setCurrentStatus] = useState(status);
  const studentDeptClearanceRecordID = studentRecord?.id;

  const onClickTag = updateStatus => () => {
    console.log('-:', studentDeptClearanceRecordID);
    setCurrentStatus(updateStatus);
  };

  const isApproved = currentStatus === APPROVED_STATUS;

  if (isApproved) {
    return (
      <Button onClick={onClickTag(REJECTED_STATUS)}>
        <Tag color="green">{status}</Tag>
      </Button>
    );
  }

  return (
    <Button onClick={onClickTag(APPROVED_STATUS)}>
      <Tag color="red">{status}</Tag>
    </Button>
  );
};

UpdateStudentRequirementIDStatus.propTypes = {
  studentRecord: PropTypes.object,
};

export default UpdateStudentRequirementIDStatus;
