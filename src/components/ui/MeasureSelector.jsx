const MeasureSelector = ({ 
  measures = [], 
  selectedMeasures = [], 
  onToggle, 
  className = "" 
}) => {
  const handleMeasureToggle = (measureId) => {
    const updatedMeasures = [...selectedMeasures]
    const index = updatedMeasures.indexOf(measureId)
    
    if (index > -1) {
      updatedMeasures.splice(index, 1)
    } else {
      updatedMeasures.push(measureId)
    }
    
    onToggle(updatedMeasures)
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {measures.map((measure) => (
        <div
          key={measure.id}
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
            selectedMeasures.includes(measure.id)
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => handleMeasureToggle(measure.id)}
        >
          <div className="flex items-center">
            <span className="text-2xl mr-3">{measure.icon}</span>
            <span className="font-medium text-gray-900">{measure.label}</span>
            {selectedMeasures.includes(measure.id) && (
              <svg className="ml-auto w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MeasureSelector 