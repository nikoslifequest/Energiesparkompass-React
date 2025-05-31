import { useState, useEffect } from 'react'
import { Button, Badge, Icon } from '../components/ui'
import { seedTestDataIfEmpty, addDemoSubmission } from '../utils/generateTestData'

const AdminDashboard = ({ onBackToMain }) => {
  const [submissions, setSubmissions] = useState([])
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterPeriod, setFilterPeriod] = useState('all')

  // Load submissions from localStorage on component mount
  useEffect(() => {
    // Seed test data if empty, then load
    const data = seedTestDataIfEmpty()
    setSubmissions(data)
  }, [])

  // Filter submissions based on search and filters
  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.interest.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === 'all' || submission.status === filterStatus

    const matchesPeriod = filterPeriod === 'all' || (() => {
      const submissionDate = new Date(submission.submittedAt)
      const now = new Date()
      const diffDays = Math.floor((now - submissionDate) / (1000 * 60 * 60 * 24))
      
      switch (filterPeriod) {
        case 'today': return diffDays === 0
        case 'week': return diffDays <= 7
        case 'month': return diffDays <= 30
        default: return true
      }
    })()

    return matchesSearch && matchesStatus && matchesPeriod
  })

  // Update submission status
  const updateSubmissionStatus = (id, newStatus) => {
    const updatedSubmissions = submissions.map(sub => 
      sub.id === id ? { ...sub, status: newStatus } : sub
    )
    setSubmissions(updatedSubmissions)
    localStorage.setItem('quickCheckSubmissions', JSON.stringify(updatedSubmissions))
    
    if (selectedSubmission?.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status: newStatus })
    }
  }

  // Delete submission
  const deleteSubmission = (id) => {
    const updatedSubmissions = submissions.filter(sub => sub.id !== id)
    setSubmissions(updatedSubmissions)
    localStorage.setItem('quickCheckSubmissions', JSON.stringify(updatedSubmissions))
    
    if (selectedSubmission?.id === id) {
      setSelectedSubmission(null)
    }
  }

  // Export data as CSV
  const exportData = () => {
    const csvContent = [
      ['Name', 'E-Mail', 'Telefon', 'Gebäude', 'Baujahr', 'Interesse', 'Status', 'Eingegangen'],
      ...submissions.map(sub => [
        sub.name, sub.email, sub.phone, sub.building, sub.year, 
        sub.interest, sub.status, new Date(sub.submittedAt).toLocaleString('de-DE')
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `quick-check-anfragen-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new': return '📩'
      case 'contacted': return '📞'
      case 'completed': return '✅'
      default: return '📋'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToMain}
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Icon name="arrow-left" size="sm" className="mr-2" />
                Zurück zur Website
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">
                📧 Quick-Check Postfach
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newSubmission = addDemoSubmission()
                  setSubmissions(prev => [newSubmission, ...prev])
                }}
                className="text-green-600 hover:text-green-700"
              >
                ➕ Demo-Anfrage
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={exportData}
                disabled={submissions.length === 0}
              >
                <Icon name="download" size="sm" className="mr-2" />
                CSV Export
              </Button>
              <div className="bg-primary-50 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-primary-700">
                  {submissions.length} Anfragen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          
          {/* Inbox Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border border-gray-200">
            
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="space-y-3">
                <div className="relative">
                  <Icon name="search" size="sm" className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-300"
                  >
                    <option value="all">Alle Status</option>
                    <option value="new">Neu</option>
                    <option value="contacted">Kontaktiert</option>
                    <option value="completed">Abgeschlossen</option>
                  </select>
                  
                  <select
                    value={filterPeriod}
                    onChange={(e) => setFilterPeriod(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-300"
                  >
                    <option value="all">Alle Zeiten</option>
                    <option value="today">Heute</option>
                    <option value="week">Diese Woche</option>
                    <option value="month">Dieser Monat</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submissions List */}
            <div className="overflow-y-auto max-h-[calc(100vh-350px)]">
              {filteredSubmissions.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <div className="text-4xl mb-4">📭</div>
                  <p className="text-sm">
                    {submissions.length === 0 ? 'Noch keine Anfragen eingegangen' : 'Keine Anfragen gefunden'}
                  </p>
                </div>
              ) : (
                <div className="space-y-1 p-2">
                  {filteredSubmissions
                    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
                    .map((submission) => (
                    <div
                      key={submission.id}
                      onClick={() => setSelectedSubmission(submission)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedSubmission?.id === submission.id
                          ? 'bg-primary-50 border border-primary-200'
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{getStatusIcon(submission.status)}</span>
                          <span className="font-medium text-gray-900 text-sm truncate">
                            {submission.name}
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                          {submission.status === 'new' ? 'Neu' : 
                           submission.status === 'contacted' ? 'Kontaktiert' : 'Abgeschlossen'}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 truncate mb-1">
                        {submission.interest}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {new Date(submission.submittedAt).toLocaleDateString('de-DE')}
                        </span>
                        <span className="text-xs text-gray-500">
                          {submission.building}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Detail View */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            {selectedSubmission ? (
              <div className="h-full flex flex-col">
                {/* Detail Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {selectedSubmission.name}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>📧 {selectedSubmission.email}</span>
                        <span>📞 {selectedSubmission.phone}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedSubmission.status)}`}>
                        {getStatusIcon(selectedSubmission.status)} {
                          selectedSubmission.status === 'new' ? 'Neu' : 
                          selectedSubmission.status === 'contacted' ? 'Kontaktiert' : 'Abgeschlossen'
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detail Content */}
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Gebäudetyp</label>
                        <p className="mt-1 text-gray-900">{selectedSubmission.building}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Baujahr</label>
                        <p className="mt-1 text-gray-900">{selectedSubmission.year}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Hauptinteresse</label>
                        <p className="mt-1 text-gray-900">{selectedSubmission.interest}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Eingegangen am</label>
                        <p className="mt-1 text-gray-900">
                          {new Date(selectedSubmission.submittedAt).toLocaleString('de-DE')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Schnellaktionen</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        onClick={() => window.open(`tel:${selectedSubmission.phone}`, '_self')}
                      >
                        📞 Anrufen
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(`mailto:${selectedSubmission.email}?subject=Ihre Energieberatungs-Anfrage`, '_self')}
                      >
                        ✉️ E-Mail
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateSubmissionStatus(selectedSubmission.id, 'contacted')}
                        disabled={selectedSubmission.status === 'contacted'}
                      >
                        Als kontaktiert markieren
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateSubmissionStatus(selectedSubmission.id, 'completed')}
                        disabled={selectedSubmission.status === 'completed'}
                      >
                        Als abgeschlossen markieren
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Detail Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      ID: {selectedSubmission.id}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm('Möchten Sie diese Anfrage wirklich löschen?')) {
                          deleteSubmission(selectedSubmission.id)
                        }
                      }}
                      className="text-red-600 hover:text-red-700"
                    >
                      🗑️ Löschen
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">📧</div>
                  <p>Wählen Sie eine Anfrage aus der Liste aus</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard 