// Design Tokens - Zentrale Designwerte für das gesamte System

export const tokens = {
  // Colors
  colors: {
    primary: {
      50: 'primary-50',
      500: 'primary-500', 
      600: 'primary-600',
      700: 'primary-700',
    },
    gray: {
      50: 'gray-50',
      100: 'gray-100',
      200: 'gray-200',
      300: 'gray-300',
      400: 'gray-400',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',
      800: 'gray-800',
      900: 'gray-900',
    },
    semantic: {
      success: 'green-600',
      warning: 'yellow-600', 
      error: 'red-600',
      info: 'blue-600',
    }
  },

  // Spacing Scale
  spacing: {
    none: '0',
    xs: '1',     // 4px
    sm: '2',     // 8px
    md: '4',     // 16px
    lg: '6',     // 24px
    xl: '8',     // 32px
    '2xl': '12', // 48px
    '3xl': '16', // 64px
  },

  // Typography Scale
  typography: {
    sizes: {
      xs: 'text-xs',     // 12px
      sm: 'text-sm',     // 14px
      base: 'text-base', // 16px
      lg: 'text-lg',     // 18px
      xl: 'text-xl',     // 20px
      '2xl': 'text-2xl', // 24px
      '3xl': 'text-3xl', // 30px
      '4xl': 'text-4xl', // 36px
      '5xl': 'text-5xl', // 48px
      '6xl': 'text-6xl', // 60px
    },
    weights: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    leading: {
      tight: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    }
  },

  // Shadows
  shadows: {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },

  // Border Radius
  radius: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  },

  // Breakpoints (for documentation)
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-Index Scale
  zIndex: {
    auto: 'z-auto',
    0: 'z-0',
    10: 'z-10',
    20: 'z-20',
    30: 'z-30',
    40: 'z-40',
    50: 'z-50',
  },

  // Transitions
  transitions: {
    fast: 'transition-all duration-150 ease-in-out',
    normal: 'transition-all duration-300 ease-in-out',
    slow: 'transition-all duration-500 ease-in-out',
  },

  // Focus Rings
  focus: {
    default: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
    error: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
    success: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
  }
}

// Helper-Funktionen für einfachere Verwendung
export const getColor = (path) => {
  const keys = path.split('.')
  return keys.reduce((obj, key) => obj?.[key], tokens.colors)
}

export const getSpacing = (size) => tokens.spacing[size]
export const getShadow = (size) => tokens.shadows[size]
export const getRadius = (size) => tokens.radius[size]
export const getTransition = (speed) => tokens.transitions[speed]

export default tokens 