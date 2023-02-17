import React, { useEffect, useState } from 'react';
import { Input, Select, Typography, DatePicker, notification } from 'antd';

import { NavigationSidebar, DefaultContainer, PageContentContainer } from 'src/components/common';
import { MANAGE_USER_INPUT_LABELS, SEARCH_USERS_OPTIONS } from 'src/constants/users';
import { useGETAccountsByFilters } from 'src/hooks/APIs/account';
import UsersTables from './UsersTables';

const { Text } = Typography;
const { RangePicker } = DatePicker;

const { byLockedOptions, byStateOptions, byUserTypeOptions } = SEARCH_USERS_OPTIONS;

const ManageUsers = () => {
  const [byUserTypeId, setByUserTypeId] = useState(null);
  const [byLocked, setByLocked] = useState(null);
  const [byState, setByState] = useState(null);
  const [byDateStart, setByDateStart] = useState(null);
  const [byDateEnd, setByDateEnd] = useState(null);
  const [accountsList, setAccountsList] = useState([]);

  const { isGETAccountsByFiltersLoading, runGETAccountsByFilters } = useGETAccountsByFilters({
    onCompleted: response => {
      const { data } = response;

      const userArray = data?.data?.results || [];
      const mapUsers = userArray.map(user => {
        return {
          key: user?.id,
          ...user,
        };
      });

      setAccountsList(mapUsers);
    },
    onError: err => {
      notification.error({
        message: err,
      });
    },
  });

  useEffect(() => {
    runGETAccountsByFilters({ params: {} });
  }, []);

  const onChangeUserTypeId = val => {
    setByUserTypeId(val);
  };

  const onChangeLocked = val => {
    setByLocked(val);
  };

  const onChangeByState = val => {
    setByState(val);
  };

  const onChangeRangePicker = (_, stringDate) => {
    const [dateStart, dateEnd] = stringDate;
    setByDateStart(dateStart || null);
    setByDateEnd(dateEnd || null);
  };

  const onPressSearch = value => {
    runGETAccountsByFilters({
      params: {
        date_start: byDateStart,
        date_end: byDateEnd,
        text: value,
        type: byUserTypeId,
        locked: byLocked,
        state: byState,
      },
    });
  };

  return (
    <DefaultContainer
      customStyles={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}
      isLoading={isGETAccountsByFiltersLoading}>
      <NavigationSidebar />
      <PageContentContainer
        title="Manage Users"
        containerStyles={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '2em',
          }}>
          <div style={{ flexGrow: 1, marginRight: 8 }}>
            <Text type="secondary">{MANAGE_USER_INPUT_LABELS.BY_FULLNAME}</Text>
            <Input.Search enterButton="Search" size="large" onSearch={onPressSearch} allowClear />
          </div>
          <div style={{ flexGrow: 1, marginRight: 8, display: 'flex', flexDirection: 'column' }}>
            <Text type="secondary">{MANAGE_USER_INPUT_LABELS.BY_DATERANGE}</Text>
            <RangePicker format="YYYY-MM-DD" size="large" onChange={onChangeRangePicker} />
          </div>
          <div style={{ flexGrow: 1, marginRight: 8 }}>
            <Text type="secondary">{MANAGE_USER_INPUT_LABELS.BY_USER_TYPE}</Text>
            <Select
              size="large"
              style={{ width: '100%' }}
              onChange={onChangeUserTypeId}
              options={byUserTypeOptions}
            />
          </div>
          <div style={{ flexGrow: 1, marginRight: 8 }}>
            <Text type="secondary">{MANAGE_USER_INPUT_LABELS.BY_LOCKED}</Text>
            <Select
              size="large"
              style={{ width: '100%' }}
              showSearch
              onChange={onChangeLocked}
              options={byLockedOptions}
            />
          </div>
          <div style={{ flexGrow: 1, marginRight: 8 }}>
            <Text type="secondary">{MANAGE_USER_INPUT_LABELS.BY_STATUS}</Text>
            <Select
              size="large"
              style={{ width: '100%' }}
              showSearch
              onChange={onChangeByState}
              options={byStateOptions}
            />
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            padding: 16,
            overflow: 'scroll',
          }}>
          <UsersTables userData={accountsList} />
        </div>
      </PageContentContainer>
    </DefaultContainer>
  );
};

export default ManageUsers;
