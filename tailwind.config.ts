import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
export default config;
