import { Form, Input, Button, Checkbox, Row, Col, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./style.less";
import { NextSeo } from 'next-seo';

const LoginView = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row align="middle" className="fullHeight">
      <NextSeo title="Michael Fernando Padang - Login Page" description="Login Page" />
      <Col md={8} xs={16} lg={6}>
        <img src="https://i.ibb.co/0QF0bwB/LOGO-WEBSITE-4.png" alt="Logo Login Page" width="100%" />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle={true}>
              <Checkbox className="checkbox-remember">Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Space size={16} direction="vertical" className="fullWidth">
              <Button type="primary" htmlType="submit" className="login-form-button" block={true}>
                Log in
              </Button>
              <Button type="primary" htmlType="submit" className="login-form-button" block={true}>
                Request Account
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginView;