import Arrow from '@public/arrow.svg';
import Info from '@public/info.svg';

import { Tabs } from './Tabs';

import { TabType } from '@/@types/tab';

const tabs: TabType[] = [
  {
    title: 'MILHO',
    table: [
      {
        title: 'Custo Operacional Efetivo (COE)',
        description: '4,3K',
      },
      {
        title: 'Custo Operacional Total (COT)',
        description: '4,7K',
      },
      {
        title: 'Custo Total (CT)',
        description: '5,6K',
      },
      {
        title: 'Receita Bruta (RB)',
        description: '5,6K',
      },
    ],
  },
  {
    title: 'SOJA',
    table: [
      {
        title: 'Custo Operacional Efetivo (COE)',
        description: '5,3K',
      },
      {
        title: 'Custo Operacional Total (COT)',
        description: '5,8K',
      },
      {
        title: 'Custo Total (CT)',
        description: '6,8K',
      },
      {
        title: 'Receita Bruta (RB)',
        description: '9K',
      },
    ],
  },
  {
    title: 'ALGODÃO',
    table: [
      {
        title: 'Custo Operacional Efetivo (COE)',
        description: '100k',
      },
      {
        title: 'Custo Operacional Total (COT)',
        description: '13,6K',
      },
      {
        title: 'Custo Total (CT)',
        description: '16K',
      },
      {
        title: 'Receita Bruta (RB)',
        description: '16,5K',
      },
    ],
  },
];

export const Infromation: React.FC = () => {
  return (
    <article
      tabIndex={0}
      id="informations"
      className="relative flex flex-col gap-10 bg-gray"
    >
      <div className="container mt-20 flex max-w-4xl flex-col gap-10">
        <header className="relative flex flex-col gap-9">
          <Info className="absolute -left-32 -top-full" />
          <div className="h-3 w-3 rounded-full bg-green" />
          <h1 className="w-2/3 text-2xl font-bold leading-snug text-blue-dark xs:text-4xl">
            Você sabe qual foi a safra mais rentável no último ano?
          </h1>
        </header>
        <div className="relative flex flex-col pb-16">
          <Tabs tabs={tabs} />
          <div className="bottom-0 flex w-full pt-4 xs:right-10 xs:w-auto sm:absolute sm:gap-4 sm:pt-0">
            <Arrow />
            <span className="w-full whitespace-pre pt-2 text-sm ">
              A nossa solução te entrega essas {'\n'}informações de{' '}
              <span className="font-bold text-green">forma muito rápida!</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
