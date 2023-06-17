import { useCallback, useContext } from 'react';
import Link from 'next/link';

import { motion, Transition, Variants } from 'framer-motion';

import Logo from '@public/logo.svg';

import { SidebarContext } from '@/contexts/SidebarContext';

const topVariants: Variants = {
  open: {
    rotate: 45,
    marginBottom: 13,
  },
  closed: {
    rotate: 0,
    marginBottom: 4,
  },
};

const middleVariants: Variants = {
  open: {
    height: 0,
  },
  closed: {
    height: 4,
  },
};

const bottomVariants: Variants = {
  open: {
    rotate: -45,
  },
  closed: {
    rotate: 0,
  },
};

const transition: Transition = {
  backgroundColor: { duration: 0.2 },
  rotate: { type: 'spring', stiffness: 500, damping: 20 },
  marginBottom: { duration: 0.2 },
  height: { duration: 0.15 },
};

export const Hamburguer: React.FC = () => {
  const { show, setShow } = useContext(SidebarContext);

  const handleClick = useCallback(() => {
    document.body.classList.toggle('overflow-hidden');
    setShow(!show);
  }, [setShow, show]);

  return (
    <div className="absolute z-20 flex w-full px-9 py-16">
      <Link href="/" className="mx-auto">
        <Logo />
      </Link>

      <button
        aria-label="Abrir menu de navegação"
        onClick={handleClick}
        className="absolute right-9 flex flex-col items-center justify-center lg:hidden"
      >
        <motion.div
          className="h-1 w-8 origin-top-left bg-white"
          transition={transition}
          variants={topVariants}
          initial="closed"
          animate={show ? 'open' : 'closed'}
        />
        <motion.div
          className="mb-1 w-8 bg-white"
          transition={transition}
          variants={middleVariants}
          initial="closed"
          animate={show ? 'open' : 'closed'}
        />
        <motion.div
          className="h-1 w-8 origin-bottom-left bg-white"
          transition={transition}
          variants={bottomVariants}
          initial="closed"
          animate={show ? 'open' : 'closed'}
        />
      </button>
    </div>
  );
};
