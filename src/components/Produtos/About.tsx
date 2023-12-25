'use client';

import React, { useEffect, useState } from 'react';

import { ProductType } from '@/@types/products';

interface AboutProductsProps {
  data: ProductType;
}

export const AboutProducts = ({ data }: AboutProductsProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const columns = isMobile ? 2 : 4; // número de colunas baseado no layout
  const mockSolution = [];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Defina o valor de 768 para o limite de largura em que você considera como mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Executa a função uma vez para definir o valor inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  for (let i = 0; i < columns; i++) {
    const start = i * (isMobile ? 6 : 3); // ajuste dos índices de início
    const end = start + (isMobile ? 6 : 3); // ajuste dos índices de fim
    const columnItems = data.itemsSolutions.slice(start, end);
    mockSolution.push({ [`column${i + 1}`]: columnItems });
  }

  return (
    <section className="min-h-[345px] bg-white py-10">
      <div className="container max-w-screen-lg">
        <div className="mb-10 flex flex-col items-start justify-start">
          <div className="mb-5 h-3 w-3 rounded bg-green"></div>
          <h1 className="mb-8 text-4xl font-bold text-blue-defaulter md:text-5xl">
            {data.title}
          </h1>

          <p className="text-sm font-normal text-[#4E4E4E]">
            {data.preDescription}
          </p>
        </div>

        <div className="relative z-[1] mx-auto w-full max-w-3xl shadow-lg  md:max-h-14">
          <div className="w-full rounded-t-lg bg-green px-4 py-4">
            <p className="text-center text-base font-semibold text-white">
              Nossas soluções abrangem uma ampla variedade de cultivos ,
              incluindo
            </p>
          </div>

          <div className="relative flex w-full justify-center gap-20 rounded-b-lg bg-gray px-4 py-4">
            {React.Children.toArray(
              mockSolution.map((column, index) => {
                return (
                  <ul key={index}>
                    {Object.values(column).map((items) =>
                      items.map((item, subItemIndex) => (
                        <li
                          key={subItemIndex}
                          className="mb-1 text-sm font-medium text-black"
                        >
                          {item}
                        </li>
                      )),
                    )}
                  </ul>
                );
              }),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
