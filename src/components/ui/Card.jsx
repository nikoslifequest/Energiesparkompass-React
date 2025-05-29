const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'md',
  ...props 
}) => {
  
  const baseStyles = "bg-white border border-gray-200 rounded-lg"
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-12'
  }
  
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  const combinedClasses = [
    baseStyles,
    paddings[padding],
    shadows[shadow],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  )
}

export default Card 