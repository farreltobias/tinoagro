import React from 'react';

import { Table } from './Table';

import { TabType } from '@/@types/tab';
import { Tab } from '@headlessui/react';

type TabsProps = {
  tabs: TabType[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <Tab.Group as="div" className="rounded-xl bg-white text-sm shadow-xl">
      <Tab.List className="flex divide-x divide-gray-light/50 rounded-t-xl bg-gray sm:font-semibold">
        {React.Children.toArray(
          tabs.map(({ title }) => (
            <Tab className="flex-1 overflow-hidden py-5 text-sm text-gray-dark outline-none first:rounded-tl-xl last:rounded-tr-xl ui-selected:bg-green ui-selected:text-white ui-not-selected:bg-opacity-50 sm:text-base">
              {title}
            </Tab>
          )),
        )}
      </Tab.List>

      <Tab.Panels>
        {React.Children.toArray(
          tabs.map(({ table }) => (
            <Tab.Panel>
              <Table table={table} />
            </Tab.Panel>
          )),
        )}
      </Tab.Panels>
    </Tab.Group>
  );
};
