import React from 'react';
import { Result, Button } from 'antd';
import Router from 'next/router';
import { NextSeo } from 'next-seo';

export default function Container() {
  return(
    <React.Fragment>
      <NextSeo title="Michael Fernando Padang - Page Not Found" description="Sorry, the page you visited does not exist." />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={() => Router.push("/")} type="primary">Back Home</Button>} />
    </React.Fragment>
  );
}