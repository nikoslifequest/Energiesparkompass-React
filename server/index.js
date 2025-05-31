import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './emailService.js';

dotenv.config();

// Debug: Überprüfe ob .env-Variablen geladen wurden
console.log('🔍 Debug - Umgebungsvariablen:');
console.log('EMAIL_PROVIDER:', process.env.EMAIL_PROVIDER || 'NICHT GESETZT');
console.log('EMAIL_USER:', process.env.EMAIL_USER || 'NICHT GESETZT');
console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NICHT GESETZT');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server läuft', timestamp: new Date().toISOString() });
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { formData, service } = req.body;
    
    if (!formData || !service) {
      return res.status(400).json({ 
        success: false, 
        message: 'Fehlende Daten: formData und service sind erforderlich' 
      });
    }

    console.log(`📧 Email-Anfrage für Service: ${service}`);
    console.log(`📝 Daten erhalten für: ${formData.firstName} ${formData.lastName}`);

    const result = await sendEmail(formData, service);
    
    if (result.success) {
      res.json({ 
        success: true, 
        message: 'Email erfolgreich versendet',
        messageId: result.messageId 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: result.error || 'Email konnte nicht versendet werden' 
      });
    }
  } catch (error) {
    console.error('❌ Server Fehler:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Interner Server-Fehler beim Versenden der Email' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Email-Server läuft auf Port ${PORT}`);
  console.log(`📧 Email-Provider: ${process.env.EMAIL_PROVIDER || 'Nicht konfiguriert'}`);
  console.log(`📮 Von Email: ${process.env.EMAIL_FROM || 'Nicht konfiguriert'}`);
}); 