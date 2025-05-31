import nodemailer from 'nodemailer';
import { generateEmailTemplate } from './emailTemplate.js';

// Email-Provider Konfigurationen
const emailProviders = {
  gmail: {
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  },
  outlook: {
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  },
  custom: {
    host: process.env.SMTP_HOST || 'smtp.mail.me.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  },
  ethereal: null // Wird dynamisch erstellt
};

// Ethereal Test-Account erstellen
async function createEtherealAccount() {
  try {
    const testAccount = await nodemailer.createTestAccount();
    
    console.log('🎯 Ethereal Test-Account erstellt:');
    console.log('📧 Email:', testAccount.user);
    console.log('🔐 Passwort:', testAccount.pass);
    console.log('🌐 Webmail:', 'https://ethereal.email/');
    
    return {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    };
  } catch (error) {
    console.error('❌ Fehler beim Erstellen des Ethereal-Accounts:', error);
    throw error;
  }
}

// Transporter erstellen
async function createTransporter() {
  const provider = process.env.EMAIL_PROVIDER || 'ethereal';
  
  if (provider === 'ethereal') {
    console.log('📧 Verwende Ethereal Test-Service');
    const etherealConfig = await createEtherealAccount();
    return nodemailer.createTransport(etherealConfig);
  }
  
  const config = emailProviders[provider];
  
  if (!config) {
    throw new Error(`Unbekannter Email-Provider: ${provider}`);
  }

  console.log(`📧 Erstelle Transporter für Provider: ${provider}`);
  return nodemailer.createTransport(config);
}

// Service-Namen zu deutschen Bezeichnungen
const serviceNames = {
  'foerdermittelberatung': 'Fördermittelberatung',
  'energieausweis-efh': 'Energieausweis Einfamilienhaus',
  'energieausweis-mfh': 'Energieausweis Mehrfamilienhaus',
  'hydraulischer-abgleich': 'Hydraulischer Abgleich',
  'heizungscheck': 'Heizungscheck 2.0',
  'geg-beratung': 'GEG-Beratung',
  'wohngebaeude': 'Wohngebäude Beratung',
  'nicht-wohngebaeude': 'Nicht-Wohngebäude Beratung',
  'denkmalschutz': 'Denkmalschutz Beratung',
  'heizlastberechnung': 'Heizlastberechnung'
};

// Hauptfunktion zum Email-Versand
export async function sendEmail(formData, service) {
  try {
    const transporter = await createTransporter();
    const serviceName = serviceNames[service] || service;
    
    // HTML Email-Template generieren
    const htmlContent = generateEmailTemplate(formData, serviceName);
    
    // Email-Optionen
    const mailOptions = {
      from: {
        name: 'Energiesparkompass',
        address: process.env.EMAIL_FROM || 'test@energiesparkompass.de'
      },
      to: process.env.EMAIL_TO || 'empfaenger@energiesparkompass.de',
      subject: `Neue Anfrage: ${serviceName} - ${formData.firstName} ${formData.lastName}`,
      html: htmlContent,
      text: generatePlainTextContent(formData, serviceName)
    };

    console.log(`📤 Sende Email für ${serviceName}...`);
    const result = await transporter.sendMail(mailOptions);
    
    console.log(`✅ Email erfolgreich versendet! Message ID: ${result.messageId}`);
    
    // Für Ethereal: Preview-URL anzeigen
    if ((process.env.EMAIL_PROVIDER || 'ethereal') === 'ethereal') {
      const previewUrl = nodemailer.getTestMessageUrl(result);
      console.log(`🌐 Email-Preview: ${previewUrl}`);
      
      return {
        success: true,
        messageId: result.messageId,
        previewUrl: previewUrl
      };
    }
    
    return {
      success: true,
      messageId: result.messageId
    };

  } catch (error) {
    console.error('❌ Email-Versand fehlgeschlagen:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Plain-Text Version der Email generieren
function generatePlainTextContent(formData, serviceName) {
  let content = `Neue Anfrage: ${serviceName}\n\n`;
  content += `Kontaktdaten:\n`;
  content += `Name: ${formData.firstName} ${formData.lastName}\n`;
  content += `Email: ${formData.email}\n`;
  content += `Telefon: ${formData.phone || 'Nicht angegeben'}\n\n`;
  
  if (formData.address) {
    content += `Adresse:\n${formData.address}\n${formData.zipCode} ${formData.city}\n\n`;
  }
  
  // Service-spezifische Daten hinzufügen
  if (serviceName === 'Fördermittelberatung') {
    content += `Gebäudedaten:\n`;
    content += `Gebäudetyp: ${formData.buildingType}\n`;
    content += `Baujahr: ${formData.constructionYear}\n`;
    content += `Wohnfläche: ${formData.livingSpace} m²\n`;
    
    if (formData.selectedMeasures && formData.selectedMeasures.length > 0) {
      content += `\nGeplante Maßnahmen:\n${formData.selectedMeasures.join(', ')}\n`;
    }
  }
  
  content += `\nAnfrage eingegangen am: ${new Date().toLocaleString('de-DE')}`;
  
  return content;
} 