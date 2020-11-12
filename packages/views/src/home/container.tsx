import Link from 'next/link';
import { Breadcrumb, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import CardNumber from "./components/card-number";
import { Fragment } from 'react';
import { NextSeo } from 'next-seo';

export default function Container() {
  return(
    <Fragment>
      <NextSeo
        title="Web WMS - Dashboard"
        description="Web WMS - Application that helps you control and manage operations in a warehouse" />
      <Space direction="vertical" size={16} style={{width: "100%"}}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/" shallow={true}><a><HomeOutlined /></a></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <CardNumber />
      </Space>
    </Fragment>
  );
}