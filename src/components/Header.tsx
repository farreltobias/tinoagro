'use client';

import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={classNames(
        'w-full border-b-[0.5px] border-white border-opacity-50',
        !isHome && background,
      )}
    >
      <div className="container flex max-w-screen-lg items-center justify-between lg:justify-center ">
        <Link href="/" className="m-4 ml-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex">
          {React.Children.toArray(
            items.map((item, index) => (
              <div
                className={`flex items-center justify-center border-r-[0.5px] border-white border-opacity-50 p-[13px] text-center text-[13px] font-semibold text-white last:border-none lg:p-[23px] ${
                  index === items.length - 1 ? 'pr-0' : ''
                }`}
              >
                <Link
                  href={item.href}
                  key={item.label}
                  className="lg:py-[14px]"
                >
                  {item.label}
                </Link>
              </div>
            )),
          )}
        </nav>

        <button
          onClick={toggleMenu}
          className="rounded-md p-2 text-white focus:outline-none focus:ring md:hidden"
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
};
