/* eslint-disable no-empty-pattern */
import React from 'react';

import AccordionComponent from '../AccordeonComponent';

type Props = {};

const mockAccordeon = [
  {
    id: 1,
    title: 'Aperfeiçoamento da qualidade da produção',
    description:
      'É baseado em aplicação web, acessível a qualquer momento e em qualquer lugar. Com indicadores de desempenho integrados, os agricultores podem acompanhar de maneira intuitiva e dinâmica o desempenho operacional, financeiro e administrativo de suas operações.',
  },
  {
    id: 2,
    title: 'Controle de custos e otimização de recursos',
    description: `O sistema permite o controle de custos e otimização de recursos, com a possibilidade de identificar gargalos produtivos e falhas nos processos, que podem afetar a rentabilidade e a produtividade das operações.`,
  },
  {
    id: 3,
    title: 'Tecnologias avançadas',
    description: `A Linha Smart da Tinoagro é baseada em tecnologias avançadas, como Internet das Coisas (IoT), Inteligência Artificial (IA) e Machine Learning (ML), que permitem a coleta de dados em tempo real e a geração de insights para a tomada de decisões.`,
  },
  {
    id: 4,
    title: 'Integração com outros sistemas',
    description: `O sistema é integrado com outros sistemas, como ERPs, plataformas de gestão de pessoas e sistemas de gestão financeira, permitindo a centralização de informações e a geração de relatórios gerenciais.`,
  },
  {
    id: 5,
    title: 'Centralização de informações',
    description: `O sistema é integrado com outros sistemas, como ERPs, plataformas de gestão de pessoas e sistemas de gestão financeira, permitindo a centralização de informações e a geração de relatórios gerenciais.`,
  },
];

export default function MainAdvantages({}: Props) {
  const halfLength = Math.ceil(mockAccordeon.length / 2);

  return (
    <section className="bg-blue py-14 text-white md:py-44">
      <div className="container max-w-screen-lg">
        <div className="mb-20 flex w-full flex-col items-start justify-between gap-10 text-start md:flex-row md:items-center">
          <h2 className="text-4xl font-bold md:text-[43px] ">
            Principais vantagens
          </h2>
          <p className="w-full max-w-2xl text-sm font-medium">
            Proporcionamos uma melhoria substancial na produção agrícola,
            permitindo um controle minucioso de todas as etapas do processo
            produtivo. Com recursos avançados, o sistema auxilia na
            identificação de gargalos produtivos e falhas nos processos, que
            podem afetar a rentabilidade e a produtividade das operações.
            Algumas das principais vantagens da Linha Smart da Tinoagro incluem:
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:flex-row">
          <div className="flex w-full flex-col gap-3 md:w-1/2">
            {mockAccordeon.slice(0, halfLength).map((item) => (
              <AccordionComponent item={item} key={item.id} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-3 md:w-1/2">
            {mockAccordeon.slice(halfLength).map((item) => (
              <AccordionComponent item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
