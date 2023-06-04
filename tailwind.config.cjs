/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1224px',
        xl: '1400px',
        '2xl': '1536px'
      }
    },
    fontSize: {
      tiny: '0.625rem',
      xs: ['0.75rem', {lineHeight: '1rem'}],
      sm: ['0.875rem', {lineHeight: '1.25rem'}],
      normal: ['0.935rem', {lineHeight: '1.3rem'}],
      base: ['1rem', {lineHeight: '1.5rem'}],
      lg: ['1.125rem', {lineHeight: '1.75rem'}],
      xl: ['1.25rem', {lineHeight: '1.85rem'}],
      h6: ['1.35rem', {lineHeight: '2rem'}],
      h5: ['1.4rem', {lineHeight: '2.25rem'}],
      h4: ['1.45rem', {lineHeight: '2.5rem'}],
      h3: ['1.5rem', {lineHeight: '1'}],
      h2: ['1.6rem', {lineHeight: '1'}],
      h1: ['1.7rem', {lineHeight: '1'}],
      big: ['2.5rem', {lineHeight: '1'}],
      veryBig: ['6rem', {lineHeight: '1'}],
      huge: ['8rem', {lineHeight: '1'}]
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)'
        },
        pen: {
          DEFAULT: 'var(--color-pen)',
          light: 'var(--color-pen-light)',
          dark: 'var(--color-pen-dark)'
        },
        body: {
          DEFAULT: 'var(--color-body)',
          dark: 'var(--color-body-dark)'
        }
      },
      fontFamily: {
        body: [
          'IRANSans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      }
    }
  },
  plugins: [
    require('tailwind-bootstrap-grid')({generateContainer: false}),
    function ({addComponents}) {
      addComponents({
        '.container': {
          width: '100%',
          paddingRight: '15px',
          paddingLeft: '15px',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '720px'
          },
          '@screen lg': {
            maxWidth: '960px'
          },
          '@screen xl': {
            maxWidth: '1140px'
          },
          '@screen 2xl': {
            maxWidth: '1140px'
          }
        }
      });
    }
  ]
};
