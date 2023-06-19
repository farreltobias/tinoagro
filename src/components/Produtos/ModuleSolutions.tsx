import CardModulos from './Modulos';

const mockModulos = [
  {
    id: 1,
    title: 'Smart Financeiro',
    submenus: [
      'Controle de contas a pagar e a receber',
      'Emissão de notas fiscais eletrônicas',
      'Gestão de fluxo de caixa',
      'Conciliação bancária',
      'Controle de custos de produção agrícola',
      'Análise de rentabilidade por safra, cultura ou talhão.',
    ],
  },
  {
    id: 2,
    title: 'Smart Financeiro',
    submenus: [
      'Controle de contas a pagar e a receber',
      'Emissão de notas fiscais eletrônicas',
      'Gestão de fluxo de caixa',
      'Conciliação bancária',
      'Controle de custos de produção agrícola',
      'Análise de rentabilidade por safra, cultura ou talhão.',
    ],
  },
  {
    id: 3,
    title: 'Smart Financeiro',
    submenus: [
      'Controle de contas a pagar e a receber',
      'Emissão de notas fiscais eletrônicas',
      'Gestão de fluxo de caixa',
      'Conciliação bancária',
      'Controle de custos de produção agrícola',
      'Análise de rentabilidade por safra, cultura ou talhão.',
    ],
  },
];

export default function ModuleSolutions() {
  return (
    <div className="flex w-full flex-col pb-64">
      <section className="bg-gray py-20 text-blue-light">
        <div className="container flex max-w-screen-lg items-start justify-between">
          <h3 className="w-full max-w-[480px] text-[43px] font-bold leading-[53px] text-blue">
            Módulos que compõem a solução
          </h3>
          <p className="mt-4 w-full max-w-[445px] text-sm font-medium text-black">
            A linha Smart da Tinoagro é composta por uma variedade de módulos
            que atendem às necessidades específicas da gestão agrícola. Alguns
            dos principais módulos incluem:
          </p>
        </div>
      </section>

      <section className="bg-white py-20 text-blue-light">
        <div className="container max-w-screen-lg">
          <div className="grid w-full grid-cols-3 gap-6">
            {mockModulos.map((item) => (
              <CardModulos key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
