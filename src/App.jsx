import { useState } from 'react'
import HomePage from './pages/HomePage'
import WizardPage from './pages/WizardPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedWizardService, setSelectedWizardService] = useState(null)

  const handleNavigateToWizard = (serviceId) => {
    setSelectedWizardService(serviceId)
    setCurrentPage('wizard')
  }

  const handleBackToMain = () => {
    setCurrentPage('home')
    setSelectedWizardService(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'home' && (
        <HomePage onNavigateToWizard={handleNavigateToWizard} />
      )}
      
      {currentPage === 'wizard' && (
        <WizardPage 
          selectedService={selectedWizardService}
          onBackToMain={handleBackToMain}
        />
      )}
    </div>
  )
}

export default App 