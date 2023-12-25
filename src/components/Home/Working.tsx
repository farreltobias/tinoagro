import WorkingVideos from "./Swipers/WorkingVideos";

export const Working: React.FC = () => {
  return (
    <article className="container mb-10 mt-10 flex max-w-[1330px] flex-col justify-end gap-8 sm:my-24 sm:mt-20 lg:mt-32 lg:flex-row ">
      <div className="flex w-full max-w-[377px] flex-col gap-6 sm:gap-8">
        <div className="h-3 w-3 rounded-full bg-green" />
        <h1 className="w-full text-2xl font-bold leading-snug sm:w-2/3 sm:text-4xl">
          Veja como funciona na prática
        </h1>
        <p className="w-11/12 text-sm">
          Se você está envolvido na cadeia do agronegócio, da produção à distribuição, a análise de dados pode transformar seu negócio. Coletando informações sobre demanda, logística, tendências de consumo, preços de commodities e dados climáticos, você identifica oportunidades valiosas. Com insights precisos, otimize a cadeia de suprimentos, melhore a eficiência operacional e tome decisões estratégicas informadas. A análise de dados impulsiona o sucesso em toda a cadeia do agro.
        </p>
      </div>

      <div className="relative flex h-full w-full max-w-[700px] flex-col gap-16 self-center lg:self-auto">
        <WorkingVideos />
      </div>
    </article>
  );
};
