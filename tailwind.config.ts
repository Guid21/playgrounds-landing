import type { Config } from 'tailwindcss';
import type {
  RecursiveKeyValuePair,
  ResolvableTo,
} from 'tailwindcss/types/config';

const colors: ResolvableTo<RecursiveKeyValuePair<string, string>> = {
  'gray-50': '#F9FAFB',
  'gray-300': '#D0D5DD',
  'gray-500': '#667085',
  'gray-600': '#475467',
  'gray-700': '#344054',
  'gray-900': '#101828',
  'brand-800': '#53389E',
  'brand-700': '#6941C6',
  'brand-600': '#7F56D9',
  'brand-500': '#9E77ED',
  'brand-300': '#D6BBFB',
  'brand-200': '#E9D7FE',
  'brand-100': '#F4EBFF',
  'brand-50': '#F9F5FF',
  'error-500': '#F04438',
  'error-300': '#FDA29B',
  'base-wite': '#ffffff',
  'border-disabled_subtle': '#E9EAEB',
  'fg-disabled': '#A4A7AE',
  'text-primary': '#101828',
};

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '5.5': '22px',
      },
      colors,
      boxShadow: {
        'active-input': `0px 1px 2px ${colors['gray-900']}0D, 0px 0px 0px 4px ${colors['brand-500']}3D`,
        'error-input': `0px 1px 2px ${colors['gray-900']}0D, 0px 0px 0px 4px ${colors['error-500']}3D`,
      },
      fontSize: {
        'display-lg-semibold': [
          '48px',
          { lineHeight: '60px', fontWeight: '600' },
        ],
        'display-md-semibold': [
          '36px',
          { lineHeight: '44px', fontWeight: '600' },
        ],
        'display-xl-medium': [
          '60px',
          {
            lineHeight: '72px',
            fontWeight: '500',
          },
        ],
        'display-md-medium': [
          '36px',
          {
            lineHeight: '44px',
            fontWeight: '500',
          },
        ],
        'custom-md-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'custom-sm-medium': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'custom-xl-regular': [
          '20px',
          { lineHeight: '30px', fontWeight: '400' },
        ],
        'custom-lg-regular': [
          '18px',
          { lineHeight: '28px', fontWeight: '400' },
        ],
        'custom-md-regular': [
          '16px',
          { lineHeight: '24px', fontWeight: '400' },
        ],
        'custom-sm-regular': [
          '14px',
          { lineHeight: '20px', fontWeight: '400' },
        ],
        'custom-xl-semibold': [
          '20px',
          { lineHeight: '30px', fontWeight: '600' },
        ],
        'custom-lg-semibold': [
          '18px',
          { lineHeight: '28px', fontWeight: '600' },
        ],
        'custom-md-semibold': [
          '16px',
          { lineHeight: '24px', fontWeight: '600' },
        ],
      },
    },
  },
} satisfies Config;
