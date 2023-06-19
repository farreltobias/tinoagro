import React from 'react';

import { motion } from 'framer-motion';

type Props = {
  item: {
    title: string;
    submenus: string[];
  };
};

const CardModulos = ({ item }: Props) => {
  return (
    <motion.div
      className="hover:bg-gray-800 flex w-full max-w-xs flex-col rounded-xl bg-white p-4 py-11 pl-7 pr-4 shadow"
      whileHover={{ backgroundColor: '#F5F5F5' }}
    >
      <div className="mb-4 h-1 w-9 bg-green"></div>
      <h3 className="mb-3 text-base font-bold text-[#09165F]">{item.title}</h3>
      <ul className="list-inside list-disc">
        {item.submenus.map((submenu) => (
          <li
            className="text-sm font-medium text-[#333333] hover:text-black"
            key={submenu}
          >
            {submenu}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CardModulos;
