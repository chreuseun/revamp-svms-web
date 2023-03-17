import { useState, useEffect } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

import { initiateLogout } from 'src/utils/authorization';
import { ADMIN_NAVIGATION_BAR_DATA } from 'src/constants/navigationBar';
import { navigateToRoute } from 'src/utils/reactRouterDom';
import { USER_DETAILS } from 'src/constants/localStorage';

const NavigationSidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setCollapsed] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const localStorageUserDetails = localStorage.getItem(USER_DETAILS);

    try {
      setUserDetails(JSON.parse(localStorageUserDetails));
    } catch (err) {}
  }, []);

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
    console.log('---- MENU CLICKED: ', e?.key);

    const doNothingKeys = ['logout', 'collapse'];

    if (doNothingKeys.includes(e?.key)) {
      return;
    }

    navigateToRoute({ navigate, routeName: e?.key });
  };

  if (!userDetails) {
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
  }

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

    /*
  IF USER
  
  IF ADMIN 

  IF SUBJECT
*/
  );
};
export default NavigationSidebar;
