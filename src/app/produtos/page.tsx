'use client';

import { NextPage } from 'next';

import { AboutProducts } from '@/components/Produtos/About';
import MainAdvantages from '@/components/Produtos/MainAdvantages';
import { TopInformation } from '@/components/Produtos/TopInformation';

const NossosProdutos: NextPage = () => {
  return (
    <article>
      <TopInformation />
      <AboutProducts />
      <MainAdvantages />
    </article>
  );
};

export default NossosProdutos;
