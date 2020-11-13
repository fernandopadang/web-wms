import { LandingView, SeoPage } from '@web-wms/views';
import { ServiceSSR } from '@web-wms/helper';

const MyApp = (props: any) => {

  if (props.toSSR) return <SeoPage type="LANDING" />;

  const PropsLayout = {
    isMobile: props.isMobile,
    title: "Landing"
  };
  return <LandingView {...PropsLayout} />;
};

MyApp.getInitialProps = async (props : { query: any, req: any }) => {
  const { req } = props;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const toSSR = ServiceSSR.checkUserAgent(userAgent);
  return {
    toSSR
  };
};

export default MyApp;
