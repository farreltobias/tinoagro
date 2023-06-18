import Logo from '@public/logo.svg';

import { Solution } from './Solution';

const solutions = [
  {
    title: 'Gestão de custos',
    description:
      'Controle e a redução de gastos desnecessários, aumentando a rentabilidade da produção agrícola.',
    detailsHref: '/',
  },
  {
    title: 'Analytics',
    description: 'Sistema de coleta e organização de dados.',
    detailsHref: '/',
  },
  {
    title: 'Unify',
    description:
      'Mapeamento e análise de dados para acompanhar o processo produtivo em tempo real, garantindo maior eficiência e segurança na produção.',
    detailsHref: '/',
    selected: true,
  },
  {
    title: 'Reading',
    description: 'Sistema de leitura de dados.',
    detailsHref: '/',
  },
];

export const Solutions: React.FC = () => {
  return (
    <div className="container flex max-w-screen-lg flex-col gap-14 sm:gap-28">
      <div className="flex flex-col gap-12">
        <div className="h-3 w-3 rounded-full bg-green" />
        <div className="flex items-center justify-between gap-5 sm:gap-0">
          <div className="flex flex-col gap-6">
            <h2 className="w-full text-2xl font-bold leading-snug sm:w-2/5 sm:text-4xl">
              Uma solução específica para cada realidade
            </h2>
            <p className="text-sm">
              Veja como eles vão ajudar na sua gestão da sua propriedade rural
            </p>
          </div>
          <Logo className="hidden h-14 w-64 xs:flex" />
        </div>
      </div>

      <ul className="flex h-96 items-center justify-between gap-6">
        {solutions.map(({ description, detailsHref, title }) => (
          <Solution
            description={description}
            detailsHref={detailsHref}
            title={title}
          />
        ))}
      </ul>
    </div>
  );
};
