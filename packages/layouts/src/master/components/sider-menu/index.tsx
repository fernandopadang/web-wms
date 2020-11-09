import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, SyncOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './style.css';

interface DefaultProps{
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default memo((props: DefaultProps) => {
  const { collapsed, setCollapsed } = props;
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const router = useRouter();

  return (
    <Sider breakpoint="md" collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.route]} defaultOpenKeys={[router.route.split('/')[1]]}>
        <Menu.Item key="/" icon={<PieChartOutlined />}><Link href="/" shallow={true}><a>Dashboard</a></Link></Menu.Item>
        <Menu.Item key="/category" icon={<DesktopOutlined />}><Link href="/category" shallow={true}><a>Category</a></Link></Menu.Item>
        <SubMenu key="warehouse" icon={<SyncOutlined spin={true} />} title="Warehouse">
          <Menu.Item key="/warehouse/stock-inbound"><Link href="/warehouse/stock-inbound" shallow={true}><a>Stock Inbound</a></Link></Menu.Item>
          <Menu.Item key="/warehouse/stock-outbound"><Link href="/warehouse/stock-outbound" shallow={true}><a>Stock Outbound</a></Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
});