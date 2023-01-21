import { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  CalendarOutlined,
  SettingOutlined,
  LinkOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Menu, Modal } from 'antd';
import { initiateLogout } from 'src/utils/authorization';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
  getItem('Navigation One_1', '11', <MailOutlined />),
  getItem('Navigation Two_1', '22', <CalendarOutlined />),
  getItem('Navigation One_11', '111', <MailOutlined />),
  getItem('Navigation Two_11', '222', <CalendarOutlined />),
];
const App = () => {
  const [isCollapsed, setCollapsed] = useState(true);

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

  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '100%',
        marginRight: 4,
        paddingRight: 16,
      }}>
      <Menu
        inlineCollapsed={isCollapsed}
        style={{
          maxWidth: 250,
          minWidth: 25,
          overflowY: 'scroll',
          borderRadius: 8,
          height: '100%',
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
        theme={'dark'}
        items={[
          {
            key: 'collapse',
            icon: isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
            onClick: onCollapse,
            label: 'SVMS',
          },
          ...items,
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
export default App;
