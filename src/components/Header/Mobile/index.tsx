'use client';

import { Children, useContext, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { screens } from 'tailwindcss/defaultTheme';

import { Hamburguer } from './Hamburguer';
import { Item } from './Item';

import { SidebarContext } from '@/contexts/SidebarContext';
import { useWindowSize } from '@/hooks/useWindowSize';

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

export const Mobile: React.FC<React.PropsWithChildren> = () => {
  const desktopWidth = Number(screens.lg.match(/\d+/g)?.[0]);

  const { show, setShow } = useContext(SidebarContext);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!width) return;

    if (width > desktopWidth) {
      document.body.classList.remove('overflow-hidden');

      setShow(false);
    }
  }, [width, setShow, desktopWidth]);

  return (
    <>
      <Hamburguer />

      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-10 flex overflow-auto bg-blue-darker lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: show ? 0 : '100%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container mb-32 mt-auto flex flex-col gap-8 text-2xl">
              {Children.toArray(
                items.map(({ label, href }) => (
                  <Item href={href}>{label}</Item>
                )),
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
