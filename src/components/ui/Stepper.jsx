const Stepper = ({ 
  steps = [], 
  currentStep = 1, 
  className = '',
  orientation = 'horizontal',
  showStepInfo = true
}) => {
  
  const getStepStatus = (stepId) => {
    if (currentStep > stepId) return 'completed'
    if (currentStep === stepId) return 'current'
    return 'upcoming'
  }

  const getStepClasses = (status) => {
    const baseClasses = "flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 relative z-10 border-2"
    
    switch (status) {
      case 'completed':
        return `${baseClasses} border-primary-600 bg-primary-600 text-white shadow-lg transform scale-110 ring-2 ring-primary-200`
      case 'current':
        return `${baseClasses} border-primary-600 bg-white text-primary-600 ring-4 ring-primary-100`
      case 'upcoming':
        return `${baseClasses} border-gray-300 bg-white text-gray-500`
      default:
        return baseClasses
    }
  }

  const getLineStatus = (stepIndex) => {
    if (currentStep > stepIndex + 1) return 'completed'
    return 'upcoming'
  }

  if (orientation === 'vertical') {
    return (
      <div className={`flex flex-col ${className}`}>
        {steps.map((step, index) => {
          const status = getStepStatus(step.id)
          return (
            <div key={step.id} className="flex items-start">
              <div className="flex flex-col items-center">
                <div className={getStepClasses(status)}>
                  {status === 'completed' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-0.5 h-12 my-2 transition-colors duration-300 ${
                    getLineStatus(index) === 'completed' ? 'bg-primary-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
              <div className="ml-4 pb-8">
                <h3 className={`text-sm font-medium ${
                  status === 'current' ? 'text-primary-600' : 
                  status === 'completed' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`mb-12 w-full max-w-2xl mx-auto ${className}`}>
      {/* Horizontal Progress Line */}
      <div className="relative flex items-center justify-between w-full mb-4">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
        
        {/* Steps */}
        {steps.map((step, index) => {
          const status = getStepStatus(step.id)
          const lineStatus = getLineStatus(index)
          
          return (
            <div key={step.id} className="relative flex items-center justify-center">
              {/* Step Circle */}
              <div className={getStepClasses(status)}>
                {status === 'completed' ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              
              {/* Completed Line Segment */}
              {index < steps.length - 1 && lineStatus === 'completed' && (
                <div 
                  className="absolute top-1/2 left-5 h-0.5 bg-primary-600 -translate-y-1/2"
                  style={{ 
                    width: `calc(${100 / (steps.length - 1)}vw - 40px)`,
                    maxWidth: `calc(100% / ${steps.length - 1} * ${steps.length} - 40px)`
                  }}
                ></div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Current Step Info */}
      {showStepInfo && (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            {steps.find(step => step.id === currentStep)?.title}
          </h2>
          <p className="text-gray-600">
            {steps.find(step => step.id === currentStep)?.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default Stepper 