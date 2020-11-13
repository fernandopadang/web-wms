import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

interface DefaultProps{
  dataSource: {
    wrapper: {
      className: string;
    };
    OverPack: {
      className: string;
      playScale: number;
    };
    copyright: {
      className: string;
      children: JSX.Element;
    };
  };
  isMobile: boolean;
  key: string;
  id: string;
}

const SectionFooter = (props: DefaultProps) => {
  const { dataSource } = props;
  return (
    <div {...props} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack}>
        <TweenOne animation={{ y: '+=30', opacity: 0, type: 'from' }} key="footer" {...dataSource.copyright}>
          {dataSource.copyright.children}
        </TweenOne>
      </OverPack>
    </div>
  );
};

export default SectionFooter;
