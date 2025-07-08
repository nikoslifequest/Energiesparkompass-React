import { forwardRef } from 'react'

const ModernRadioGroup = forwardRef(({ 
  label,
  name,
  options = [],
  value,
  onChange,
  required = false,
  error,
  layout = 'grid', // 'grid', 'vertical', 'horizontal'
  className = ''
}, ref) => {

  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-4'
      case 'vertical':
        return 'space-y-4'
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
    }
  }

  const handleChange = (optionValue) => {
    if (onChange) {
      onChange({ target: { name, value: optionValue } })
    }
  }

  return (
    <div className={`w-full ${className}`} ref={ref}>
      {label && (
        <label className="block text-lg font-semibold text-gray-900 mb-6">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className={getLayoutClasses()}>
        {options.map((option) => {
          const isSelected = value === option.value
          const IconComponent = option.icon
          
          return (
            <div
              key={option.value}
              className={`
                relative cursor-pointer transition-all duration-200
                rounded-2xl border-2 p-6 text-center
                hover:shadow-lg hover:scale-105
                ${isSelected 
                  ? 'border-primary-500 bg-primary-50 shadow-lg' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
                }
              `}
              onClick={() => handleChange(option.value)}
            >
              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Hidden Radio Input */}
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={() => handleChange(option.value)}
                className="sr-only"
              />

              {/* Icon */}
              {IconComponent && (
                <div className={`flex justify-center mb-4 ${isSelected ? 'text-primary-600' : 'text-gray-600'}`}>
                  <IconComponent size={32} weight="duotone" />
                </div>
              )}

              {/* Content */}
              <div className="space-y-2">
                <h3 className={`font-semibold text-base ${isSelected ? 'text-primary-900' : 'text-gray-900'}`}>
                  {option.label}
                </h3>
                
                {option.description && (
                  <p className={`text-sm ${isSelected ? 'text-primary-700' : 'text-gray-600'}`}>
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
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

ModernRadioGroup.displayName = 'ModernRadioGroup'

export default ModernRadioGroup 