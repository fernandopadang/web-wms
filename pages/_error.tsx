import { LayoutMaster } from '@web-wms/layouts';
import { ErrorView } from '@web-wms/views';

interface DefaultProps { isMobile: boolean; }

export default function ErrorPages(props: DefaultProps) {
  const PropsLayout = {
    isMobile: props.isMobile,
    desktopView: <ErrorView />
  };
  return <ErrorView  />;
}
