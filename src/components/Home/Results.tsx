import React from 'react';
import Image from 'next/image';

import Arrow from '@public/results-arrow.svg';

import grass from '@public/grass-drawing.png';

const results = [
  {
    title: 'Aumento de 10%',
    description:
      'na acuracidade das previsões de safra com a utilização das soluções de análise de dados da Tinoagro;',
  },
  {
    title: 'Aumento de 5%',
    description: 'na rentabilidade das fazendas monitoradas pela Tinoagro;',
  },
  {
    title: 'Aumento de 10%',
    description:
      'na acuracidade das previsões de safra com a utilização das soluções de análise de dados da Tinoagro;',
  },
  {
    title: 'Aumento de 30%',
    description:
      'na eficiência do uso de recursos hídricos com a utilização das soluções de monitoramento de irrigação da Tinoagro;',
  },
];

export const Results: React.FC = () => {
  return (
    <div className="container mt-6 flex max-w-screen-lg flex-col gap-10 lg:gap-20">
      <div className="flex flex-col gap-8">
        <div className="h-3 w-3 rounded-full bg-green" />
        <h2 className="w-1/3 text-2xl font-bold leading-snug sm:text-4xl">
          Nossos resultados
        </h2>
      </div>

      <div className="relative flex flex-col items-center gap-20 lg:flex-row lg:gap-44">
        <Image src={grass} alt="grass" className="w-52 object-contain" />
        <Arrow className="absolute left-40  hidden lg:flex" />

        <ul className="flex w-full gap-10 lg:w-auto">
          {React.Children.toArray(
            results.map(({ description, title }) => (
              <li className="h-32 min-w-[13.75rem] opacity-40 first:opacity-100  lg:w-[11vw]">
                <p className="line-clamp-4 flex flex-col text-sm">
                  <span className="inline-block font-bold  text-green">
                    {title}
                  </span>
                  {description}
                </p>
              </li>
            )),
          )}
        </ul>
      </div>
    </div>
  );
};
