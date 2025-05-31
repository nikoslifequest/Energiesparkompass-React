import { forwardRef } from 'react'

// Heading Component für H1-H6
export const Heading = forwardRef(({ 
  as = 'h2',
  size = 'lg',
  weight = 'bold',
  color = 'gray-900',
  className = '',
  children,
  ...props 
}, ref) => {

  const sizes = {
    xs: 'text-xs', // 12px
    sm: 'text-sm', // 14px
    base: 'text-base', // 16px
    lg: 'text-lg', // 18px
    xl: 'text-xl', // 20px
    '2xl': 'text-2xl', // 24px
    '3xl': 'text-3xl', // 30px
    '4xl': 'text-4xl', // 36px
    '5xl': 'text-5xl', // 48px
    '6xl': 'text-6xl', // 60px
  }

  const weights = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }

  const colors = {
    'gray-900': 'text-gray-900',
    'gray-800': 'text-gray-800',
    'gray-700': 'text-gray-700',
    'gray-600': 'text-gray-600',
    'gray-500': 'text-gray-500',
    'primary-600': 'text-primary-600',
    'primary-700': 'text-primary-700',
    'primary-800': 'text-primary-800',
    'primary-900': 'text-primary-900',
    'accent-500': 'text-accent-500',
    'accent-600': 'text-accent-600',
    'white': 'text-white',
    'success-600': 'text-success-600',
    'warning-600': 'text-warning-600',
    'error-600': 'text-error-600',
  }

  const combinedClasses = [
    sizes[size],
    weights[weight],
    colors[color],
    'leading-tight',
    className
  ].filter(Boolean).join(' ')

  const Component = as

  return (
    <Component 
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </Component>
  )
})

// Text Component für Paragraphen und Spans
export const Text = forwardRef(({ 
  as = 'p',
  size = 'base',
  weight = 'normal',
  color = 'gray-700',
  leading = 'normal',
  className = '',
  children,
  ...props 
}, ref) => {

  const sizes = {
    xs: 'text-xs', // 12px
    sm: 'text-sm', // 14px
    base: 'text-base', // 16px
    lg: 'text-lg', // 18px
    xl: 'text-xl', // 20px
  }

  const weights = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }

  const colors = {
    'gray-900': 'text-gray-900',
    'gray-800': 'text-gray-800',
    'gray-700': 'text-gray-700',
    'gray-600': 'text-gray-600',
    'gray-500': 'text-gray-500',
    'gray-400': 'text-gray-400',
    'primary-600': 'text-primary-600',
    'primary-700': 'text-primary-700',
    'primary-800': 'text-primary-800',
    'accent-500': 'text-accent-500',
    'accent-600': 'text-accent-600',
    'white': 'text-white',
    'success-600': 'text-success-600',
    'warning-600': 'text-warning-600',
    'error-600': 'text-error-600',
  }

  const leadings = {
    none: 'leading-none',
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  }

  const combinedClasses = [
    sizes[size],
    weights[weight],
    colors[color],
    leadings[leading],
    className
  ].filter(Boolean).join(' ')

  const Component = as

  return (
    <Component 
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </Component>
  )
})

Heading.displayName = 'Heading'
Text.displayName = 'Text' 