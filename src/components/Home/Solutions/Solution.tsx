import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

import { motion, Variants } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  detailsHref: Url;
};

const variants = {
  initial: {
    flex: '1 1 25%',
    // backgroundColor: 'transparent',
    // height: '20rem',
    paddingBottom: '1.5rem',
    paddingTop: '4rem',
    color: '#fff',
    minWidth: '12.8125rem',
  },
  hover: {
    flex: '1 1 27.5%',
    backgroundColor: 'white',
    paddingBottom: '3rem',
    paddingTop: '5rem',
    color: '#4F4F4F',
  },
} satisfies Variants;

const titleVariants = {
  initial: {
    color: '#fff',
  },
  hover: {
    color: '#15157E',
  },
};

export const Solution: React.FC<Props> = ({
  description,
  title,
  detailsHref,
}) => {
  return (
    <motion.li
      variants={variants}
      initial="initial"
      whileHover="hover"
      className="
      rounded-2xl bg-gradient-to-tr from-[rgba(255,255,255,0.17)] from-[-15%] via-[rgba(25,70,73,0.17)] via-65% to-[rgba(10,19,70,0.17)] to-95% p-6"
    >
      <section className="flex h-full flex-col gap-6 text-xs">
        <header className="flex w-[72.5%] flex-col gap-1">
          <motion.h1
            variants={titleVariants}
            className="h-16 text-xl font-bold md:text-2xl"
          >
            {title}
          </motion.h1>
          <h2 className="order-first text-green">Tinoagro</h2>
        </header>
        <p className="h-[7rem] w-11/12">{description}</p>
        <footer className="mt-auto">
          <Link href={detailsHref} className="font-semibold">
            + <span className="text-green">Detalhes</span>
          </Link>
        </footer>
      </section>
    </motion.li>
  );
};
