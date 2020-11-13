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
        children?: React.ReactElement;
        className: string;
    };
    content: {
        children?: React.ReactElement;
        className: string;
    };
  };
  isMobile: boolean;
  id: string;
  key: string;
}

const SectionFeature = (props: DefaultProps) => {
  const { dataSource, isMobile } = props;
  const animationQueue = isMobile ? 'bottom' : 'left';
  const img = (
    <TweenOne
      key="img"
      animation={isMobile
        ? {
            scaleY: '+=0.3',
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }
        : {
            x: '+=30',
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
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
  );
  return (
    <div {...props} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        {isMobile && img}
        <QueueAnim
          type={animationQueue}
          key="text"
          leaveReverse={true}
          ease={['easeOutCubic', 'easeInCubic']}
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
        {!isMobile && img}
      </OverPack>
    </div>
  );
};

export default SectionFeature;
