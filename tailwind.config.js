/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',   // Sehr helles Grün
          100: '#dcfce7',  // Helles Grün
          200: '#bbf7d0',  // Sanftes Grün
          300: '#86efac',  // Mittleres Grün
          400: '#4ade80',  // Lebendiges Grün
          500: '#22c55e',  // Standard Grün
          600: '#16a34a',  // Kräftiges Grün (Primary)
          700: '#15803d',  // Dunkles Grün
          800: '#166534',  // Sehr dunkles Grün
          900: '#14532d',  // Tiefes Waldgrün
          950: '#052e16',  // Evergreen
        },
        // Oxford blue inspired secondary palette
        // 800 approximates classic Oxford Blue (#002147)
        secondary: {
          50: '#f2f6fb',
          100: '#e6eef7',
          200: '#c7d7ee',
          300: '#a8c0e5',
          400: '#6a93d2',
          500: '#2e66bf',
          600: '#224e92',
          700: '#193a6d',
          800: '#002147',
          900: '#001733',
        },
        accent: {
          50: '#fefce8',   // Warmes Gelb (Energie)
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Energie-Orange
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          '"DM Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        heading: [
          '"DM Sans"',
          'Inter',
          'sans-serif',
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.0125em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.0125em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.0125em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.0125em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.015em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      boxShadow: {
        'energy': '0 4px 14px 0 rgba(22, 163, 74, 0.15)',
        'energy-lg': '0 10px 25px 0 rgba(22, 163, 74, 0.2)',
      },
      backgroundImage: {
        'energy-gradient': 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
        'hero-gradient': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      }
    },
  },
  plugins: [],
} 