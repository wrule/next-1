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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        'gradient-medium': 'gradient 10s ease infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'pulse-delay': 'pulse 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        shimmer: {
          '0%': {
            opacity: '0.4',
          },
          '50%': {
            opacity: '0.7',
          },
          '100%': {
            opacity: '0.4',
          },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
};
export default config;
