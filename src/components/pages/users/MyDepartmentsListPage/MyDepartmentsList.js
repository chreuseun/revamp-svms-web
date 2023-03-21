import React from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd';
import PropTypes from 'prop-types';

import { DEPARTMENT_TYPES_CONFIG } from 'src/constants/departments';

const MyDepartmentList = ({ groupedDepartmentList = [] }) => {
  const onClickDepartmentCard = details => () => {
    console.log('--- CLICK DEPT CARD: ', details);
  };

  return (
    <div style={{}}>
      {groupedDepartmentList.map(groupedDepts => {
        const educationLevelNameText = groupedDepts?.[0] || '';
        const departmentsArray = groupedDepts?.[1] || [];

        return (
          <div key={educationLevelNameText} style={{}}>
            <Typography.Title style={{ textAlign: 'center' }} level={3}>
              {educationLevelNameText}
            </Typography.Title>
            <Row gutter={16} style={{ padding: 16 }}>
              {departmentsArray.map(details => {
                const {
                  v2_departments_name: deptName,
                  v2_department_id: deptID,
                  department_type_name: deptTypeName,
                  educ_level_name: educLevelName,
                  department_head_officer: deptHeadOfficer,
                } = details || {};

                const cardBGColor = DEPARTMENT_TYPES_CONFIG?.[deptTypeName]?.bgColor || null;
                const cardTextColor = DEPARTMENT_TYPES_CONFIG?.[deptTypeName]?.textColor || null;
                return (
                  <Col span={8} key={deptID} style={styles.col}>
                    <Card
                      title={
                        <Typography.Title
                          level={4}
                          style={{ color: cardTextColor }}
                          type="secondary">
                          {deptName}
                        </Typography.Title>
                      }
                      bordered={true}
                      style={styles.card(cardBGColor)}
                      onClick={onClickDepartmentCard(details)}>
                      <div>
                        <Typography.Text style={{ color: cardTextColor }} type="secondary">
                          {deptTypeName}
                        </Typography.Text>
                      </div>
                      <div>
                        <Typography.Text style={{ color: cardTextColor }} type="secondary">
                          {educLevelName}
                        </Typography.Text>
                      </div>
                      <div>
                        <Typography.Text style={{ color: cardTextColor }} type="secondary">
                          {deptHeadOfficer}
                        </Typography.Text>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

MyDepartmentList.propTypes = {
  groupedDepartmentList: PropTypes.array,
};

const styles = {
  col: {
    marginBottom: 16,
  },
  card: (bgColor = null) => ({
    backgroundColor: bgColor || '#ffd166',
    cursor: 'pointer',
  }),
};

export default MyDepartmentList;
