import { notFound } from 'next/navigation';

import { Contact } from '@/components/Home/Contact';
import { AboutProducts } from '@/components/Produtos/About';
import MainAdvantages from '@/components/Produtos/MainAdvantages';
import ModuleSolutions from '@/components/Produtos/ModuleSolutions';
import OtherProducts from '@/components/Produtos/OtherProducts';
import { TopInformation } from '@/components/Produtos/TopInformation';
import { getProducts } from '@/services/products';

export const metadata = {
  title: 'Notícias',
};

export default async function NewsDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = getProducts(params.slug);

  if (data === null) {
    return notFound();
  }

  return (
    <article className='pt-24 md:pt-20 lg:pt-24'>
      <TopInformation type={params.slug} />
      <AboutProducts data={data} />
      <MainAdvantages
        secundaryTitle={data.secundaryTitle}
        secundaryDescription={data.secundaryDescription}
        accordeons={data.accordeons}
        descriptionDetails={data.descriptionDetails}
        listDetails={data.listDetails}
      />
      {data.slug === 'linha-smart' && <ModuleSolutions />}

      <OtherProducts pageActive={data.slug} />
      <Contact />
    </article>
  );
}
