import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  ...props 
}, ref) => {

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform"

  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-green-600 text-white hover:from-primary-700 hover:to-green-700 focus:ring-primary-500 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105",
    secondary: "bg-secondary-800 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105",
    outline: "border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105",
    ghost: "text-primary-600 hover:bg-primary-50 focus:ring-primary-500 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105",
    link: "text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline focus:ring-primary-500"
  }

  const sizes = {
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg", 
    lg: "px-6 py-3 text-lg rounded-lg",
    xl: "px-8 py-4 text-xl rounded-xl"
  }

  const widthClass = fullWidth ? "w-full" : ""

  const combinedClasses = [
    baseStyles,
    variants[variant],
    sizes[size],
    widthClass,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      ref={ref}
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button 