import { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  CalendarOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';

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
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const [isCollapsed, setCollapsed] = useState(true);

  const changeMode = value => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  const onCollapse = () => {
    setCollapsed(p => !p);
  };
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode {mode}
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style {theme}
      <Switch onChange={onCollapse} /> Collapse {isCollapsed ? 'Y' : 'N'}
      <br />
      <br />
      <Menu
        inlineCollapsed={isCollapsed}
        style={{
          maxWidth: 300,
          border: '3px solid #EFEFEF',
          height: '100%',
          overflowY: 'scroll',
          borderRadius: 8,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default App;
