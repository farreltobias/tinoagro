import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Icon from '@public/icon.svg';

import diego from '@public/diego.png';
import handshake from '@public/handshake.jpeg';
import joao from '@public/joao.png';

export const About: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pb-36">
      <div className="absolute left-0  hidden h-full w-1/4 flex-col md:flex lg:w-5/12">
        <Image src={handshake} alt="handshake" className="opacity-50" />
        <Icon className="my-16 ml-auto mr-24 [--color-b:#004BE9]" />
        <div className="flex flex-1 justify-end bg-green pt-28 text-3xl font-bold text-white">
          <p className="mr-6 px-3 text-lg lg:w-5/12 lg:px-0 lg:text-2xl">
            Unimos tecnologia e o nosso knowhow agro para gerar resultados ao
            produtor
          </p>
        </div>
      </div>

      <div className="container relative flex max-w-screen-lg">
        <div className="ml-auto mt-10 flex w-full flex-col gap-10 md:w-[70%] lg:w-1/2">
          <Icon className="mx-auto h-16 w-16 [--color-b:#004BE9] md:hidden" />

          <div className="flex flex-col gap-9">
            <div className="h-3 w-3 rounded-full bg-green" />
            <div className="flex justify-between">
              <h2 className="md:flextext-4xl hidden font-bold leading-snug text-blue">
                Quem somos
              </h2>
              <h2 className="max-w-sm text-2xl font-bold leading-snug text-blue sm:text-4xl md:hidden">
                Muito prazer, somos a Tinoagro
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-10 sm:gap-20">
            <div className="flex flex-col gap-5 text-gray-darker">
              <h3 className="text-2xl font-bold text-[#1129A0] sm:text-3xl md:text-gray-darker">
                Nosso diferencial
              </h3>
              <p className="text-sm">
                A empresa tem como diferencial a atualização constante de seus
                produtos e serviços, desenvolvidos com base nas necessidades
                reais do mercado e das empresas do setor, acompanhando as
                mudanças e evoluções do agronegócio. Além disso, a Tinoagro
                conta com uma equipe altamente capacitada e comprometida com a
                excelência no atendimento personalizado e eficiente aos seus
                clientes.
              </p>
            </div>

            <div className="hidden flex-col gap-5 text-gray-darker sm:flex">
              <h3 className="text-2xl font-bold text-[#1129A0] sm:text-3xl md:text-gray-darker">
                Conhecimento e experiência de sobra
              </h3>
              <p className="text-sm">
                A Tinoagro nasce da experiência de 15 anos no Agronegócio,
                oriunda da experiência dos fundadores e do Back office da
                empresa, por tanto, no DNA da Tinoagro está uma ampla
                experiencia em construção de BI (Business Intelligence),
                profundo conhecimento em TI (Tecnologia da informação),
                desenvolvimento e utilização de ERP&apos;s (sistemas
                operacionais), rotinas administrativas de empresas e fazendas,
                assistência agronômica a campo, atendimento a distribuidores,
                atendimento a indústria, atendimento a produtores rurais,
                envolvimento com equipes operacionais de campo em fazendas.
              </p>
            </div>

            <div className="flex flex-col gap-20">
              <div className="relative -left-16 flex xs:-left-0">
                <Image
                  src={joao}
                  alt="joao"
                  className="w-full max-w-[230px] sm:max-w-full"
                />
                <Image
                  src={diego}
                  alt="diego"
                  className="-z-10 -ml-[6%] w-full max-w-[230px] sm:max-w-full"
                />
              </div>

              <ul className="flex">
                <li className="flex flex-col gap-3 p-2">
                  <h3 className="text-lg font-bold text-blue xs:text-xl">
                    João Rafael
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-gray-semi">
                    A Tinoagro nasce da experiência de 15 anos no Agronegócio,
                    oriunda da experiência dos fundadores e do Back office da
                    empresa, por tanto, no DNA da Tinoagro.
                  </p>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-base font-bold text-green xs:text-xs xs:font-normal"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="flex flex-col gap-3 p-2">
                  <h3 className="text-lg font-bold text-blue xs:text-xl">
                    Diego Souza
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-gray-semi">
                    A Tinoagro nasce da experiência de 15 anos no Agronegócio,
                    oriunda da experiência dos fundadores e do Back office da
                    empresa, por tanto, no DNA da Tinoagro.
                  </p>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-base font-bold text-green xs:text-xs xs:font-normal"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-5 bg-[#0B1A6D] px-6 py-16 text-white md:hidden">
        <h3 className="text-2xl font-bold">
          Conhecimento e experiência de sobra
        </h3>
        <p className="max-w-xl text-sm">
          A Tinoagro nasce da experiência de 15 anos no Agronegócio, oriunda da
          experiência dos fundadores e do Back office da empresa, por tanto, no
          DNA da Tinoagro está uma ampla experiencia em construção de BI
          (Business Intelligence), profundo conhecimento em TI (Tecnologia da
          informação), desenvolvimento e utilização de ERP’s (sistemas
          operacionais), rotinas administrativas de empresas e fazendas,
          assistência agronômica a campo, atendimento a distribuidores,
          atendimento a indústria, atendimento a produtores rurais, envolvimento
          com equipes operacionais de campo em fazendas.
        </p>
      </div>
    </div>
  );
};
