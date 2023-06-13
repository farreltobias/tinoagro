import Link from 'next/link';

import Logo from '@public/logo.svg';

import { classNames } from '@/utils/classNames';

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
    <div className="container flex max-w-screen-lg flex-col gap-28">
      <div className="flex flex-col gap-12">
        <div className="h-3 w-3 rounded-full bg-green" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="w-2/5 text-4xl font-bold leading-snug">
              Uma solução específica para cada realidade
            </h2>
            <p className="text-sm">
              Veja como eles vão ajudar na sua gestão da sua propriedade rural
            </p>
          </div>
          <Logo className="h-14 w-64" />
        </div>
      </div>
      <ul className="flex items-center gap-6">
        {solutions.map(({ description, detailsHref, title, selected }) => (
          <li
            className={classNames(
              'rounded-2xl p-6',
              selected
                ? 'flex-[1_1_27.5%] bg-white pb-12 pt-20 text-gray-darker'
                : 'h-[20rem] flex-[1_1_25%] bg-gradient-to-tr from-[rgba(255,255,255,0.17)] from-[-15%] via-[rgba(25,70,73,0.17)] via-65% to-[rgba(10,19,70,0.17)] to-95% pt-16',
            )}
          >
            <section className="flex h-full flex-col gap-6 text-xs">
              <header className="flex w-[72.5%] flex-col gap-1">
                <h1
                  className={classNames(
                    'h-16 text-2xl font-bold',
                    selected ? 'text-blue' : '',
                  )}
                >
                  {title}
                </h1>
                <h2 className="order-first text-green">Tinoagro</h2>
              </header>
              <p className="w-11/12">{description}</p>
              <footer className="mt-auto">
                <Link href={detailsHref} className="font-semibold">
                  + <span className="text-green">Detalhes</span>
                </Link>
              </footer>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};
