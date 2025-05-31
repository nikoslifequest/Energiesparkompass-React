import axios from 'axios';

// API-Basis-URL (automatisch je nach Umgebung)
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-production-domain.com' 
  : 'http://localhost:3001';

// Axios-Instanz mit Standardkonfiguration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 Sekunden Timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor für Logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`📤 Sende Anfrage an: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor für Logging und Fehlerbehandlung
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ Erfolgreiche Antwort von: ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

/**
 * Sendet Email über den Backend-Service
 * @param {Object} formData - Die Formulardaten
 * @param {string} service - Der Service-Name
 * @returns {Promise<Object>} - Antwort mit success/error status
 */
export async function sendEmail(formData, service) {
  try {
    console.log(`📧 Starte Email-Versand für Service: ${service}`);
    console.log(`👤 Kunde: ${formData.firstName} ${formData.lastName}`);

    // Validierung der erforderlichen Felder
    if (!formData.firstName || !formData.lastName || !formData.email) {
      throw new Error('Erforderliche Felder fehlen: Vorname, Nachname und Email sind Pflicht');
    }

    if (!service) {
      throw new Error('Service-Parameter ist erforderlich');
    }

    // Email-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Ungültige Email-Adresse');
    }

    // API-Aufruf
    const response = await apiClient.post('/api/send-email', {
      formData,
      service
    });

    if (response.data.success) {
      console.log('✅ Email erfolgreich versendet!', response.data);
      return {
        success: true,
        message: response.data.message || 'Email wurde erfolgreich versendet',
        messageId: response.data.messageId
      };
    } else {
      throw new Error(response.data.message || 'Email konnte nicht versendet werden');
    }

  } catch (error) {
    console.error('❌ Email-Versand fehlgeschlagen:', error);

    // Spezifische Fehlerbehandlung
    let errorMessage = 'Ein unbekannter Fehler ist aufgetreten';

    if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Verbindung zum Email-Server fehlgeschlagen. Bitte versuchen Sie es später erneut.';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Email-Server nicht erreichbar. Bitte überprüfen Sie Ihre Internetverbindung.';
    } else if (error.response?.status === 400) {
      errorMessage = error.response.data.message || 'Ungültige Daten übermittelt.';
    } else if (error.response?.status === 500) {
      errorMessage = 'Server-Fehler beim Email-Versand. Bitte versuchen Sie es später erneut.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
      error: error.message
    };
  }
}

/**
 * Überprüft den Server-Status
 * @returns {Promise<Object>} - Server-Status
 */
export async function checkServerHealth() {
  try {
    const response = await apiClient.get('/health');
    return {
      success: true,
      status: response.data.status,
      timestamp: response.data.timestamp
    };
  } catch (error) {
    return {
      success: false,
      message: 'Server nicht erreichbar',
      error: error.message
    };
  }
}

/**
 * Service-spezifische Email-Funktionen
 */
export const EmailServices = {
  // Fördermittelberatung
  sendFundingConsultationEmail: (formData) => 
    sendEmail(formData, 'foerdermittelberatung'),

  // Energieausweis Einfamilienhaus
  sendEnergyPassSingleFamilyEmail: (formData) => 
    sendEmail(formData, 'energieausweis-efh'),

  // Energieausweis Mehrfamilienhaus
  sendEnergyPassMultiFamilyEmail: (formData) => 
    sendEmail(formData, 'energieausweis-mfh'),

  // Hydraulischer Abgleich
  sendHydraulicBalancingEmail: (formData) => 
    sendEmail(formData, 'hydraulischer-abgleich'),

  // Heizungscheck 2.0
  sendHeatingCheckEmail: (formData) => 
    sendEmail(formData, 'heizungscheck'),

  // GEG-Beratung
  sendGEGConsultationEmail: (formData) => 
    sendEmail(formData, 'geg-beratung'),

  // Wohngebäude
  sendResidentialBuildingEmail: (formData) => 
    sendEmail(formData, 'wohngebaeude'),

  // Nicht-Wohngebäude
  sendNonResidentialBuildingEmail: (formData) => 
    sendEmail(formData, 'nicht-wohngebaeude'),

  // Denkmalschutz
  sendMonumentProtectionEmail: (formData) => 
    sendEmail(formData, 'denkmalschutz'),

  // Heizlastberechnung
  sendHeatingLoadCalculationEmail: (formData) => 
    sendEmail(formData, 'heizlastberechnung')
};

export default {
  sendEmail,
  checkServerHealth,
  EmailServices
}; 