import { LandingView, SeoPage } from '@web-wms/views';
import { ServiceSSR } from '@web-wms/helper';
import { SocialProfileJsonLd } from 'next-seo';

const MyApp = (props: any) => {

  if (props.toSSR) return <SeoPage type="LANDING" />;

  const ProfileJsonLd = () => {
    return(
      <SocialProfileJsonLd
        type="Person"
        name="Michael Fernando Padang"
        url="http://www.fernandopadang.tech/landing"
        sameAs={[
          'https://id-id.facebook.com/Michzit',
          'https://www.instagram.com/fernandopadang',
          'https://www.linkedin.com/in/fernandopadang',
        ]}
      />
    );
  };

  const PropsLayout = {
    isMobile: props.isMobile,
    title: "Landing"
  };
  return <><ProfileJsonLd /><LandingView {...PropsLayout} /></>;
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
