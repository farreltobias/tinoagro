import { useContext } from 'react';
import Link, { LinkProps } from 'next/link';

import { SidebarContext } from '@/contexts/SidebarContext';

type Props = React.PropsWithChildren<LinkProps>;

export const Item: React.FC<Props> = ({ children, ...props }) => {
  const { setShow } = useContext(SidebarContext);

  return (
    <li>
      <Link
        {...props}
        onClick={() => {
          document.body.classList.remove('overflow-hidden');
          setShow(false);
        }}
        className="flex items-center gap-4 text-white"
      >
        <div className="h-[2px] w-3 bg-green" />
        {children}
      </Link>
    </li>
  );
};
