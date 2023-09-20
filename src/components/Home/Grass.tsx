import Image from 'next/image';

import grass from '@public/grass.png';

export const Grass: React.FC = () => {
  return (
    <div className="relative flex w-full flex-col bg-gray pt-60">
      <div className="absolute bottom-8 left-[22.5%] z-10 h-32 w-[1px] items-center bg-green">
        <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-green" />
        <p className="absolute -left-4 -top-[53%] w-24 text-sm font-bold text-blue-dark xs:-top-10 xs:text-xs xs:font-normal ">
          Alto potencial de lucro
        </p>
      </div>

      <div className="absolute bottom-8 left-[32%] z-10 hidden h-20 w-[1px] items-center bg-green xs:flex">
        <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-green" />
        <p className="absolute -left-4 -top-10 w-24 text-xs">
          Redução de 5% com insumos
        </p>
      </div>

      <div className="absolute bottom-8 left-[50%] z-10 hidden h-32 w-[1px] items-center bg-green xs:flex">
        <div className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 rounded-full bg-green" />
        <p className="absolute -left-4 -top-10 w-24 text-xs">
          Previsibilidade de renda
        </p>
      </div>

      <div className="absolute bottom-8 left-[76%] z-10 h-20 w-[1px] items-center bg-black">
        <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-black" />
        <p className="absolute -left-4 -top-10 w-24 text-sm font-bold text-blue-dark xs:text-xs xs:font-normal ">
          Viabilidade técnica
        </p>
      </div>

      <div className="flex overflow-hidden">
        {Array.from({ length: 10 }).map(() => (
          <>
            <Image src={grass} alt="grass" className="h-32" />
            <Image src={grass} alt="grass" className="h-32 scale-x-[-1]" />
          </>
        ))}
      </div>
    </div>
  );
};
