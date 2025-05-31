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

// Email Service for Quick Check functionality
// This can be integrated with EmailJS, Nodemailer, or your backend API

// Configuration for EmailJS (free email service)
const EMAIL_CONFIG = {
  serviceId: 'your_service_id', // Replace with your EmailJS service ID
  templateId: 'quick_check_template', // Replace with your template ID
  confirmationTemplateId: 'customer_confirmation_template',
  userId: 'your_user_id' // Replace with your EmailJS user ID
}

// Send quick check data to company and confirmation to customer
export const sendQuickCheckEmails = async (data) => {
  try {
    // Prepare email data
    const emailData = {
      customer_name: data.name,
      customer_email: data.email,
      customer_phone: data.phone,
      building_type: data.building,
      building_year: data.year,
      main_interest: data.interest,
      submission_date: new Date().toLocaleDateString('de-DE'),
      submission_time: new Date().toLocaleTimeString('de-DE')
    }

    // 1. Send email to company with customer data
    await sendToCompany(emailData)
    
    // 2. Send confirmation email to customer
    await sendConfirmationToCustomer(emailData)
    
    return { success: true }
  } catch (error) {
    console.error('Error sending emails:', error)
    throw new Error('Fehler beim Senden der E-Mails')
  }
}

// Send customer data to company
const sendToCompany = async (data) => {
  // Using EmailJS (you can replace this with your preferred email service)
  
  // For now, we'll just log the data that would be sent
  console.log('Email to company:', {
    to: 'info@energiesparkompass.de',
    subject: `Neue Quick-Check Anfrage von ${data.customer_name}`,
    template: 'company_notification',
    data: data
  })
  
  // Example EmailJS integration:
  /*
  if (typeof window !== 'undefined' && window.emailjs) {
    return window.emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      {
        ...data,
        to_email: 'info@energiesparkompass.de'
      },
      EMAIL_CONFIG.userId
    )
  }
  */
  
  // Simulate async operation
  return new Promise(resolve => setTimeout(resolve, 500))
}

// Send confirmation email to customer
const sendConfirmationToCustomer = async (data) => {
  console.log('Confirmation email to customer:', {
    to: data.customer_email,
    subject: 'Bestätigung Ihrer Energieberatungs-Anfrage',
    template: 'customer_confirmation',
    data: data
  })
  
  // Example EmailJS integration:
  /*
  if (typeof window !== 'undefined' && window.emailjs) {
    return window.emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.confirmationTemplateId,
      {
        ...data,
        to_email: data.customer_email
      },
      EMAIL_CONFIG.userId
    )
  }
  */
  
  // Simulate async operation
  return new Promise(resolve => setTimeout(resolve, 500))
}

// Example email templates that you would set up in EmailJS:

/*
Company Email Template:
========================
Subject: Neue Quick-Check Anfrage von {{customer_name}}

Hallo Team,

eine neue Quick-Check Anfrage ist eingegangen:

Kunde: {{customer_name}}
E-Mail: {{customer_email}}
Telefon: {{customer_phone}}

Gebäude: {{building_type}}
Baujahr: {{building_year}}
Hauptinteresse: {{main_interest}}

Eingegangen am: {{submission_date}} um {{submission_time}}

Bitte kontaktieren Sie den Kunden zeitnah.

Viele Grüße,
Ihr Energiesparkompass System
*/

/*
Customer Confirmation Template:
===============================
Subject: Bestätigung Ihrer Energieberatungs-Anfrage

Hallo {{customer_name}},

vielen Dank für Ihr Interesse an unserer Energieberatung!

Ihre Anfrage Details:
- Gebäude: {{building_type}}
- Baujahr: {{building_year}}
- Hauptinteresse: {{main_interest}}

Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.

Mit freundlichen Grüßen,
Ihr Energiesparkompass Team

Tel: +49 123 456 789
E-Mail: info@energiesparkompass.de
*/

export default {
  sendEmail,
  checkServerHealth,
  EmailServices
}; 