import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      {/* <Background className="absolute inset-0 -top-24 -z-10 object-contain" /> */}
      <Image className="absolute top-0 -z-10" src={farm} alt="background" />
      <Icon className="absolute right-0 top-0 -z-10 opacity-[0.04]" />
      {/* <Image
        className="absolute -top-24 -z-10 "
        src={Background}
        alt="background"
      /> */}

      <div className="container flex">
        <Image
          src={tablet}
          alt="tablet"
          className="-mb-8 -mr-16 ml-10 h-1/4 w-1/2 flex-1 self-end object-contain"
        />

        <div className="mb-20 mt-24 w-1/2 text-white">
          <div className="flex w-3/5 flex-col gap-8">
            <h1 className="whitespace-pre text-5xl font-bold leading-[1.10]">
              Gestão {'\n'}
              inteligente {'\n'}
              de processos {'\n'}
              agrícolas
            </h1>
            <h2 className="order-first flex items-center gap-3">
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
              className="w-fit rounded border border-green p-5 text-sm font-semibold"
            >
              Conheça nossa solução
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
