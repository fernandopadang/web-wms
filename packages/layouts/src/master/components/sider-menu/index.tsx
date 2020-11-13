import React, { memo, Fragment } from 'react';
import { Layout, Menu } from 'antd';
import { ShopOutlined, PieChartOutlined, SyncOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './style.less';

interface DefaultProps{
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default memo((props: DefaultProps) => {
  const { collapsed, setCollapsed } = props;
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const router = useRouter();

  const menus = [
    {
      path: "/",
      title: "Dashboard",
      icon: <PieChartOutlined />
    },
    {
      path: "/vendor",
      title: "Vendor",
      icon: <ShopOutlined />
    },
    {
      path: "warehouse",
      title: "Warehouse",
      icon: <SyncOutlined spin={true} />,
      subMenu: [
        {
          path: "/warehouse/stock-inbound",
          title: "Stock Inbound"
        },
        {
          path: "/warehouse/stock-outbound",
          title: "Stock Outbound"
        }
      ]
    },
  ];

  return (
    <Sider breakpoint="md" collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.route]} defaultOpenKeys={[router.route.split('/')[1]]}>
        {menus.map((menu, key) => {
          return(
            <Fragment key={key}>
              {!menu.subMenu && <Menu.Item key={menu.path} icon={menu.icon}><Link href={menu.path} shallow={true}><a>{menu.title}</a></Link></Menu.Item>}
              {!!menu.subMenu && (
                <SubMenu key={menu.path} icon={menu.icon} title={menu.title}>
                  {menu.subMenu?.map((sub) => {
                    return(
                      <Menu.Item key={sub.path}><Link href={sub.path} shallow={true}><a>{sub.title}</a></Link></Menu.Item>
                    );
                  })}
                </SubMenu>
              )}
            </Fragment>
          );
        })}
      </Menu>
    </Sider>
  );
});