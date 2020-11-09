import { Fragment, memo } from 'react';
import { Layout, Menu, Avatar, Popover, List, Badge } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, RightOutlined, BellOutlined } from '@ant-design/icons';

interface DefaultProps{
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default memo((props: DefaultProps) => {
  const { collapsed, setCollapsed } = props;
  const { Header } = Layout;
  const { SubMenu } = Menu;
  const notifications = [
    {
      title: "pertama",
      description: "description pertama"
    }
  ];
  const rightContent = [
    <Menu key="user" mode="horizontal">
      <SubMenu
        title={
          <Fragment>
            <span style={{ color: '#999', marginRight: 4 }}>Hi,</span>
            <span>Michael</span>
            <Avatar style={{ marginLeft: 8, width: "32px" }} src={"https://lh3.googleusercontent.com/ogw/ADGmqu9EtxdU1RQ46zDdB9pCeFwt8i7IpZ8llQxtffS7=s64-c-mo"} />
          </Fragment>
        }
      >
        <Menu.Item key="SignOut">Sign out</Menu.Item>
      </SubMenu>
    </Menu>,
  ];
  rightContent.unshift(
    <Popover
      placement="bottomRight"
      trigger="click"
      key="notifications"
      overlayClassName="notificationPopover"
      content={
        <div className="notification">
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            locale={{emptyText: <span>You have viewed all notifications.</span>}}
            renderItem={item => (
              <List.Item className="notificationItem">
                <List.Item.Meta
                  title={<h3>{item.title}</h3>}
                  description={item.description} />
                <RightOutlined style={{ fontSize: 10, color: '#ccc' }} />
              </List.Item>
            )}
          />
          {notifications.length ? (
            <div
              onClick={() => notifications.splice(0, 1)}
              className="clearButton"
            >
              <span>Clear notifications</span>
            </div>
          ) : null}
        </div>
      }
    >
      <Badge
        count={notifications.length}
        dot={true}
        offset={[-10, 10]}
        className="iconButton"
      >
        <BellOutlined className="iconFont" />
      </Badge>
    </Popover>
  );
  return(
    <Header className="section-header">
      {collapsed ? <MenuUnfoldOutlined className="button-collapse" onClick={() => setCollapsed(!collapsed)} /> : <MenuFoldOutlined className="button-collapse" onClick={() => setCollapsed(!collapsed)} />}
      <div className="right-container">{rightContent}</div>
    </Header>
  );
});