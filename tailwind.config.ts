import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#071D2C',
        main: '#031322',
        accent: '#446171',
        'accent-secondary': '#0A2737'
      }
    }
  },
  plugins: []
} satisfies Config;
