import Link from 'next/link';
import { Breadcrumb, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import CardNumber from "./components/card-number";

export default function Container() {
  return(
    <Space direction="vertical" size={16} style={{width: "100%"}}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/" shallow={true}><a><HomeOutlined /></a></Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <CardNumber />
    </Space>
  );
}