import { LayoutMaster } from '@web-wms/layouts';
import { DashboardView, SeoPage } from '@web-wms/views';
import { ServiceSSR } from '@web-wms/helper';

const MyApp = (props: any) => {

  if (props.toSSR) return <SeoPage type="Dashboard" />;

  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <DashboardView />,
    title: "Dashboard"
  };

  return<LayoutMaster {...PropsLayout} />;
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
