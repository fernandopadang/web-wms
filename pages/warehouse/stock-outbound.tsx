import { LayoutMaster } from '@web-wms/layouts';
import { StockOutboundView } from '@web-wms/views';

interface DefaultProps { isMobile: boolean; }

export default function CategoryPages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <StockOutboundView />,
    title: "Stock Outbound"
  };
  return <LayoutMaster {...PropsLayout} />;
}
