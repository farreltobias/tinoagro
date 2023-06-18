import React from 'react';

import { TableType } from '@/@types/tab';

type TableProps = {
  table: TableType[];
};

export const Table: React.FC<TableProps> = ({ table }) => {
  return (
    <table className="my-5 flex w-full flex-col gap-5 px-7">
      <thead className="hidden w-full sm:flex">
        <tr className="flex w-full font-bold">
          {React.Children.toArray(
            table.map(({ title }) => (
              <th className="flex-1 text-center">{title}</th>
            )),
          )}
        </tr>
      </thead>
      <tbody className="grid grid-cols-2 gap-5 xs:grid-cols-3 sm:flex">
        {React.Children.toArray(
          table.map(({ description, title }) => (
            <tr className="flex w-full justify-around">
              <td className="flex w-full flex-col items-center justify-center">
                <span className="mb-3 text-center text-sm font-bold text-[#030B34] sm:hidden">
                  {title}
                </span>
                <span className="flex-1 text-center text-xl text-gray-dark">
                  {description}
                </span>
              </td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  );
};
