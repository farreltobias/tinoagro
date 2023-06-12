'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@public/logo.svg';

import { classNames } from '@/utils/classNames';

const items = [
  {
    label: 'Nosso propósito',
    href: '/',
  },
  {
    label: 'o que resolvemos',
    href: '/',
  },
  {
    label: 'nossos produtos',
    href: '/',
  },
  {
    label: 'resultados',
    href: '/',
  },
  {
    label: 'contato',
    href: '/',
  },
];

type Props = {
  background: string;
};

export const Header: React.FC<Props> = ({ background }) => {
  const isHome = usePathname() === '/';

  return (
    <header
      className={classNames(
        'flex items-center justify-center border-b-[0.5px] border-white border-opacity-50 text-sm text-white',
        !isHome && background,
      )}
    >
      <Link href="/" className="m-4">
        <Logo />
      </Link>
      <nav className="flex">
        {React.Children.toArray(
          items.map((item) => (
            <div className="border-r-[0.5px] border-white border-opacity-50 p-8 last:border-none">
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            </div>
          )),
        )}
      </nav>
    </header>
  );
};
