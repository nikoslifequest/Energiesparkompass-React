const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center font-medium rounded-full"
  
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-primary-100 text-primary-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    outline: "border border-gray-300 text-gray-700 bg-white",
    'outline-primary': "border border-primary-300 text-primary-700 bg-primary-50"
  }
  
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base"
  }

  const combinedClasses = [
    baseStyles,
    variants[variant],
    sizes[size],
    className
  ].filter(Boolean).join(' ')

  return (
    <span className={combinedClasses} {...props}>
      {children}
    </span>
  )
}

export default Badge 