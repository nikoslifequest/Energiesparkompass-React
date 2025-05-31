// Utility to generate test data for Quick Check submissions
export const generateTestSubmissions = () => {
  const testData = [
    {
      id: "1703123456789",
      name: "Maria Schmidt",
      email: "maria.schmidt@email.de",
      phone: "+49 177 123 4567",
      building: "Einfamilienhaus",
      year: "1990-2010",
      interest: "Wärmepumpe",
      status: "new",
      submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
    },
    {
      id: "1703123456790",
      name: "Thomas Mueller",
      email: "t.mueller@example.com",
      phone: "+49 171 987 6543",
      building: "Mehrfamilienhaus",
      year: "vor 1970",
      interest: "Komplettsanierung",
      status: "contacted",
      submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() // 1 day ago
    },
    {
      id: "1703123456791",
      name: "Anna Weber",
      email: "anna.weber@mail.de",
      phone: "+49 162 555 7890",
      building: "Einfamilienhaus",
      year: "nach 2010",
      interest: "Photovoltaik",
      status: "completed",
      submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
    },
    {
      id: "1703123456792",
      name: "Klaus Becker",
      email: "klaus.becker@gmx.de",
      phone: "+49 151 444 2233",
      building: "Gewerbe",
      year: "1970-1990",
      interest: "Dämmung",
      status: "new",
      submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() // 5 hours ago
    },
    {
      id: "1703123456793",
      name: "Lisa Hoffmann",
      email: "l.hoffmann@web.de",
      phone: "+49 172 333 1122",
      building: "Einfamilienhaus",
      year: "vor 1970",
      interest: "Wärmepumpe",
      status: "contacted",
      submittedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() // 1 week ago
    }
  ]

  return testData
}

// Function to seed test data if localStorage is empty
export const seedTestDataIfEmpty = () => {
  const existingData = localStorage.getItem('quickCheckSubmissions')
  
  if (!existingData || JSON.parse(existingData).length === 0) {
    const testSubmissions = generateTestSubmissions()
    localStorage.setItem('quickCheckSubmissions', JSON.stringify(testSubmissions))
    console.log('🌱 Test-Daten für Quick-Check Postfach generiert')
    return testSubmissions
  }
  
  return JSON.parse(existingData)
}

// Function to clear all data (for testing)
export const clearAllSubmissions = () => {
  localStorage.removeItem('quickCheckSubmissions')
  console.log('🗑️ Alle Quick-Check Anfragen gelöscht')
}

// Function to add demo submission
export const addDemoSubmission = () => {
  const existingData = JSON.parse(localStorage.getItem('quickCheckSubmissions') || '[]')
  
  const demoSubmission = {
    id: Date.now().toString(),
    name: "Demo Kunde",
    email: "demo@beispiel.de",
    phone: "+49 123 456 7890",
    building: "Einfamilienhaus",
    year: "1990-2010",
    interest: "Photovoltaik",
    status: "new",
    submittedAt: new Date().toISOString()
  }
  
  existingData.unshift(demoSubmission) // Add to beginning
  localStorage.setItem('quickCheckSubmissions', JSON.stringify(existingData))
  
  return demoSubmission
} 