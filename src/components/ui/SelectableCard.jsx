const SelectableCard = ({ 
  children,
  icon,
  title,
  description,
  isSelected = false,
  onClick,
  disabled = false,
  className = '',
  variant = 'default', // 'default', 'compact'
  ...props 
}) => {
  
  const baseStyles = "relative cursor-pointer transition-all duration-200 hover:shadow-md rounded-lg border-2"
  
  const stateStyles = isSelected 
    ? "border-primary-500 bg-primary-50 shadow-md ring-2 ring-primary-500 ring-opacity-50" 
    : "border-gray-200 bg-white hover:border-gray-300"

  const disabledStyles = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : ""

  const variantStyles = {
    default: "p-6",
    compact: "p-4"
  }

  const combinedClasses = [
    baseStyles,
    stateStyles,
    disabledStyles,
    variantStyles[variant],
    className
  ].filter(Boolean).join(' ')

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <div 
      className={combinedClasses} 
      onClick={handleClick}
      {...props}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <>
          <div className="absolute top-3 right-3">
            <div className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 rounded-lg ring-2 ring-primary-500 ring-opacity-50 pointer-events-none"></div>
        </>
      )}

      {/* Content */}
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        {icon && (
          <div className={`text-center mb-4 ${variant === 'compact' ? 'text-3xl' : 'text-4xl'}`}>
            {icon}
          </div>
        )}

        {/* Title */}
        {title && (
          <h3 className={`font-medium text-gray-900 text-center mb-3 ${
            variant === 'compact' ? 'text-base' : 'text-lg'
          }`}>
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className={`text-gray-500 text-center ${
            variant === 'compact' ? 'text-xs' : 'text-sm'
          }`}>
            {description}
          </p>
        )}

        {/* Custom Children */}
        {children}
      </div>
    </div>
  )
}

export default SelectableCard 