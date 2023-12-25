import Image from 'next/image';

import SlideArrow from '@public/slide-arrow.svg';

import tractor from '@public/tractor.jpeg';
import Solutions from './Swipers/Solutions';

export const Slides = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full">
      <Image
        src={tractor}
        alt="tractor"
        className="max-h-80 w-full object-cover object-center shrink-0 lg:max-h-none lg:max-w-[350px] 2xl:max-w-[500px]"
      />
      <div className="flex lg:flex-grow w-full items-center justify-between bg-green text-white">
        <div className="w-full h-full px-10 lg:px-20 2xl:px-44">
          <Solutions />
        </div> 
        <button className="hidden h-full items-center bg-blue-darker px-6 lg:flex">
          <SlideArrow />
        </button>
      </div>
    </div>
  );
};
