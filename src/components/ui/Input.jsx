import { forwardRef } from 'react'

const Input = forwardRef(({ 
  label,
  error,
  helperText,
  required = false,
  className = '',
  type = 'text',
  ...props 
}, ref) => {

  const baseStyles = "w-full px-4 py-3 border rounded-lg transition-all focus:ring-2 focus:border-transparent"
  
  const stateStyles = error 
    ? "border-red-300 focus:ring-red-500" 
    : "border-gray-300 focus:ring-primary-500"

  const combinedClasses = [baseStyles, stateStyles, className].filter(Boolean).join(' ')

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        className={combinedClasses}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input 