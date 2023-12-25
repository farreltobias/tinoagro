'use client';

import React, { useCallback, useContext, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@public/logo.svg';

import { classNames } from '@/utils/classNames';
// import { SidebarContext } from '@/contexts/SidebarContext';
import useScrollPosition from '@/hooks/useScrollPosition';

const items = [
  {
    label: 'Nosso propósito',
    href: '/#about',
  },
  {
    label: 'O que resolvemos',
    href: '/#informations',
  },
  {
    label: 'Nossos produtos',
    href: '/#solutions',
  },
  {
    label: 'Resultados',
    href: '/#results',
  },
  {
    label: 'Contato',
    href: '/#contact',
  },
];

type Props = {
  background: string;
};

export const Header: React.FC<Props> = ({ background }) => {
  const isHome = usePathname() === '/';

  // const { show, setShow } = useContext(SidebarContext);
  const [show, setShow] = useState(false);
  const scrollPosition = useScrollPosition();

  const toggleMenu = useCallback(() => {
    const documentHTML = document.getElementsByTagName('html')[0];

    if (!show) {
      documentHTML.style.overflow = 'hidden';
      documentHTML.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      documentHTML.removeAttribute('style');
    }

    setShow(!show);
  }, [show, setShow]);

  return (
    <header
      className={classNames(
        `fixed w-full md:border-b-[0.5px] md:border-white md:border-opacity-50 z-50`,
        !(isHome && scrollPosition < 100) && background,
      )}
    >
      <div className="container relative flex max-w-screen-lg items-center justify-center md:justify-between lg:justify-center ">
        <Link href="/" className="h-24 md:h-20 lg:h-24 mx-4 flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex">
          {React.Children.toArray(
            items.map((item, index) => (
              <div
                className={`flex items-center justify-center border-r-[0.5px] border-white border-opacity-50 p-[13px] text-center text-[13px] font-semibold text-white last:border-none h-20 lg:h-24 lg:p-[23px] ${
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
          className="absolute right-[5%] top-[27%] rounded-md p-2 text-white focus:outline-none focus:ring sm:top-[15%] md:hidden"
        >
          {show ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {show && (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-full flex-col overflow-y-auto bg-[#000D52]">
          <div className="relative flex w-full items-center justify-center">
            <Link href="/" className="mb-8 ml-0 mt-8 sm:mt-16 md:m-4">
              <Logo />
            </Link>
            <button
              onClick={toggleMenu}
              className="absolute right-[5%] top-[27%] rounded-md p-2 text-white focus:outline-none focus:ring sm:top-[15%] md:hidden"
            >
              {show ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          <nav className="h-full w-full flex-grow py-20">
            <ul className="flex w-full flex-col items-start justify-center gap-10">
              {items.map((item) => (
                <div className="flex w-full items-center gap-8">
                  <div className="h-[2px] w-8 bg-[#40C851] "></div>

                  <Link
                    href={item.href}
                    key={item.label}
                    onClick={()=>toggleMenu()}
                    className="text-2xl font-bold text-white"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
