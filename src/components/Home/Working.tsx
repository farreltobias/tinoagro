import Site from '@public/site.svg';

export const Working: React.FC = () => {
  return (
    <div className="container my-24 flex max-w-[1330px] flex-col justify-end gap-8 lg:mt-48 lg:flex-row ">
      <div className="flex w-full max-w-[377px] flex-col gap-8">
        <div className="h-3 w-3 rounded-full bg-green" />
        <h2 className="w-full text-2xl font-bold leading-snug sm:w-2/3 sm:text-4xl">
          Veja como funciona na prática
        </h2>
        <p className="w-11/12 text-sm">
          Através de sua interface amigável e intuitiva, a plataforma permite
          aos usuários realizar análises rápidas e precisas dos resultados,
          comparar cenários, identificar falhas e fraudes, além de monitorar
          todo o processo produtivo em tempo real.
        </p>
      </div>

      <div className="relative -mt-20 flex h-full w-full max-w-[700px] flex-col gap-16 self-center sm:-mt-0 lg:self-auto">
        <Site className="w-full lg:w-auto" />
        <div className="absolute bottom-[15%] flex h-1 items-center justify-center gap-5 xs:bottom-[10%] sm:bottom-[-5%] md:bottom-[-10%] lg:relative lg:bottom-0 lg:bottom-[-5%] lg:ml-8 lg:justify-normal">
          <div className="h-full w-12 rounded-[1px] bg-green" />
          <div className="h-full w-24 rounded-[1px] bg-white" />
          <div className="h-full w-12 rounded-[1px] bg-green" />
        </div>
      </div>
    </div>
  );
};
