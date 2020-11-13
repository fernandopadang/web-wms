import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Link } from 'rc-scroll-anim';
import Router from 'next/router';

interface DefaultProps {
  dataSource: {
    isScrollLink: boolean;
    wrapper: {
      className: string;
    };
    page: {
      className: string;
    };
    logo: {
      className: string;
      children: string;
    };
    LinkMenu: {
      className: string;
      children: {
          name: string;
          to: string;
          children: string;
          className: string;
      }[];
    };
    mobileMenu: {
        className: string;
    };
  };
  isMobile: boolean;
  id: string;
  key: string;
}

const SectionNav = (props: DefaultProps) => {
  const [phoneOpen, setOpenPhone] = useState(false);
  const { dataSource, isMobile } = props;
  const { LinkMenu } = dataSource;
  const navData = LinkMenu.children;
  const redirect = (url: string) => Router.push(url);
  const navChildren = Object.keys(navData).map((i, key) => {
    const item = navData[key];
    const tag = Link;
    const tagProps: {href?: any} = {};
    if (item.to && item.to.match(/\//g)) {
      tagProps.href = item.to;
    }
    return React.createElement(
      tag,
      { ...item, ...tagProps, key: i.toString(), onClick: () => redirect("/login") },
      navData[key].children
    );
  });
  const moment = phoneOpen === undefined ? 300 : undefined;
  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...dataSource.wrapper}
      {...props}
    >
      <div {...dataSource.page} className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}>
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          {...dataSource.logo}
        >
          <img width="100%" src={dataSource.logo.children} alt="img" />
        </TweenOne>
        {isMobile && (
          <div {...dataSource.mobileMenu} onClick={() => setOpenPhone(!phoneOpen)}>
            <em />
            <em />
            <em />
          </div>
        )}
        <TweenOne
          {...LinkMenu}
          animation={isMobile ? { height: 0, duration: 300, ease: 'easeInOutQuad' } : {}}
          moment={moment}
          reverse={!!phoneOpen}>
          {navChildren}
        </TweenOne>
      </div>
    </TweenOne>
  );
};

export default SectionNav;
