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
import { SidebarProvider } from '@/contexts/SidebarContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Home: NextPage = () => {
  const background =
    'bg-gradient-to-br bg-no-repeat from-blue-darker from-20% via-green-darker via-65% to-green-dark';

  return (
    <>
      <CallToAction />
      <Infromation />
      <Grass />
      <Slides />
      <Process />
      <div className="flex w-full flex-col overflow-hidden bg-blue pb-32 pt-20 text-white sm:rounded-t-[4rem] sm:pb-64 sm:pt-32">
        <Solutions />
        <Working />
        <Results />
      </div>

      <Contact />
      <About />
    </>
  );
};

export default Home;
