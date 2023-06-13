import React from 'react';
import Image from 'next/image';

import grass from '@public/grass-drawing.png';

export const Results: React.FC = () => {
  return (
    <div className="container mt-6 flex max-w-screen-lg flex-col gap-20">
      <div className="flex flex-col gap-8">
        <div className="h-3 w-3 rounded-full bg-green" />
        <h2 className="w-1/3 text-4xl font-bold leading-snug">
          Nossos resultados
        </h2>
      </div>
      <div className="flex items-center gap-44">
        <Image src={grass} alt="grass" className="w-52 object-contain" />
        {/* <div className="relative w-full"> */}
        <ul className="flex h-32 gap-20">
          {React.Children.toArray(
            Array.from({ length: 4 }).map(() => (
              <li className="h-full w-40">
                <p>
                  Aumento de 10% na acuracidade das previsões de safra com a
                  utilização das soluções de análise de dados da Tinoagro;
                </p>
              </li>
            )),
          )}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};
