import { LayoutMaster } from '@web-wms/layouts';
import { VendorView } from '@web-wms/views';

interface DefaultProps { isMobile: boolean; }

export default function CategoryPages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <VendorView />,
    title: "Category"
  };
  return <LayoutMaster {...PropsLayout} />;
}