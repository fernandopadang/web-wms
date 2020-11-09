import React, { useState, useCallback } from 'react';
import './style.css';
import { Layout } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/header';
import SiderMenu from './components/sider-menu';

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

  return (
    <React.Fragment>
      <Head>
        <title key="title">Web WMS - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="author" content="Web Next"/>
        <meta httpEquiv="content-language" content="id-id" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="layout">
        <SiderMenu collapsed={collapsed} setCollapsed={useCallback((status: boolean) => setCollapsed(status), [])} />
        <Layout className="site-layout">
          <Header collapsed={collapsed} setCollapsed={useCallback((status: boolean) => setCollapsed(status), [])} />
          <Content className="content">
            {PageDesktopView}
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Page;