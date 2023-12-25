import React from 'react';
import Image from 'next/image';

import grass from '@public/grass.png';

export const Grass: React.FC = () => {
  return (
    <div className="relative flex w-full flex-col bg-gray pt-20 sm:pt-60 overflow-auto md:overflow-hidden">
      <div className="absolute bottom-8 left-[22.5%] z-10 h-24 md:h-32 w-[1px] items-center bg-green">
        <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-green" />
        <p className="absolute -left-4 -top-[65%] md:-top-[53%] w-24 text-sm font-bold text-blue-dark xs:-top-10 xs:text-xs xs:font-normal ">
          Alto potencial de lucro
        </p>
      </div>

      <div className="absolute bottom-8 left-[400px] md:left-[32%] z-10 h-20 w-[1px] items-center bg-green flex">
        <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-green" />
        <p className="absolute -left-4 -top-20 xs:-top-10 w-24 text-sm font-bold text-blue-dark xs:text-xs xs:font-normal">
          Redução de 5% com insumos
        </p>
      </div>

      <div className="absolute bottom-8 left-[750px] md:left-[50%] z-10 h-32 w-[1px] items-center bg-green flex">
        <div className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 rounded-full bg-green" />
        <p className="absolute -left-4 -top-10 w-24 text-sm font-bold text-blue-dark xs:text-xs xs:font-normal">
          Previsibilidade de renda
        </p>
      </div>

      <div className="absolute bottom-8 left-[1024px] md:left-2/3 z-10 h-20 w-[1px] items-center bg-black sm:left-[76%]">
        <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-black" />
        <p className="absolute -left-4 -top-10 w-24 text-sm font-bold text-blue-dark xs:text-xs xs:font-normal">
          Viabilidade técnica
        </p>
      </div>

      <div className="md:flex hidden">
        {React.Children.toArray(
          Array.from({ length: 10 }).map(() => (
            <>
              <Image src={grass} alt="grass" className="h-32" />
              <Image src={grass} alt="grass" className="h-32 scale-x-[-1]" />
            </>
          )),
        )}
      </div>
      <div className="flex md:hidden">
        {React.Children.toArray(
          Array.from({ length: 2 }).map(() => (
            <>
              <Image src={grass} alt="grass" className="h-32" />
              <Image src={grass} alt="grass" className="h-32 scale-x-[-1]" />
            </>
          )),
        )}
      </div>
    </div>
  );
};
