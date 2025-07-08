import { forwardRef } from 'react'

const ModernInput = forwardRef(({ 
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  error,
  helperText,
  icon,
  className = '',
  disabled = false,
  ...props 
}, ref) => {

  const inputClasses = `
    w-full px-4 py-3 
    bg-white border-2 rounded-xl
    text-gray-900 placeholder-gray-500
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
    transition-all duration-200
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'}
    ${disabled ? 'bg-gray-50 cursor-not-allowed' : ''}
    ${icon ? 'pl-12' : ''}
  `

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-base font-semibold text-gray-900 mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400">
              {icon}
            </div>
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
      </div>
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-600">
          {helperText}
        </p>
      )}
      
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

ModernInput.displayName = 'ModernInput'

export default ModernInput 