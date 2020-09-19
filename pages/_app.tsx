interface PropsMyApp {
  Component: any;
  pageProps: any;
  router: any;
}

const MyApp = (props: PropsMyApp) => {
  const { Component, pageProps, router} = props;
  return <Component {...pageProps} />;
};

export default MyApp;
