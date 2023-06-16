const mockSolution = [
  {
    column1: ['Soja', 'Milho', 'Pastagens'],
    column2: ['Café', 'Sorgo', 'Algodão'],
    column3: ['Florestal', 'Citros', 'Cana-de-açúcar'],
    column4: ['Frutas', 'Batata', 'Arroz'],
  },
];

export const AboutProducts: React.FC = () => {
  return (
    <section className="min-h-[345px] bg-white py-10">
      <div className="container max-w-screen-lg">
        <div className="mb-10 flex flex-col items-start justify-start">
          <div className="mb-5 h-3 w-3 rounded bg-green"></div>
          <h1 className="mb-8 text-5xl font-bold text-blue-defaulter">
            Tinoagro Linha Smart
          </h1>

          <p className="text-sm font-normal text-[#4E4E4E]">
            <strong>Tinoagro Linha Smart</strong> é uma solução completa de
            gestão agrícola desenvolvida para atender às exigências do setor
            agropecuário e enfrentar os desafios relacionados à produtividade,
            margens de lucro e custo no agronegócio. Com ferramentas versáteis e
            robustas, o sistema oferece benefícios significativos aos
            agricultores em diversas etapas do processo produtivo.
          </p>
        </div>

        <div className="z-[1] mx-auto max-h-14 w-full max-w-3xl">
          <div className="w-full rounded-t-lg bg-green px-4 py-4">
            <p className="text-base font-semibold text-white">
              Nossas soluções abrangem uma ampla variedade de cultivos ,
              incluindo
            </p>
          </div>

          <div className="relative flex w-full justify-center gap-20 rounded-b-lg bg-gray px-4 py-4">
            <ul className="">
              <li className="text-sm font-medium text-black ">Soja</li>
              <li className="text-sm font-medium text-black ">Milho</li>
              <li className="text-sm font-medium text-black ">Pastagens</li>
            </ul>
            <ul>
              <li className="text-sm font-medium text-black ">Café</li>
              <li className="text-sm font-medium text-black ">Sorgo</li>
              <li className="text-sm font-medium text-black ">Algodão</li>
            </ul>

            <ul>
              <li className="text-sm font-medium text-black ">Florestal</li>
              <li className="text-sm font-medium text-black ">Citros</li>
              <li className="text-sm font-medium text-black ">
                Cana-de-açúcar
              </li>
            </ul>

            <ul>
              <li className="text-sm font-medium text-black ">Frutas</li>
              <li className="text-sm font-medium text-black ">Batata</li>
              <li className="text-sm font-medium text-black ">Arroz</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
