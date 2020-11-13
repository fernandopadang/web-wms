import React, { useState, useLayoutEffect } from 'react';
import './style.less';
import { Layout } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/header';
import SiderMenu from './components/sider-menu';
import { ErrorView } from '@web-wms/views';
import '../../../../public/scss/app.less';

interface DefaultProps {
  isMobile: boolean;
  desktopView?: React.ReactNode;
  mobileView?: React.ReactNode;
  title?: string;
}

const Page: NextPage<DefaultProps> = (props) => {
  const { isMobile, desktopView, mobileView, title } = props;
  const PageDesktopView = desktopView || <div>error page desktop</div>;
  const { Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useLayoutEffect(() => {
    if (localStorage.getItem("cekicekilogin") === "MasuK") {
      setIsLogin(true);
    }
  }, []);

  if (isLogin) {
    return (
      <React.Fragment>
        <Head>
          <title key="title">Web WMS - {title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
          <meta name="author" content="Web WMS"/>
          <meta httpEquiv="content-language" content="id-id" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout className="layout">
          <SiderMenu collapsed={collapsed} setCollapsed={(status: boolean) => setCollapsed(status)} />
          <Layout className="site-layout">
            <Header collapsed={collapsed} setCollapsed={(status: boolean) => setCollapsed(status)} />
            <Content className="content">
              {PageDesktopView}
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
  return <ErrorView />;
};

export default Page;