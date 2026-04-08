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
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          elevated: 'var(--color-bg-elevated)',
          card: 'var(--color-bg-card)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          light: 'var(--color-border-light)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        brand: {
          DEFAULT: 'var(--color-brand)',
          hover: 'var(--color-brand-hover)',
          light: 'var(--color-brand-light)',
          subtle: 'var(--color-brand-subtle)',
          glow: 'var(--color-brand-glow)',
        },
        wa: {
          DEFAULT: 'var(--color-wa)',
          dark: 'var(--color-wa-dark)',
          subtle: 'var(--color-wa-subtle)',
          glow: 'var(--color-wa-glow)',
        },
        ig: {
          1: 'var(--color-ig-1)',
          2: 'var(--color-ig-2)',
          3: 'var(--color-ig-3)',
          subtle: 'var(--color-ig-subtle)',
          glow: 'var(--color-ig-glow)',
        },
        primary: {
          400: 'var(--color-brand-light)',
          500: 'var(--color-brand)',
          600: 'var(--color-brand-hover)',
        },
        teal: {
          400: 'var(--color-wa)',
          500: 'var(--color-wa)',
          600: 'var(--color-wa-dark)',
        },
        ink: {
          DEFAULT: 'var(--color-bg-primary)',
          800: 'var(--color-bg-secondary)',
          900: 'var(--color-bg-primary)',
        },
        accent: {
          lime: 'var(--color-wa)',
          'lime-dark': 'var(--color-wa-dark)',
        },
        gray: {
          50: 'var(--color-bg-secondary)',
          100: 'var(--color-bg-elevated)',
          200: 'var(--color-border)',
          300: 'var(--color-border-light)',
          400: 'var(--color-text-muted)',
          500: 'var(--color-text-secondary)',
          600: 'var(--color-text-secondary)',
          700: 'var(--color-text-primary)',
          800: 'var(--color-text-primary)',
          900: 'var(--color-text-primary)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-heading)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

