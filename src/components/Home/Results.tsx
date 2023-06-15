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
    <div className="container mt-6 flex max-w-screen-lg flex-col gap-20">
      <div className="flex flex-col gap-8">
        <div className="h-3 w-3 rounded-full bg-green" />
        <h2 className="w-1/3 text-4xl font-bold leading-snug">
          Nossos resultados
        </h2>
      </div>
      <div className="relative flex items-center gap-44">
        <Image src={grass} alt="grass" className="w-52 object-contain" />
        <Arrow className="absolute left-40" />

        <ul className="flex gap-10">
          {React.Children.toArray(
            results.map(({ description, title }) => (
              <li className="h-32 w-[12vw] opacity-40 first:opacity-100">
                <p className="line-clamp-4 flex flex-col">
                  <span className="inline-block font-bold text-green">
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
