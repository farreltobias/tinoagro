import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  item: {
    id: number;
    title: string;
    description: string;
  };
}

const AccordionComponent = ({ item: { id, title, description } }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded bg-[#09165F] px-5 py-6" key={id}>
      <div
        className="flex cursor-pointer items-center"
        onClick={toggleAccordion}
      >
        <motion.span
          className="mr-2 text-green"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
        <h3 className="font-bold text-white">{title}</h3>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: isOpen ? 'auto' : 0, marginTop: 36 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-3 text-sm font-medium text-[#FCFCFC]">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionComponent;
