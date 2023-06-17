import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

import { SidebarProvider } from '@/contexts/SidebarContext';

type Props = {
  background: string;
};

export const Header: React.FC<Props> = ({ background }) => {
  return (
    <SidebarProvider>
      <Desktop background={background} />
      <Mobile />
    </SidebarProvider>
  );
};
