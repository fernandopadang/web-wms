import { LandingView, SeoPage } from '@web-wms/views';
import { ServiceSSR } from '@web-wms/helper';

const MyApp = (props: any) => {

  if (props.toSSR) return <SeoPage type="LANDING" />;

  const ProfileJsonLd = () => {
    const website = `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Michael Fernando Padang",
      "url": "http://www.fernandopadang.tech/landing",
      "sameAs": [
        "https://id-id.facebook.com/Michzit",
        "https://www.instagram.com/fernandopadang",
        "https://www.linkedin.com/in/fernandopadang"
      ]
    }
  `;
    return (
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: website }} />
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
