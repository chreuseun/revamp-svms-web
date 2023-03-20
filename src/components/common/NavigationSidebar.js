import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

import { initiateLogout } from 'src/utils/authorization';
import { ADMIN_NAVIGATION_BAR_DATA, USER_NAVIGATION_BAR_DATA } from 'src/constants/navigationBar';
import { navigateToRoute } from 'src/utils/reactRouterDom';
import { useGetAppStore } from 'src/hooks/redux';

const NavigationSidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setCollapsed] = useState(true);

  const { userDetails } = useGetAppStore();

  const onCollapse = () => {
    setCollapsed(p => !p);
  };

  const showLogoutPrompt = () => {
    Modal.warning({
      title: 'Do you want to logout?',
      okCancel: true,
      okText: 'Yes',
      cancelText: 'No',
      onOk: initiateLogout,
    });
  };

  const RenderCollapseIcon = () => (isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />);

  const onClickMenu = e => {
    const doNothingKeys = ['logout', 'collapse'];

    if (doNothingKeys.includes(e?.key)) {
      return;
    }

    navigateToRoute({ navigate, routeName: e?.key });
  };

  // # ADMIN
  if (userDetails?.accountDetails?.user_type_id === 'ADMIN') {
    // FOR ADMIN OPTIONS
    return (
      <div
        style={{
          overflowY: 'scroll',
          height: '100%',
        }}>
        <Menu
          onClick={onClickMenu}
          inlineCollapsed={isCollapsed}
          style={{
            maxWidth: 250,
            minWidth: 25,
            overflowY: 'scroll',
            height: '100%',
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={'inline'}
          theme={'dark'}
          items={[
            {
              key: 'collapse',
              icon: <RenderCollapseIcon />,
              onClick: onCollapse,
              label: 'SVMS',
            },
            ...ADMIN_NAVIGATION_BAR_DATA,
            {
              key: 'logout',
              icon: <LogoutOutlined />,
              onClick: showLogoutPrompt,
              label: 'Logout ',
            },
          ]}
        />
      </div>
    );
  }

  //  # USER e.i (librarian, registrar , accounting, student counsil activity)
  if (userDetails?.accountDetails?.user_type_id === 'USER') {
    return (
      <div
        style={{
          overflowY: 'scroll',
          height: '100%',
        }}>
        <Menu
          onClick={onClickMenu}
          inlineCollapsed={isCollapsed}
          style={{
            maxWidth: 250,
            minWidth: 25,
            overflowY: 'scroll',
            height: '100%',
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={'inline'}
          theme={'dark'}
          items={[
            {
              key: 'collapse',
              icon: <RenderCollapseIcon />,
              onClick: onCollapse,
              label: 'SVMS',
            },
            ...USER_NAVIGATION_BAR_DATA,
            {
              key: 'logout',
              icon: <LogoutOutlined />,
              onClick: showLogoutPrompt,
              label: 'Logout ',
            },
          ]}
        />
      </div>
    );
  }

  //  # SUBJECT  e.i (teachers)
  if (userDetails?.accountDetails?.user_type_id === 'SUBJECT') {
    //
  }

  // DEFAULT collapse and logount button only
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '100%',
      }}>
      <Menu
        onClick={onClickMenu}
        inlineCollapsed={isCollapsed}
        style={{
          maxWidth: 250,
          minWidth: 25,
          overflowY: 'scroll',
          height: '100%',
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
        theme={'dark'}
        items={[
          {
            key: 'collapse',
            icon: <RenderCollapseIcon />,
            onClick: onCollapse,
            label: 'SVMS',
          },
          {
            key: 'logout',
            icon: <LogoutOutlined />,
            onClick: showLogoutPrompt,
            label: 'Logout ',
          },
        ]}
      />
    </div>
  );
};
export default NavigationSidebar;
