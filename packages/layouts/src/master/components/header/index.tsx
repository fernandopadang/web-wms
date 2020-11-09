import { memo, useCallback } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

interface DefaultProps{
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default memo((props: DefaultProps) => {
  const { collapsed, setCollapsed } = props;
  const { Header } = Layout;
  return(
    <Header className="site-header">
      {collapsed ? <MenuUnfoldOutlined className="button-collapse" onClick={() => setCollapsed(!collapsed)} /> : <MenuFoldOutlined className="button-collapse" onClick={() => setCollapsed(!collapsed)} />}
    </Header>
  );
});