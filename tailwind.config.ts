import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: '#E88D7C',
        sage: '#94B5A9',
        cream: '#FDF6F2',
      },
      fontFamily: {
        marcellus: ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;