import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import PropTypes from 'prop-types';

const MyDepartmentList = ({ myDepartmentsArray = [] }) => {
  return (
    <Row gutter={16} style={{ padding: 16 }}>
      {myDepartmentsArray.map(details => {
        return (
          <Col span={8} key={details.v2_department_id} style={{ marginBottom: 16 }}>
            <Card
              title={details.v2_departments_name}
              bordered={true}
              style={{ backgroundColor: '#ffd166' }}>
              <Typography.Text strong>{details.department_type_name}</Typography.Text>
              <div>
                <Typography.Text type="secondary">{details.educ_level_id}</Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">
                  {details.department_head_officer}
                </Typography.Text>
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

export default MyDepartmentList;
