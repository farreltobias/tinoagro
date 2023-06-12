import Image from 'next/image';

import Icon from '@public/icon.svg';
import SlideArrow from '@public/slide-arrow.svg';

import tractor from '@public/tractor.jpeg';

export const Slides = () => {
  return (
    <div className="flex">
      <Image src={tractor} alt="tractor" />
      <div className="flex w-full items-center justify-between bg-green text-white">
        <div className="ml-auto flex w-5/6 flex-col gap-24">
          <div className="flex flex-col gap-9">
            <Icon className="h-16 w-16" />
            <h2 className="max-w-lg text-4xl font-bold">
              Com a nossa solução, você tem acesso a essas informações em
              segundos, na palma da mão
            </h2>
          </div>
          <div className="flex h-1 gap-5">
            <div className="h-full w-12 bg-green-light" />
            <div className="h-full w-24 bg-blue-darker" />
            <div className="h-full w-12 bg-green-light" />
          </div>
        </div>
        <button className="h-full bg-blue-darker px-6">
          <SlideArrow />
        </button>
      </div>
    </div>
  );
};
