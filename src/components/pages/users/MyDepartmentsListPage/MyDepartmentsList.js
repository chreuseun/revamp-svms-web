import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import PropTypes from 'prop-types';

const MyDepartmentList = ({ myDepartmentsArray = [] }) => {
  const onClickDepartmentCard = details => () => {
    console.log('--- CLICK DEPT CARD: ', details);
  };

  return (
    <Row gutter={16} style={{ padding: 16 }}>
      {myDepartmentsArray.map(details => {
        const {
          v2_departments_name: deptName,
          v2_department_id: deptID,
          department_type_name: deptTypeName,
          educ_level_name: educLevelName,
          department_head_officer: deptHeadOfficer,
        } = details || {};

        return (
          <Col span={8} key={deptID} style={styles.col}>
            <Card
              title={deptName}
              bordered={true}
              style={styles.card}
              onClick={onClickDepartmentCard(details)}>
              <div>
                <Typography.Text type="secondary">{deptTypeName}</Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">{educLevelName}</Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">{deptHeadOfficer}</Typography.Text>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

MyDepartmentList.propTypes = {
  myDepartmentsArray: PropTypes.array,
};

const styles = {
  col: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffd166',
  },
};

export default MyDepartmentList;
