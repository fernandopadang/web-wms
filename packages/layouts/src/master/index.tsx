import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

interface DefaultProps {
  isMobile: boolean;
  desktopView?: React.ReactNode;
  mobileView?: React.ReactNode;
}

const Page: NextPage<DefaultProps> = (props) => {
  const { isMobile, desktopView, mobileView } = props;
  const PageMobileView = mobileView || <div>error page mobile</div>;
  const PageDesktopView = desktopView || <div>error page desktop</div>;

  return (
    <React.Fragment>
      <Head>
        <title key="title">Web Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="author" content="Web Next"/>
        <meta httpEquiv="content-language" content="id-id" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? PageMobileView : PageDesktopView}
    </React.Fragment>
  );
};

export default Page;