import { fontFamily } from 'tailwindcss/defaultTheme';

import HeadlessUI from '@headlessui/tailwindcss';
import { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      sans: ['var(--font-popins)', ...fontFamily.sans],
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      padding: '2rem',
      center: true,
    },
    colors: {
      blue: {
        lighter: '#004BE9',
        light: '#2643E4',
        DEFAULT: '#15157E',
        dark: '#030B34',
        darker: '#000D52',
      },
      green: {
        light: '#95FACD',
        DEFAULT: '#40C851',
        dark: '#24B06B',
        darker: '#056B3B',
      },
      white: '#fff',
      black: '#000',
      gray: {
        light: '#D9D9D9',
        DEFAULT: '#F5F5F5',
        dark: '#9F9F9F',
        darker: '#4F4F4F',
      },
    },
    extend: {
      // background: {
      //   'main-linear':
      //     'linear-gradient(127.29deg, rgba(0, 13, 82, 0.97) 20.55%, rgba(5, 107, 59, 0.97) 64.05%, rgba(11, 205, 36, 0.97) 109.13%);',
      // },
    },
  },
  plugins: [HeadlessUI],
} satisfies Config;
