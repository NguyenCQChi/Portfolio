const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "930px" },
			// => @media (max-width: 930px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
      
      xs: { max: "390px" }
      // => @media (max-width: 390px) { ... }
    },
    extend: {
      colors: {
        'primary': {
          '50': '#E2EEF8',
          '100': '#C5DEF2',
          '200': '#8ABCE5',
          '300': '#4C98D7',
          '400': '#2875B3',
          '500': '#1B4F79', // main
          '600': '#153E60',
          '700': '#102E47',
          '800': '#0B2132',
          '900': '#061019'
        },
        'secondary': {
          '50': '#FCF5E9',
          '100': '#F9ECD2',
          '200': '#F3D9A5',
          '300': '#ECC679',
          '400': '#E6B34C',
          '500': '#E09F1F',
          '600': '#B38019',
          '700': '#866013',
          '800': '#5A400C',
          '900': '#2D2006'
        },
        'black': {
          '50': '#E6E6E6',
          '100': '#CCCCCC',
          '200': '#999999',
          '300': '#666666',
          '400': '#333333',
          '500': '#000000',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'green': {
          '50': '#E2FEF8',
          '100': '#C5FCF0',
          '200': '#8AFAE1',
          '300': '#50F7D3',
          '400': '#15F4C4',
          '500': '#09C299',
          '600': '#079C7C',
          '700': '#05755D',
          '800': '#30C0D1',
          '900': '#28a8b8',
        },
        'grey': {
          '50': '#EDEEF3',
          '100': '#DADDE6', 
          '200': '#B6BBCE',
          '300': '#A3AAC2',
          '400': '#667299',
          '500': '#525B7A',
          '600': '#424962',
          '700': '#313649',
          '800': '#292E3D',
          '900': '#101218',
        },
        'red': {
          '50': '#fef2f2',
          '100': '#f8dfdb', 
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ef4444',
          '600': '#fc221c',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#40140E',
        },
        'orange': '#E9A57D',
        'dark_orange': '#c4845e'
      },
      fontFamily: {
        'sans': ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'xl': [
          '0px 8.78079px 11.7077px -2.92693px rgba(17, 24, 39, 0.1)',
          '0px 2.92693px 4.39039px -1.46346px rgba(17, 24, 39, 0.05)',
        ]
      },
      display: ['hover', 'focus', 'group-hover']
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none'
        }
      })
    })
  ],
  prefix: '',
  important: true,
}
