import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Table, Tag, Space, Button, Typography, Breadcrumb } from 'antd';
import { EditOutlined, DeleteOutlined, HomeOutlined } from '@ant-design/icons';

export default memo(() => {
  const { Text } = Typography;
  const router = useRouter();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <Text strong={true}>{text}</Text>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any)  => (
        <span>
          {tags.map((tag: any)  => {
            let color =  'geekblue';
            if (tag === 'premium') {
              color = 'volcano';
            }
            else if (tag === 'ultimate') {
              color = 'orange';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button type="primary" size="small" icon={<EditOutlined />}>update</Button>
          <Button type="primary" danger={true} size="small" icon={<DeleteOutlined />}>delete</Button>
        </Space>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(
      {
        key: `${i}1`,
        name: 'John Brown',
        age: `${i} - 32`,
        address: 'New York No. 1 Lake Park',
        tags: ['standard'],
      },
      {
        key: `${i}2`,
        name: 'Jim Green',
        age: `${i} - 42`,
        address: 'London No. 1 Blue Park',
        tags: ['premium'],
      },
      {
        key: `${i}3`,
        name: 'Joe Black',
        age: `${i} - 25`,
        address: 'Londo No. 1 Green Park',
        tags: ['premium', 'ultimate'],
      },
    );
  }
  return(
    <Space direction="vertical" size={16} style={{width: "100%"}}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/" shallow={true}><a><HomeOutlined /></a></Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Vendor</Breadcrumb.Item>
      </Breadcrumb>
      <Table
          columns={columns}
          pagination={{ position: ["bottomRight"], total: data.length, pageSize: 10, defaultCurrent: 1, responsive: true, hideOnSinglePage: true }}
          dataSource={data} />
    </Space>
  );
});