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
        secondary: {
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