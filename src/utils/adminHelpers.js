/**
 * Utility functions for admin dashboard integration
 */

/**
 * Saves a wizard submission to localStorage for the admin dashboard
 * @param {Object} submissionData - The submission data
 * @param {string} serviceType - The type of service (e.g., 'Fördermittelberatung')
 * @param {Object} additionalDetails - Additional details specific to the service
 */
export const saveToAdminDashboard = (submissionData, serviceType, additionalDetails = {}) => {
  try {
    const dashboardSubmission = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9), // Unique ID
      name: `${submissionData.firstName || 'Unbekannt'} ${submissionData.lastName || 'Unbekannt'}`,
      email: submissionData.email || 'keine@email.de',
      phone: submissionData.phone || 'Nicht angegeben',
      building: submissionData.buildingType || submissionData.building || 'Nicht angegeben',
      year: submissionData.buildingYear || submissionData.year || 'Nicht angegeben',
      interest: serviceType,
      status: 'new',
      submittedAt: new Date().toISOString(),
      source: 'wizard',
      serviceType: serviceType,
      details: {
        address: submissionData.address || 
                `${submissionData.street || ''}, ${submissionData.zipCode || ''} ${submissionData.city || ''}`.trim(),
        ...additionalDetails
      }
    }

    // Get existing submissions
    const existingSubmissions = JSON.parse(localStorage.getItem('quickCheckSubmissions') || '[]')
    
    // Add new submission
    existingSubmissions.push(dashboardSubmission)
    
    // Save back to localStorage
    localStorage.setItem('quickCheckSubmissions', JSON.stringify(existingSubmissions))
    
    console.log(`💾 ${serviceType} Anfrage im Admin-Dashboard gespeichert:`, dashboardSubmission)
    
    return dashboardSubmission
    
  } catch (error) {
    console.error('❌ Fehler beim Speichern in Admin-Dashboard:', error)
    return null
  }
}

/**
 * Gets all submissions from localStorage
 * @returns {Array} Array of submissions
 */
export const getAdminSubmissions = () => {
  try {
    return JSON.parse(localStorage.getItem('quickCheckSubmissions') || '[]')
  } catch (error) {
    console.error('❌ Fehler beim Laden der Admin-Anfragen:', error)
    return []
  }
}

/**
 * Updates the status of a submission
 * @param {string} submissionId - The ID of the submission
 * @param {string} newStatus - The new status
 */
export const updateSubmissionStatus = (submissionId, newStatus) => {
  try {
    const submissions = getAdminSubmissions()
    const submissionIndex = submissions.findIndex(s => s.id === submissionId)
    
    if (submissionIndex !== -1) {
      submissions[submissionIndex].status = newStatus
      submissions[submissionIndex].updatedAt = new Date().toISOString()
      localStorage.setItem('quickCheckSubmissions', JSON.stringify(submissions))
      return true
    }
    
    return false
  } catch (error) {
    console.error('❌ Fehler beim Aktualisieren des Status:', error)
    return false
  }
}

/**
 * Deletes a submission
 * @param {string} submissionId - The ID of the submission to delete
 */
export const deleteSubmission = (submissionId) => {
  try {
    const submissions = getAdminSubmissions()
    const filteredSubmissions = submissions.filter(s => s.id !== submissionId)
    localStorage.setItem('quickCheckSubmissions', JSON.stringify(filteredSubmissions))
    return true
  } catch (error) {
    console.error('❌ Fehler beim Löschen der Anfrage:', error)
    return false
  }
} 