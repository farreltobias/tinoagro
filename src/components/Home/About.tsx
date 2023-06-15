import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Icon from '@public/icon.svg';

import diego from '@public/diego.png';
import handshake from '@public/handshake.jpeg';
import joao from '@public/joao.png';

export const About: React.FC = () => {
  return (
    <div className="relative w-full pb-36">
      <div className="absolute left-0 flex h-full w-5/12 flex-col">
        <Image src={handshake} alt="handshake" className="opacity-50" />
        <Icon className="my-16 ml-auto mr-24 [--color-b:#004BE9]" />
        <div className="flex flex-1 justify-end bg-green pt-28 text-3xl font-bold text-white">
          <p className="mr-6 w-5/12">
            Unimos tecnologia e o nosso knowhow agro para gerar resultados ao
            produtor
          </p>
        </div>
      </div>
      <div className="container relative flex max-w-screen-lg">
        <div className="ml-auto mt-20 flex w-1/2 flex-col gap-10">
          <div className="flex flex-col gap-9">
            <div className="h-3 w-3 rounded-full bg-green" />
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold leading-snug text-blue">
                Quem somos
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-5 text-gray-darker">
              <h3 className="text-3xl font-bold">Nosso diferencial</h3>
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
            <div className="flex flex-col gap-5 text-gray-darker">
              <h3 className="text-3xl font-bold">
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
              <div className="flex">
                <Image src={joao} alt="joao" />
                <Image src={diego} alt="diego" className="-z-10 -ml-[6%]" />
              </div>
              <ul className="flex">
                <li className="flex flex-col gap-3 p-2">
                  <h3 className="text-xl font-bold text-blue">João Rafael</h3>
                  <p className="mb-4 text-sm leading-6 text-gray-semi">
                    A Tinoagro nasce da experiência de 15 anos no Agronegócio,
                    oriunda da experiência dos fundadores e do Back office da
                    empresa, por tanto, no DNA da Tinoagro.
                  </p>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-xs text-green"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="flex flex-col gap-3 p-2">
                  <h3 className="text-xl font-bold text-blue">Diego Souza</h3>
                  <p className="mb-4 text-sm leading-6 text-gray-semi">
                    A Tinoagro nasce da experiência de 15 anos no Agronegócio,
                    oriunda da experiência dos fundadores e do Back office da
                    empresa, por tanto, no DNA da Tinoagro.
                  </p>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-xs text-green"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
