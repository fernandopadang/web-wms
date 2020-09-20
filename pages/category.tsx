import { LayoutMaster } from '@web-next/layouts';
import dynamic from 'next/dynamic';
const CategoryDesktop = dynamic(() => import('@web-next/views/src/category/dekstop'));
const CategoryMobile = dynamic(() => import('@web-next/views/src/category/mobile'));
// import { CategoryDesktop, CategoryMobile } from '@web-next/views';

interface DefaultProps { isMobile: boolean; }

export default function CategoryPages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <CategoryDesktop />,
    mobileView: <CategoryMobile />
  };
  return <LayoutMaster {...PropsLayout} />;
}
