import React from 'react';

import Colect from '@public/colect.svg';
import Icon from '@public/icon.svg';
import Plan from '@public/plan.svg';
import ProcessIcon from '@public/process.svg';
import Processing from '@public/processing.svg';
import Arrow from '@public/slide-arrow.svg';
import View from '@public/view.svg';

const process = [
  {
    icon: <Colect />,
    title: 'Coleta e análise',
    description:
      'Padronizamos e organizamos as informações das empresas de forma estruturada.',
  },
  {
    icon: <Processing />,
    title: 'Processamento',
    description:
      'Fazemos as leitura de todos os dados da propriedade e culturas.',
  },
  {
    icon: <View />,
    title: 'Visualizações',
    description:
      'Geramos em segundos painéis praticos e intuitivos, com as informações fundamentais, que possimilitam analizes profundas sobre todos os aspectos da empresa, tornando as decisões informadas e acertivas.',
  },
  {
    icon: <Plan />,
    title: 'Plano de Ação',
    description:
      'Geramos em segundos painéis praticos e intuitivos, com as informações fundamentais.',
  },
];

export const Process: React.FC = () => {
  return (
    <div className="container my-20 flex max-w-screen-lg flex-col gap-24 lg:my-40">
      <div className="flex flex-col gap-16">
        <div className="h-3 w-3 rounded-full bg-green" />
        <div className="flex justify-between">
          <h2 className="w-full text-2xl font-bold leading-snug text-blue-dark sm:w-3/5 sm:text-4xl">
            Estudamos a fundo a sua operação, coletamos dados e damos soluções
          </h2>
          <Icon className="hidden opacity-25 [--color-a:#D1D1D1] [--color-b:#D1D1D1] sm:flex" />
        </div>
      </div>
      <div className="relative">
        <ul className="mr-16 flex justify-between gap-16">
          {React.Children.toArray(
            process.map(({ description, icon, title }) => (
              <li className="flex-1 text-sm">
                <section className="flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    {icon}
                    <ProcessIcon />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-blue-dark">{title}</h1>
                    <p className="text-gray-darker">{description}</p>
                  </div>
                </section>
              </li>
            )),
          )}
        </ul>
        <button className="absolute right-0 top-1/2 -translate-y-1/2">
          <Arrow className="stroke-black" />
        </button>
      </div>
    </div>
  );
};
