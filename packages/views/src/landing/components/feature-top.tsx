import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

interface DefaultProps {
  dataSource: {
    wrapper: {
        className: string;
    };
    OverPack: {
        className: string;
        playScale: number;
    };
    imgWrapper: {
        className: string;
        md: number;
        xs: number;
    };
    img: {
        children: string;
    };
    textWrapper: {
        className: string;
        md: number;
        xs: number;
    };
    title: {
      className: string;
      children: React.ReactElement;
    };
    content: {
      className: string;
      children: React.ReactElement;
    };
  };
  isMobile: boolean;
  id: string;
  key: string;
}

function Content1(props: DefaultProps) {
  const { dataSource, isMobile } = props;

  const queue = isMobile ? 'bottom' : 'right';
  return (
    <div {...props} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        <TweenOne
          key="img"
          animation={isMobile ? { scaleY: '+=0.3', opacity: 0, type: 'from', ease: 'easeOutQuad' } : { x: '-=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          resetStyle={true}
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{
            md: dataSource.imgWrapper.md,
            xs: dataSource.imgWrapper.xs,
          }}
        >
          <span {...dataSource.img}>
            <img src={dataSource.img.children} width="100%" alt="img" />
          </span>
        </TweenOne>
        <QueueAnim
          key="text"
          type={queue}
          leaveReverse={true}
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Content1;
