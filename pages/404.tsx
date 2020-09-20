import { LayoutMaster } from '@web-next/layouts';
import dynamic from 'next/dynamic';
const ErrorDesktop = dynamic(() => import('@web-next/views/src/error/dekstop'));
const ErrorMobile = dynamic(() => import('@web-next/views/src/error/mobile'));
// import { ErrorDesktop, ErrorMobile } from '@web-next/views';

interface DefaultProps { isMobile: boolean; }

export default function ErrorPages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <ErrorDesktop />,
    mobileView: <ErrorMobile />
  };
  return <LayoutMaster {...PropsLayout} />;
}
