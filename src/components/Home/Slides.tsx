import Image from 'next/image';

import Icon from '@public/icon.svg';
import SlideArrow from '@public/slide-arrow.svg';

import tractor from '@public/tractor.jpeg';

export const Slides = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <Image
        src={tractor}
        alt="tractor"
        className="max-h-80 w-full max-w-full object-cover object-center md:max-h-none md:max-w-[420px] lg:max-w-[500px]"
      />
      <div className="flex w-full items-center justify-between bg-green text-white">
        <div className="relative ml-auto flex w-full flex-col gap-24 md:w-5/6">
          <div className="flex flex-col gap-9 px-11 py-20 md:px-6 md:py-0">
            <Icon className="h-16 w-16" />
            <h2 className="max-w-lg text-2xl font-bold sm:text-3xl lg:text-4xl">
              Com a nossa solução, você tem acesso a essas informações em
              segundos, na palma da mão
            </h2>
          </div>
          <div className="absolute -bottom-[60%] flex h-1 w-full justify-center gap-5 xs:-bottom-3/4 md:relative md:justify-start">
            <div className="h-full w-12 rounded-[1px] bg-green-light" />
            <div className="h-full w-24 rounded-[1px] bg-blue-darker" />
            <div className="h-full w-12 rounded-[1px] bg-green-light" />
          </div>
        </div>
        <button className="hidden h-full bg-blue-darker px-6 md:flex">
          <SlideArrow />
        </button>
      </div>
    </div>
  );
};
