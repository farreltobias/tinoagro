'use client';

import { NextPage } from 'next';

import { Contact } from '@/components/Home/Contact';
import { AboutProducts } from '@/components/Produtos/About';
import MainAdvantages from '@/components/Produtos/MainAdvantages';
import ModuleSolutions from '@/components/Produtos/ModuleSolutions';
import { TopInformation } from '@/components/Produtos/TopInformation';

const NossosProdutos: NextPage = () => {
  return (
    <article>
      <TopInformation />
      <AboutProducts />
      <MainAdvantages />
      <ModuleSolutions />
      <Contact />
    </article>
  );
};

export default NossosProdutos;
