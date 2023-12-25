'use client';

import React from 'react';

// import required modules
// import { Navigation } from 'swiper';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import Colect from '@public/colect.svg';
import Icon from '@public/icon.svg';
import Plan from '@public/plan.svg';
import ProcessIcon from '@public/process.svg';
import Processing from '@public/processing.svg';
import Arrow from '@public/slide-arrow.svg';
import View from '@public/view.svg';

// import 'swiper/css/navigation';
// Import Swiper styles
// import 'swiper/css';

const process = [
  {
    icon: <Colect />,
    title: 'Coleta e análise',
    description:
      'Padronizamos e organizamos as informações das empresas de forma estruturada.',
  },
  {
    icon: <Processing />,
    title: 'Processamento',
    description:
      'Fazemos as leitura de todos os dados da propriedade e culturas.',
  },
  {
    icon: <View />,
    title: 'Visualizações',
    description:
      'Geramos em segundos painéis praticos e intuitivos, com as informações fundamentais, que possimilitam analizes profundas sobre todos os aspectos da empresa, tornando as decisões informadas e acertivas.',
  },
  {
    icon: <Plan />,
    title: 'Plano de Ação',
    description:
      'Geramos em segundos painéis praticos e intuitivos, com as informações fundamentais.',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="container my-20 mb-10 flex max-w-screen-lg flex-col gap-24 overflow-hidden sm:mb-7 md:overflow-auto lg:my-40 lg:mb-40">
      <header className="flex flex-col gap-6 sm:gap-16">
        <div className="h-3 w-3 rounded-full bg-green" />

        <div className="flex justify-between">
          <h1 className="w-full text-2xl font-bold leading-snug text-blue-dark sm:w-3/5 sm:text-4xl">
            Estudamos a fundo a sua operação, coletamos dados e damos soluções
          </h1>
          <Icon className="hidden opacity-25 [--color-a:#D1D1D1] [--color-b:#D1D1D1] sm:flex" />
        </div>
      </header>
      <div className="relative">
        {/* <Swiper
          modules={[Navigation]}
          navigation={true}
          className="mySwiper mr-16"
          slidesPerView={4}
          spaceBetween={60}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 55,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        >
          {React.Children.toArray(
            process.map(({ description, icon, title }) => (
              <SwiperSlide className="text-sm">
                <section className="flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    {icon}
                    <ProcessIcon />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-blue-dark">{title}</h1>
                    <p className="text-gray-darker">{description}</p>
                  </div>
                </section>
              </SwiperSlide>
            )),
          )}
        </Swiper> */}

        <ul className="flex justify-start gap-16 overflow-x-auto sm:mr-16 sm:justify-between sm:overscroll-x-none">
          {React.Children.toArray(
            process.map(({ description, icon, title }) => (
              <li className="w-full text-sm sm:w-auto sm:flex-1">
                <article className="flex flex-col gap-8 py-5 sm:py-0">
                  <div className="flex items-center justify-between">
                    {icon}
                    <ProcessIcon />
                  </div>
                  <header className="flex flex-col gap-3">
                    <h2 className="font-bold text-blue-dark">{title}</h2>
                    <p className="text-gray-darker">{description}</p>
                  </header>
                </article>
              </li>
            )),
          )}
        </ul>

        <button className="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:flex">
          <Arrow className="stroke-black" />
        </button>
      </div>
    </section>
  );
};
