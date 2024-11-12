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
        purple: {
          50: '#FAF5FF',    // 最浅，几乎是白色带紫
          100: '#F3E8FF',   // 非常浅的紫色
          200: '#E9D5FF',   // 浅紫色
          300: '#D8B4FE',   // 淡紫色
          400: '#C084FC',   // 中浅紫色
          500: '#A855F7',   // 标准紫色，基准色
          600: '#9333EA',   // 深一点的紫色
          700: '#7E22CE',   // 深紫色
          800: '#6B21A8',   // 暗紫色
          900: '#581C87',   // 最深的紫色
          950: '#3B0764',   // 深褐紫色
        },
        primary: {
          50: '#FFFDF2',    // 最浅，几乎是白色带黄
          100: '#FFF9E0',   // 非常浅的黄色
          200: '#FFF3B8',   // 浅黄色
          300: '#FFE88A',   // 淡黄色
          400: '#FFDD5C',   // 中浅黄色
          500: '#FFD93D',   // 标准 emoji 黄，基准色
          600: '#FFCD1F',   // 深一点的黄色
          700: '#FFBC00',   // 金黄色
          800: '#E6A900',   // 暗金黄
          900: '#CC9600',   // 最深的黄色
          950: '#8C6700',   // 深褐黄色
        },
      },
      animation: {
        'blob': 'blob 25s ease-in-out infinite',
        'blob-reverse': 'blob-reverse 30s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 20s ease-in-out infinite',
        'float-reverse': 'float-reverse 22s ease-in-out infinite',
      },
      keyframes: {
        'blob': {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(60px, -40px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        },
        'blob-reverse': {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(-50px, 40px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(20px, -20px) scale(0.9)',
          },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(20px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
