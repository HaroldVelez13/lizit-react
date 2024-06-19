import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          '50': '#3478D7',
          '100': '#e4e9fb',
          '200': '#cdd7f8',
          '300': '#afbbf2',
          '400': '#8e99eb',
          '500': '#7377e1',
          '600': '#5954d2',
          '700': '#4f48ba',
          '800': '#403d96',
          '900': '#393778',
          '950': '#222046',
        },
      },
    },
  },
  plugins: [],
};
export default config;
