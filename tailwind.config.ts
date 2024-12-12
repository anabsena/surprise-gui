import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        parisienne: ['"Parisienne"', 'cursive'], 
        poppins: ['"Poppins"', "sans-serif"],
        sulphur_point: ['"Sulphur point"', "sans-serif"],
        // Nome personalizado
      },
    },
  },
  plugins: [],
} satisfies Config;
