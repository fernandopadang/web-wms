import MobileDetect from 'mobile-detect';
import 'antd/dist/antd.css';

interface PropsMyApp {
  Component: any;
  pageProps: any;
  router: any;
}
interface PropsInitial {
  Component: any;
  ctx: any;
}

const MyApp = (props: PropsMyApp) => {
  const { Component, pageProps, router} = props;
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (props: PropsInitial) => {
  const { Component, ctx} = props;
  const userAgent: string = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent ;
  const md = new MobileDetect(userAgent);
  const isMobile : boolean = (md.mobile()) !== null;
  let pageProps : any;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps = {...pageProps, isMobile};
  return { pageProps };
};

export default MyApp;
