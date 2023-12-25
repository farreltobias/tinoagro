'use client';

import React from 'react';

import CardOtherProducts from './CardOtherProducts';

const mockOtherProducts = [
  {
    id: 1,
    namePage: 'Valora',
    hrefPage: 'valora',
  },
  {
    id: 2,
    namePage: 'Guardião',
    hrefPage: 'guardiao',
  },
  {
    id: 3,
    namePage: 'Luminar',
    hrefPage: 'luminar',
  },
  {
    id: 4,
    namePage: 'Inspetor',
    hrefPage: 'inspetor',
  },
];

export default function OtherProducts({ pageActive }: { pageActive: string }) {
  return (
    <section className="min-h-[calc(100vh-249px)] bg-white py-20 pb-28 md:py-36">
      <div className="container flex max-w-screen-lg flex-col items-start justify-between gap-5">
        <h4 className="mb-20 w-full text-4xl font-bold leading-[53px] text-[#0B1A6D] md:text-[43px]">
          Veja nossos outros produtos
        </h4>

        <div className="flex w-full flex-wrap gap-7">
          {React.Children.toArray(
            mockOtherProducts
              .filter((item) => item.hrefPage !== pageActive)
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((item) => (
                <CardOtherProducts
                  namePage={item.namePage}
                  hrefPage={item.hrefPage}
                />
              )),
          )}
        </div>
      </div>
    </section>
  );
}
