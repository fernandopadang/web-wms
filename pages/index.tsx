import { LayoutMaster } from '@web-next/layouts';
import dynamic from 'next/dynamic';
const HomeDesktop = dynamic(() => import('@web-next/views/src/home/dekstop'));
const HomeMobile = dynamic(() => import('@web-next/views/src/home/mobile'));
// import { HomeDesktop, HomeMobile } from '@web-next/views';

interface DefaultProps { isMobile: boolean; }

export default function HomePages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <HomeDesktop />,
    mobileView: <HomeMobile />
  };
  return <LayoutMaster {...PropsLayout} />;
}
