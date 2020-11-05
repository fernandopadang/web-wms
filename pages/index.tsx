import { LayoutMaster } from '@web-wms/layouts';
import { HomeView } from '@web-wms/views';

interface DefaultProps { isMobile: boolean; }

export default function HomePages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <HomeView />
  };
  return <LayoutMaster {...PropsLayout} />;
}
