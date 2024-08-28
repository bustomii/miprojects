import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lavender: {
          50: "#f5f3ff",
          100: "#ede9ff",
          200: "#d6ccff",
          300: "#bfb0ff",
          400: "#5D5CDC",
          500: "#2d00f7",
          600: "#2900e1",
          700: "#1e00b4",
          800: "#18008a",
          900: "#120062",
        },
      },
    },
  },
  plugins: [],
};
export default config;
