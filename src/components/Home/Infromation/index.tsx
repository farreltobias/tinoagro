import Arrow from '@public/arrow.svg';
import Info from '@public/info.svg';

import { Tabs } from './Tabs';

import { TabType } from '@/@types/tab';

const tabs: TabType[] = [
  {
    title: 'Milho safrinha 2022',
    table: [
      {
        title: 'Investimento',
        description: '100k',
      },
      {
        title: 'Custo fixos',
        description: '34,3k',
      },
      {
        title: 'Operação',
        description: '300k',
      },
      {
        title: 'Faturamento bruto',
        description: '1,2m',
      },
      {
        title: 'Lucro líquido',
        description: '1,2m',
      },
    ],
  },
  {
    title: 'Soja 2023',
    table: [
      {
        title: 'Investimento',
        description: '500k',
      },
      {
        title: 'Custo fixos',
        description: '40,3k',
      },
      {
        title: 'Operação',
        description: '900k',
      },
      {
        title: 'Faturamento bruto',
        description: '2,2m',
      },
      {
        title: 'Lucro líquido',
        description: '3,2m',
      },
    ],
  },
  {
    title: 'Trigo 2023',
    table: [
      {
        title: 'Investimento',
        description: '100k',
      },
      {
        title: 'Custo fixos',
        description: '34,3k',
      },
      {
        title: 'Operação',
        description: '300k',
      },
      {
        title: 'Faturamento bruto',
        description: '1,2m',
      },
      {
        title: 'Lucro líquido',
        description: '1,2m',
      },
    ],
  },
];

export const Infromation: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-10 bg-gray">
      <div className="container mt-20 flex max-w-4xl flex-col gap-10">
        <div className="relative flex flex-col gap-9">
          <Info className="absolute -left-32 -top-full" />
          <div className="h-3 w-3 rounded-full bg-green" />
          <h2 className="w-2/3 text-4xl font-bold leading-snug text-blue-dark">
            Você sabe qual foi a safra mais rentável no último ano?
          </h2>
        </div>
        <div className="relative flex flex-col pb-16">
          <Tabs tabs={tabs} />
          <div className="absolute bottom-0 right-10 flex gap-4">
            <Arrow />
            <span className="whitespace-pre pt-2 text-sm">
              A nossa solução te entrega essas {'\n'}informações de{' '}
              <span className="font-bold text-green">forma muito rápida!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
