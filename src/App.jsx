import { useState } from 'react'
import HomePage from './pages/HomePage'
import WizardPage from './pages/WizardPage'
import AdminDashboard from './pages/AdminDashboard'

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
      {/* Admin Access Button (hidden in bottom right corner) */}
      {currentPage === 'home' && (
        <button
          onClick={handleAdminLogin}
          className="fixed bottom-4 right-4 w-12 h-12 bg-gray-800 text-white rounded-full opacity-10 hover:opacity-100 transition-opacity duration-300 text-sm font-mono"
          title="Admin-Zugang"
        >
          🔐
        </button>
      )}

      {currentPage === 'home' && (
        <HomePage onNavigateToWizard={handleNavigateToWizard} />
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
    </div>
  )
}

export default App 