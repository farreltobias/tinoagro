'use client';

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

import Icon from '@public/icon.svg';
import Logo from '@public/logo.svg';

const items = [
  {
    title: 'Nossas soluções',
    links: [
      {
        label: 'Gestão de custos',
        href: '/',
      },
      {
        label: 'Unify',
        href: '/',
      },
      {
        label: 'Unify',
        href: '/',
      },
      {
        label: 'Reading',
        href: '/',
      },
      {
        label: 'Know',
        href: '/',
      },
    ],
  },
  {
    title: 'A Tinoagro',
    links: [
      {
        label: 'Nossos resultados',
        href: '/',
      },
      {
        label: 'O que fazemos',
        href: '/',
      },
      {
        label: 'O que fazemos',
        href: '/',
      },
    ],
  },
  {
    title: 'A Tinoagro',
    links: [
      {
        label: 'Nossos resultados',
        href: '/',
      },
      {
        label: 'O que fazemos',
        href: '/',
      },
      {
        label: 'O que fazemos',
        href: '/',
      },
    ],
  },
  {
    title: 'Fale conosco',
    links: [
      {
        label: 'contato@tinoagro.com.br',
        href: '/',
      },
      {
        label: '43 99665-4101',
        href: '/',
      },
    ],
  },
];

const footerItems = [
  {
    label: 'Todos os direitos reservados',
    href: '/',
  },
  {
    label: 'Termos de uso',
    href: '/',
  },
  {
    label: 'Política de privacidade',
    href: '/',
  },
  {
    label: (
      <>
        Development <span className="font-bold">Lets</span>
      </>
    ),
    href: '/',
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-50 -mt-[4rem] flex w-full flex-col items-center rounded-t-[4rem] bg-blue text-sm text-white shadow-[0_-26px_94px] shadow-[rgba(0,0,0,0.15)]">
      <Logo className="my-20" />
      <div className="container mb-11 flex max-w-screen-lg flex-col gap-8">
        <ul className="flex w-full justify-between">
          {React.Children.toArray(
            items.map(({ title, links }) => (
              <li className="flex flex-col gap-5">
                <div className="flex items-end gap-2">
                  <div className="mb-1 h-1 w-1 rounded-full bg-green" />
                  <span className="font-bold">{title}</span>
                </div>
                <ul className="ml-3 flex flex-col gap-2">
                  {links.map(({ label, href }) => (
                    <li>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            )),
          )}
        </ul>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Tinoagro Soluções Agro</h3>
            <p>CNPJ: 23.187.379.0001/96</p>
          </div>
          <Icon className="h-20 w-20" />
          <div className="flex flex-col gap-1">
            <span className="font-bold">Estamos no insta!</span>
            <Link
              target="_blank"
              href="https://www.instagram.com/tinoagrotech"
              className="flex items-center gap-2 text-xs"
            >
              <FaInstagram className="inline-block text-green" />
              tinoagrotech
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#091662] py-7">
        <ul className="container flex max-w-screen-lg gap-5 pl-12 text-gray-light">
          {React.Children.toArray(
            footerItems.map(({ label, href }) => (
              <li>
                <Link href={href}>{label}</Link>
              </li>
            )),
          )}
        </ul>
      </div>
    </footer>
  );
};
