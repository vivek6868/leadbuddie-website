import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#12B8A5',
          600: '#00A39A',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        teal: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#12B8A5',
          600: '#00A39A',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        ink: {
          DEFAULT: '#0B1F33',
          50: '#f0f4f7',
          100: '#d9e2e8',
          200: '#b3c5d1',
          300: '#8da8ba',
          400: '#678ba3',
          500: '#416e8c',
          600: '#35526f',
          700: '#293652',
          800: '#1d2a35',
          900: '#0B1F33',
        },
        accent: {
          lime: '#D4FF00',
          'lime-dark': '#B8E600',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

