import type { Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#D97706',
        accent: '#FBBF24',
        light: '#F3F4F6',
        dark: '#1F2937',
      },
    },
  },
  plugins: [],
//   plugins: [require("tailwindcss-animate")],
} satisfies Config;
