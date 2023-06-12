'use client';

import { NextPage } from 'next';

import { CallToAction } from '@/components/Home/CallToAction';
import { Grass } from '@/components/Home/Grass';
import { Infromation } from '@/components/Home/Infromation';
import { Process } from '@/components/Home/Process';
import { Slides } from '@/components/Home/Slides';

const Home: NextPage = () => {
  return (
    <article>
      <CallToAction />
      <Infromation />
      <Grass />
      <Slides />
      <Process />
    </article>
  );
};

export default Home;
