const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'pumpkin': '#FC7614', // Orange
        'cadet-grey': '#969FAD', // Light Grey
        'bluish-grey': '#7C8798', // Medium Grey
        'ebony-clay': '#262E38', // Dark Blue
        'cinder': '#131518', // Very Dark Blue
      },
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading': ['24px', {
          lineHeight: '30px',
          letterSpacing: '1',
          fontWeight: '700',
        }],
        'heading-md': ['28px', {
          lineHeight: '35px',
          letterSpacing: '1',
          fontWeight: '700',
        }],
        'body': ['14px', {
          lineHeight: '22px',
          letterSpacing: '1',
          fontWeight: '400',
        }],
        'body-md': ['15px', {
          lineHeight: '24px',
          letterSpacing: '1',
          fontWeight: '400',
        }],
        'rating': ['14px', {
          lineHeight: '24px',
          letterSpacing: '1',
          fontWeight: '700',
        }],
        'rating-md': ['16px', {
          lineHeight: '24px',
          letterSpacing: '1',
          fontWeight: '700',
        }],
        'button': ['14px', {
          lineHeight: '18px',
          letterSpacing: '1.86667px',
          fontWeight: '700',
        }],
        'button-md': ['15px', {
          lineHeight: '19px',
          letterSpacing: '2px',
          fontWeight: '700',
        }],
      },
      backgroundImage: {
        'card-gradient': 'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};
