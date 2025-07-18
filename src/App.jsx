import { useState } from 'react'
import HomePage from './pages/HomePage'
import WizardPage from './pages/WizardPage'
import AdminDashboard from './pages/AdminDashboard'
import DesignSystemPage from './pages/DesignSystemPage'
import HeizungscheckPage from './pages/HeizungscheckPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedWizardService, setSelectedWizardService] = useState(null)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)

  const handleNavigateToWizard = (serviceId) => {
    setSelectedWizardService(serviceId)
    setCurrentPage('wizard')
  }

  const handleBackToMain = () => {
    setCurrentPage('home')
    setSelectedWizardService(null)
  }

  const handleNavigateToDesignSystem = () => {
    setCurrentPage('design-system')
  }

  const handleNavigateToHeizungscheck = () => {
    setCurrentPage('heizungscheck')
  }

  const handleAdminLogin = () => {
    // Simple password prompt for demo purposes
    const password = prompt('Admin-Passwort eingeben:')
    if (password === 'energieadmin2024') { // You should use a more secure method in production
      setIsAdminAuthenticated(true)
      setCurrentPage('admin')
    } else if (password !== null) { // User didn't cancel
      alert('Falsches Passwort!')
    }
  }

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false)
    setCurrentPage('home')
  }

  // Check for admin access via URL parameter (hidden feature)
  if (typeof window !== 'undefined' && window.location.search.includes('admin=true') && !isAdminAuthenticated) {
    handleAdminLogin()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hidden Access Buttons */}
      {currentPage === 'home' && (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">

          {/* Design System Access Button */}
          <button
            onClick={handleNavigateToDesignSystem}
            className="w-12 h-12 bg-primary-600 text-white rounded-full opacity-100 hover:opacity-90 transition-opacity duration-300 text-lg shadow-lg"
            title="Design System"
          >
            🎨
          </button>
          {/* Admin Access Button */}
          <button
            onClick={handleAdminLogin}
            className="w-12 h-12 bg-gray-800 text-white rounded-full opacity-10 hover:opacity-100 transition-opacity duration-300 text-sm"
            title="Admin-Zugang"
          >
            🔐
          </button>
        </div>
      )}

      {currentPage === 'home' && (
        <HomePage 
          onNavigateToWizard={handleNavigateToWizard} 
          onNavigateToHeizungscheck={handleNavigateToHeizungscheck}
        />
      )}
      
      {currentPage === 'wizard' && (
        <WizardPage 
          selectedService={selectedWizardService}
          onBackToMain={handleBackToMain}
        />
      )}

      {currentPage === 'admin' && isAdminAuthenticated && (
        <AdminDashboard onBackToMain={handleAdminLogout} />
      )}

      {currentPage === 'design-system' && (
        <DesignSystemPage onBackToMain={handleBackToMain} />
      )}

      {currentPage === 'heizungscheck' && (
        <HeizungscheckPage onBackToMain={handleBackToMain} />
      )}
    </div>
  )
}

export default App 