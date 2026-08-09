import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#eef2f8',
          100: '#d4deef',
          200: '#a9bddf',
          300: '#7e9ccf',
          400: '#537bbf',
          500: '#285aaf',
          600: '#1e4485',
          700: '#163265',
          800: '#0f2245',
          900: '#081428',
          950: '#040a14',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
