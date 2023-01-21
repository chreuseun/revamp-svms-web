import { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  CalendarOutlined,
  SettingOutlined,
  LinkOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Menu, Button } from 'antd';

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
  return (
    <div style={{ overflowY: 'scroll', height: '100%', marginRight: 4 }}>
      <Button
        type="primary"
        onClick={onCollapse}
        style={{ width: '100%', marginTop: 8, marginBottom: 8 }}>
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        inlineCollapsed={isCollapsed}
        style={{
          maxWidth: 300,
          minWidth: 50,
          overflowY: 'scroll',
          borderRadius: 8,
          height: '100%',
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
        theme={'dark'}
        items={items}
      />
    </div>
  );
};
export default App;
