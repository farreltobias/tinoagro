/* eslint-disable no-empty-pattern */
import React from 'react';

import parser from 'html-react-parser';

import AccordionComponent from '../AccordeonComponent';

import { AccordeonType, ListDetails } from '@/@types/products';

interface MainAdvantagesProps {
  secundaryTitle?: string;
  secundaryDescription?: string;
  accordeons?: AccordeonType[] | [] | undefined;
  descriptionDetails?: string;
  listDetails?: {
    activatedBall: boolean;
    list: ListDetails[];
  };
}

export default function MainAdvantages({
  secundaryTitle,
  secundaryDescription,
  accordeons = [],
  descriptionDetails,
  listDetails = {
    activatedBall: false,
    list: [],
  },
}: MainAdvantagesProps) {
  const halfLength = Math.ceil(accordeons && accordeons.length / 2);

  return (
    <section className="bg-blue py-14 text-white md:py-44">
      <div className="container max-w-screen-lg">
        {secundaryTitle && (
          <div
            className={`mb-20 flex w-full flex-col items-start justify-between gap-10 text-start md:flex-row md:items-center `}
          >
            <h2 className="text-4xl font-bold md:text-[43px] ">
              {secundaryTitle}
            </h2>
            {secundaryDescription && (
              <p className="w-full max-w-2xl text-sm font-medium">
                {secundaryDescription}
              </p>
            )}
          </div>
        )}

        {accordeons.length > 0 && (
          <div className="flex w-full flex-col gap-3 md:flex-row">
            <div className="flex w-full flex-col gap-3 md:w-1/2">
              {React.Children.toArray(
                accordeons
                  .slice(0, halfLength)
                  .map((item) => (
                    <AccordionComponent item={item} key={item.id} />
                  )),
              )}
            </div>

            <div className="flex w-full flex-col gap-3 md:w-1/2">
              {React.Children.toArray(
                accordeons
                  .slice(halfLength)
                  .map((item) => (
                    <AccordionComponent item={item} key={item.id} />
                  )),
              )}
            </div>
          </div>
        )}

        {descriptionDetails && (
          <p
            className={`w-full max-w-5xl text-sm font-medium ${
              descriptionDetails ? '' : 'mt-11'
            }`}
          >
            {parser(descriptionDetails)}
          </p>
        )}

        {listDetails.list.length > 0 && (
          <ul className="mt-20 flex w-full flex-col gap-14">
            {React.Children.toArray(
              listDetails.list.map((item) => (
                <li
                  className={`flex w-full flex-col text-white ${
                    !listDetails.activatedBall ? 'gap-8' : ''
                  }`}
                >
                  <h3 className="text-xl font-bold">
                    {listDetails.activatedBall && `•`} {item.title}
                  </h3>
                  <p className="text-lg font-normal">{item.description}</p>
                </li>
              )),
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
