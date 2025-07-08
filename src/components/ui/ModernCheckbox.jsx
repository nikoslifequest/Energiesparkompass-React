import { forwardRef } from 'react'

const ModernCheckbox = forwardRef(({ 
  label,
  description,
  checked = false,
  onChange,
  required = false,
  error,
  disabled = false,
  className = '',
  ...props 
}, ref) => {

  const checkboxClasses = `
    w-5 h-5 rounded-lg border-2 
    text-primary-600 focus:ring-2 focus:ring-primary-500 
    transition-all duration-200
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={checkboxClasses}
            {...props}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          {label && (
            <label className={`block text-base font-medium text-gray-900 ${disabled ? 'opacity-50' : 'cursor-pointer'}`}>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          
          {description && (
            <p className={`mt-1 text-sm text-gray-600 ${disabled ? 'opacity-50' : ''}`}>
              {description}
            </p>
          )}
        </div>
      </div>
      
      {error && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        </div>
      )}
    </div>
  )
})

ModernCheckbox.displayName = 'ModernCheckbox'

export default ModernCheckbox 