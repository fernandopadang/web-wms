import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../script/utils';

interface DefaultProps{
  dataSource: {
    wrapper: {
      className: string;
    };
    page: {
      className: string;
    };
    OverPack: {
      playScale: number;
      className: string;
    };
    titleWrapper: {
      className: string;
      children: TitleChildrenWrapper[];
    };
    block: {
      className: string;
      gutter: number;
      children: BlockChildrenProps[];
    };
  };
  isMobile: boolean;
  id: string;
  key: string;
}

interface TitleChildrenWrapper {
  name: string;
  children: React.ReactElement | string;
  className: string;
}

interface BlockChildrenProps {
  name: string;
  className: string;
  md: number;
  xs: number;
  children: {
    wrapper: {
      className: string;
    };
    img: {
      children: string;
      className: string;
    };
    content: {
      children: JSX.Element;
      className: string;
    }
  };
}

const SectionContent = (props: DefaultProps) => {
  const getChildrenToRenderLoc = (data: BlockChildrenProps[]) => {
    return(
      <Fragment>
        {data?.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <a {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </a>
        </Col>
      );
    })}
      </Fragment>
    );
  };
  const { dataSource } = props;
  const childrenToRender = getChildrenToRenderLoc(
    dataSource.block.children
  );
  return (
    <div {...props} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <TweenOneGroup
            component={Row}
            key="ul"
            enter={{
              y: '+=30',
              opacity: 0,
              type: 'from',
              ease: 'easeInOutQuad',
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
            {...dataSource.block}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    </div>
  );
};

export default SectionContent;
