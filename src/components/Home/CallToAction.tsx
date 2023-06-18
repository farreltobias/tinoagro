import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import ArrowDown from '@public/arrowDown.svg';
import Icon from '@public/icon.svg';

import farm from '@public/farm.png';
import tablet from '@public/tablet.png';

import { classNames } from '@/utils/classNames';

export const CallToAction: React.FC = () => {
  const background =
    'bg-gradient-to-br bg-no-repeat from-blue-darker from-20% via-green-darker via-65% to-green-dark';

  return (
    <div className="relative flex flex-col">
      <div
        className={classNames('absolute inset-0 -top-24 -z-10', background)}
      />

      <Image className="absolute top-0 -z-10" src={farm} alt="background" />
      <Icon className="absolute right-0 top-20 -z-10 h-1/2 w-1/2 opacity-[0.04]" />

      <div className="container flex flex-col-reverse gap-9 md:flex-row lg:gap-2">
        <div className="relative -mb-8 -mr-16 hidden h-1/4 flex-1 self-center md:flex lg:ml-10 lg:self-end">
          <div className="absolute -top-6 left-20 h-44 w-[1px] bg-green lg:left-32">
            <div className="relative flex">
              <div className="absolute right-6 h-2 w-2 -translate-y-1/2 rounded bg-green" />
              <p className="absolute ml-4 w-24 -translate-y-1/2 text-xs font-semibold text-white">
                Alto potencial de Lucro
              </p>
            </div>
          </div>

          <div className="absolute left-48 h-40 w-[1px] bg-white lg:left-64 lg:h-44">
            <div className="relative flex">
              <div className="absolute right-6 h-2 w-2 -translate-y-1/2 rounded bg-white" />
              <p className="absolute ml-4 w-24 -translate-y-1/2 text-xs font-semibold text-white">
                Aumento de produtividade em 12%
              </p>
            </div>
          </div>
          <Image src={tablet} alt="tablet" priority />
        </div>

        <div className="mb-20 mt-24 w-full text-white md:w-1/2">
          <div className="flex w-full flex-col gap-8 sm:w-3/5">
            <h1 className="whitespace-pre text-4xl font-bold leading-[1.10] xs:text-5xl">
              Gestão {'\n'}
              inteligente {'\n'}
              de processos {'\n'}
              agrícolas
            </h1>
            <div className="relative flex w-full md:hidden">
              <ArrowDown />
              <Image
                src={tablet}
                alt="tablet"
                priority
                className="absolute -right-[40%] -top-[35%]"
              />
            </div>
            <h2 className="order-first flex flex-col gap-3 xs:items-center sm:flex-row">
              <div className="mt-3 h-[2px] w-4 bg-green font-normal" />
              Nós te damos informações importa...
            </h2>
            <p className="text-sm font-medium leading-relaxed">
              Se em seu negocio você leva mais de um minuto para anlizar seus
              resultados, comparar cenários, descobrir falhas, interceptar
              fraudes...{' '}
            </p>
            <Link
              href="/"
              className="flex w-full items-center justify-center gap-4 rounded border border-green p-5 text-center text-sm font-semibold xs:w-fit"
            >
              Conheça nossa solução
              <FaLongArrowAltDown color="#fffff" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
