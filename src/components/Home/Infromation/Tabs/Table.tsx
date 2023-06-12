import React from 'react';

import { TableType } from '@/@types/tab';

type TableProps = {
  table: TableType[];
};

export const Table: React.FC<TableProps> = ({ table }) => {
  return (
    <table className="my-5 flex w-full flex-col gap-5">
      <thead>
        <tr className="flex font-bold">
          {React.Children.toArray(
            table.map(({ title }) => (
              <th className="flex-1 text-center">{title}</th>
            )),
          )}
        </tr>
      </thead>
      <tbody>
        <tr className="flex">
          {React.Children.toArray(
            table.map(({ description }) => (
              <td className="flex-1 text-center text-xl text-gray-dark">
                {description}
              </td>
            )),
          )}
        </tr>
      </tbody>
    </table>
  );
};
