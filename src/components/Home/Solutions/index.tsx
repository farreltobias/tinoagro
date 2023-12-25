import React from 'react';

import Logo from '@public/logo.svg';

import { Solution } from './Solution';

const solutions = [
  {
    title: 'Luminar',
    description:
      'Impulsione sua fazenda com o Luminar da Tinoagro: Business Analytics avançado,  indicadores financeiros e operacionais, planejamento estratégico e muito mais. ',
    detailsHref: '/produtos/luminar',
  },
  {
    title: 'Inspetor',
    description:
      'Otimize recursos, controle frotas, gerencie colheitas, otimize logística, faça apontamentos, controle custos, aprimore beneficiamento, planeje o plantio e aperfeiçoe compras e contratações.',
    detailsHref: '/produtos/inspetor',
  },
  {
    title: 'Guardião',
    description:
      'Otimize o consumo de combustível em sua fazenda com o Guardião da TinoAgro. Tenha controle total e reduza custos. ',
    detailsHref: '/produtos/guardiao',
    selected: true,
  },
  {
    title: 'Valora',
    description:
      'Aumente seu sucesso no setor agrícola com o Valora! Distribuidores de insumos, indústrias e empresas agrícolas podem obter insights estratégicos e vantagem competitiva. Experimente agora e alcance o topo com Valora.',
    detailsHref: '/produtos/valora',
  },
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="flex w-full flex-col gap-14">
      <div className="container flex max-w-screen-lg flex-col gap-6 sm:gap-12">
        <div className="h-3 w-3 rounded-full bg-green" />
        <header className="flex items-center justify-between gap-5 sm:gap-0">
          <div className="flex flex-col gap-6">
            <h1 className="w-full text-2xl font-bold leading-snug sm:w-2/5 sm:text-4xl">
              Uma solução específica para cada realidade
            </h1>
            <p className="text-sm">
              Descubra como nossas soluções impulsionam o sucesso do seu negócio.
            </p>
          </div>
          <Logo className="hidden h-14 w-64 xs:flex" />
        </header>
      </div>

      <ul className="container flex h-[30rem] max-w-screen-lg items-center justify-between gap-6 overflow-x-auto lg:overflow-hidden">
        {React.Children.toArray(
          solutions.map(({ description, detailsHref, title }) => (
            <Solution
              description={description}
              detailsHref={detailsHref}
              title={title}
              key={title}
            />
          )),
        )}
      </ul>
    </section>
  );
};
