import { LayoutMaster } from '@web-wms/layouts';
import { CategoryView } from '@web-wms/views';

interface DefaultProps { isMobile: boolean; }

export default function CategoryPages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <CategoryView />,
    title: "Stock Outbound"
  };
  return <LayoutMaster {...PropsLayout} />;
}
