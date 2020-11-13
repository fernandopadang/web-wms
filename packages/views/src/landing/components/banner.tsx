import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';

interface DefaultProps {
  dataSource: {
    wrapper: {
      className: string;
    };
    textWrapper: {
      className: string;
      children: ({
          name: string;
          className: string;
          children: string | JSX.Element;
          texty?: boolean;
      })[];
    };
  };
  id: string;
  key: string;
  isMobile: boolean;
}

export default (props: DefaultProps) => {
  const { dataSource } = props;
  const children = dataSource.textWrapper.children.map((item) => {
    const { name, texty, ...$item } = item;
    return (
      <div key={name} {...$item}>
        {texty ? <Texty type="mask-bottom">{item.children.toString()}</Texty> : item.children}
      </div>
    );
  });
  return (
    <div {...props} {...dataSource.wrapper}>
      <QueueAnim key="QueueAnim" type={['bottom', 'top']} delay={200} {...dataSource.textWrapper}>
        {children}
      </QueueAnim>
    </div>
  );
};
