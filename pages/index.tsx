import { LayoutMaster } from '@web-wms/layouts';
import { HomeView } from '@web-wms/views';
import { NextSeo } from 'next-seo';
import Style from "../public/icon-finder.png";

interface DefaultProps { isMobile: boolean; }

export default function HomePages(props: DefaultProps) {
  const OG = () => {
    return(
      <NextSeo
          openGraph={{
            type: 'website',
            title: "Web WMS",
            description: "Web WMS - Application that helps you control and manage operations in a warehouse",
            images: [{ url: "../public/icon-finder.png", alt: "Logo Web WMS"}
            ],
          }}
        />
    );
  };
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <><OG /><HomeView /></>,
    title: "Dashboard"
  };
  return <LayoutMaster {...PropsLayout} />;
}
