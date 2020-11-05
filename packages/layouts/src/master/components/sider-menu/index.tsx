import React, { useState, memo } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, SyncOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './style.css';

export default memo(() => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  return (
    <Sider breakpoint="md" collapsed={collapsed}>
      <div className="logo" onClick={() => setCollapsed(!collapsed)} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.route]} defaultOpenKeys={[router.route.split('/')[1]]}>
        <Menu.Item key="/" icon={<PieChartOutlined />}><Link href="/" shallow={true}><a>Dashboard</a></Link></Menu.Item>
        <Menu.Item key="/category" icon={<DesktopOutlined />}><Link href="/category" shallow={true}><a>Category</a></Link></Menu.Item>
        <SubMenu key="warehouse" icon={<SyncOutlined spin={true} />} title="Warehouse">
          <Menu.Item key="/warehouse/stock-inbound"><Link href="/warehouse/stock-inbound" shallow={true}><a>Stock Inbound</a></Link></Menu.Item>
          <Menu.Item key="/warehouse/stock-outbound"><Link href="/warehouse/stock-outbound" shallow={true}><a>Stock Outbound</a></Link></Menu.Item>
        </SubMenu>
      </Menu>
      <div className="profile">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.route]} defaultOpenKeys={[router.route.split('/')[1]]}>
          <SubMenu key="warehouse" icon={<UserOutlined />} title="Budiman">
            <Menu.Item key="/"><Link href="/" shallow={true}><a>Logout</a></Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  );
});