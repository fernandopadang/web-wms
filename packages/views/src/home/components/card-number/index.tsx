import { memo } from 'react';
import { Row, Col, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import CountUp from 'react-countup';
import './style.css';

export default memo(() => {
  const numbers = [
    {
      title: "Vendor",
      number: 2781
    },
    {
      title: "Customer",
      number: 10938
    },
    {
      title: "Product",
      number: 99871
    },
    {
      title: "Warehouse",
      number: 209
    },
  ];
  return(
    <Row gutter={[16, 16]}>
      {numbers.map((item: {title: string, number: number}, key) => {
        return(
          <Col xs={6} key={key}>
            <Card bordered={false}>
              <div className="card-content">
                <span className="icon-warp"><UserOutlined style={{color: blue.primary}} /></span>
                <p className="title">{item.title}</p>
                <p className="number">
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.75}
                    useEasing={true}
                  />
                </p>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
});