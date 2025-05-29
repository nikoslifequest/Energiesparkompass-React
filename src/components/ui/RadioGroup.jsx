const RadioGroup = ({ 
  label,
  name,
  options = [],
  value,
  onChange,
  required = false,
  error,
  layout = 'vertical', // 'vertical', 'horizontal', 'grid'
  className = ''
}) => {

  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-4'
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 gap-3'
      default:
        return 'space-y-3'
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className={getLayoutClasses()}>
        {options.map((option) => (
          <label 
            key={option.id || option.value} 
            className={`flex items-start p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-all ${
              layout === 'horizontal' ? 'flex-col items-center text-center min-w-0' : ''
            } ${
              value === option.value ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
            }`}
          >
            <div className={`flex items-center ${layout === 'horizontal' ? 'mb-2' : ''}`}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500 transition duration-150 ease-in-out"
              />
              {layout !== 'horizontal' && (
                <div className="ml-3 flex-1">
                  <div className="font-medium text-gray-900">{option.label}</div>
                  {option.description && (
                    <div className="text-sm text-gray-600">{option.description}</div>
                  )}
                </div>
              )}
            </div>
            
            {layout === 'horizontal' && (
              <div className="text-center">
                <div className="font-medium text-gray-900 text-sm">{option.label}</div>
                {option.description && (
                  <div className="text-xs text-gray-600 mt-1">{option.description}</div>
                )}
              </div>
            )}
          </label>
        ))}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

export default RadioGroup 