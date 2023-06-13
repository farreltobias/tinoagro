import Site from '@public/site.svg';

export const Working: React.FC = () => {
  return (
    <div className="container mt-48 flex max-w-screen-lg gap-20">
      <div className="flex min-w-[40%] flex-col gap-8">
        <div className="h-3 w-3 rounded-full bg-green" />
        <h2 className="w-2/3 text-4xl font-bold leading-snug">
          Veja como funciona na prática
        </h2>
        <p className="w-11/12 text-sm">
          Através de sua interface amigável e intuitiva, a plataforma permite
          aos usuários realizar análises rápidas e precisas dos resultados,
          comparar cenários, identificar falhas e fraudes, além de monitorar
          todo o processo produtivo em tempo real.
        </p>
      </div>
      <div className="relative flex h-full flex-col gap-16">
        <Site className="shadow-xl" />
        <div className="ml-8 flex h-1 gap-5">
          <div className="h-full w-12 rounded-[1px] bg-green" />
          <div className="h-full w-24 rounded-[1px] bg-white" />
          <div className="h-full w-12 rounded-[1px] bg-green" />
        </div>
      </div>
    </div>
  );
};
