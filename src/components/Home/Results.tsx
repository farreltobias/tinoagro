import React from 'react';
import Image from 'next/image';

import Arrow from '@public/results-arrow.svg';

import grass from '@public/grass-drawing.png';

const results = [
  {
    title: 'Redução significativa',
    description:
      'nos custos logísticos e melhoria na eficiência da distribuição dos produtos agrícolas.',
  },
  {
    title: 'Aumento na produtividade',
    description: 'e redução das perdas devido a uma melhor gestão do momento de plantio.',
  },
  {
    title: 'Aumento nas vendas',
    description:
      'e melhoria na margem de lucro por meio de uma estratégia de precificação mais eficaz.',
  },
  {
    title: 'Melhoria na gestão',
    description:
      'de estoque, evitando excessos e escassez de produtos, resultando em uma operação mais eficiente.',
  },
  {
    title: 'Maior fidelidade',
    description: 'dos clientes e crescimento da participação de mercado por meio de uma oferta de produtos e serviços mais alinhada com as preferências dos clientes.'
  }
];

export const Results: React.FC = () => {
  return (
    <article
      id="results"
      className="container mt-6 flex max-w-screen-lg flex-col gap-10 lg:gap-20"
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="h-3 w-3 rounded-full bg-green" />
        <h1 className="w-1/3 text-2xl font-bold leading-snug sm:text-4xl">
          Nossos resultados
        </h1>
      </div>

      <div className="relative flex flex-col items-center gap-10 sm:gap-20 lg:flex-row lg:gap-44">
        <Image src={grass} alt="grass" className="w-52 object-contain" />
        <Arrow className="absolute left-40  hidden lg:flex" />

        <ul className="flex w-full gap-10 overflow-x-auto py-5 sm:py-0 lg:w-auto lg:overflow-x-auto custom-scroll">
          {React.Children.toArray(
            results.map(({ description, title }) => (
              <li className="h-40 min-w-[13.75rem] lg:w-[11vw]">
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
    </article>
  );
};
