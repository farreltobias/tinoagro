'use client';

import { NextPage } from 'next';

import { About } from '@/components/Home/About';
import { CallToAction } from '@/components/Home/CallToAction';
import { Contact } from '@/components/Home/Contact';
import { Grass } from '@/components/Home/Grass';
import { Infromation } from '@/components/Home/Infromation';
import { Process } from '@/components/Home/Process';
import { Results } from '@/components/Home/Results';
import { Slides } from '@/components/Home/Slides';
import { Solutions } from '@/components/Home/Solutions';
import { Working } from '@/components/Home/Working';

const Home: NextPage = () => {
  return (
    <article>
      <CallToAction />
      <Infromation />
      <Grass />
      <Slides />
      <Process />
      <div className="rounded-t-[4rem] bg-blue pb-64 pt-32 text-white">
        <Solutions />
        <Working />
        <Results />
      </div>
      <Contact />
      <About />
    </article>
  );
};

export default Home;
