#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function colorLog(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function createEnvFile(config) {
  const envPath = path.join(__dirname, '..', '.env');
  
  const envContent = `# Email-Konfiguration für Energiesparkompass
# Generiert am: ${new Date().toLocaleString('de-DE')}

# Email-Provider: 'gmail', 'outlook', oder 'custom'
EMAIL_PROVIDER=${config.provider}

# Email-Authentifizierung
EMAIL_USER=${config.user}
EMAIL_FROM=${config.from}
EMAIL_TO=${config.to}

${config.provider === 'gmail' ? `# Gmail App-Passwort (nicht das normale Passwort!)
EMAIL_APP_PASSWORD=${config.password}` : `# Email-Passwort
EMAIL_PASSWORD=${config.password}`}

${config.provider === 'custom' ? `# Custom SMTP-Server
SMTP_HOST=${config.host || ''}
SMTP_PORT=${config.port || '587'}
SMTP_SECURE=${config.secure || 'false'}` : ''}

# Server-Konfiguration
PORT=3001
`;

  fs.writeFileSync(envPath, envContent);
  colorLog('green', `✅ .env-Datei erstellt: ${envPath}`);
}

function showProviderInstructions(provider) {
  colorLog('cyan', '\n📧 Provider-spezifische Einrichtung:');
  
  switch (provider) {
    case 'gmail':
      colorLog('blue', '\n🔐 Gmail Setup:');
      console.log('1. Aktivieren Sie 2-Faktor-Authentifizierung:');
      console.log('   https://myaccount.google.com/security');
      console.log('\n2. Generieren Sie ein App-Passwort:');
      console.log('   https://myaccount.google.com/apppasswords');
      console.log('   - Wählen Sie "Mail" als App');
      console.log('   - Wählen Sie "Anderes Gerät"');
      console.log('   - Kopieren Sie das 16-stellige Passwort');
      colorLog('yellow', '\n⚠️  Verwenden Sie das App-Passwort, nicht Ihr normales Passwort!');
      break;
      
    case 'outlook':
      colorLog('blue', '\n📧 Outlook Setup:');
      console.log('1. Verwenden Sie Ihre vollständige Outlook-Email');
      console.log('2. Verwenden Sie Ihr normales Passwort');
      console.log('3. Bei 2FA: Verwenden Sie ein App-Passwort');
      break;
      
    case 'custom':
      colorLog('blue', '\n⚙️  Custom SMTP Setup:');
      console.log('1. Erhalten Sie SMTP-Einstellungen von Ihrem Provider');
      console.log('2. Geben Sie Host, Port und Sicherheitseinstellungen an');
      console.log('3. Verwenden Sie meist Port 587 für TLS');
      break;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function prompt(question) {
  const readline = await import('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  colorLog('bright', '🚀 Energiesparkompass Email-Setup');
  colorLog('cyan', '=====================================\n');
  
  console.log('Dieses Script hilft Ihnen bei der Einrichtung der Email-Funktionalität.\n');
  
  // Provider auswählen
  console.log('Verfügbare Email-Provider:');
  console.log('1. Gmail (empfohlen)');
  console.log('2. Outlook/Hotmail');
  console.log('3. Custom SMTP-Server\n');
  
  const providerChoice = await prompt('Wählen Sie Ihren Provider (1-3): ');
  
  const providerMap = {
    '1': 'gmail',
    '2': 'outlook', 
    '3': 'custom'
  };
  
  const provider = providerMap[providerChoice];
  
  if (!provider) {
    colorLog('red', '❌ Ungültige Auswahl. Bitte starten Sie das Script erneut.');
    process.exit(1);
  }
  
  colorLog('green', `✅ Provider gewählt: ${provider}\n`);
  
  // Email-Konfiguration sammeln
  const config = { provider };
  
  // Email-Adresse eingeben
  let userEmail;
  do {
    userEmail = await prompt('Ihre Email-Adresse: ');
    if (!validateEmail(userEmail)) {
      colorLog('red', '❌ Ungültige Email-Adresse. Bitte versuchen Sie es erneut.');
    }
  } while (!validateEmail(userEmail));
  
  config.user = userEmail;
  config.from = userEmail;
  config.to = userEmail;
  
  // Passwort eingeben
  const passwordLabel = provider === 'gmail' ? 'App-Passwort' : 'Passwort';
  config.password = await prompt(`Ihr ${passwordLabel}: `);
  
  // Custom SMTP-Einstellungen
  if (provider === 'custom') {
    config.host = await prompt('SMTP-Host: ');
    config.port = await prompt('SMTP-Port (default 587): ') || '587';
    
    const secureChoice = await prompt('SSL/TLS verwenden? (y/n): ');
    config.secure = secureChoice.toLowerCase() === 'y' ? 'true' : 'false';
  }
  
  // .env-Datei erstellen
  console.log('\n');
  createEnvFile(config);
  
  // Anweisungen anzeigen
  showProviderInstructions(provider);
  
  // Nächste Schritte
  colorLog('bright', '\n🎯 Nächste Schritte:');
  console.log('1. Starten Sie den Email-Server:');
  colorLog('cyan', '   npm run server');
  console.log('\n2. Starten Sie das Frontend (neues Terminal):');
  colorLog('cyan', '   npm run dev');
  console.log('\n3. Oder starten Sie beides gleichzeitig:');
  colorLog('cyan', '   npm run dev:full');
  console.log('\n4. Testen Sie die Email-Funktionalität auf:');
  colorLog('cyan', '   http://localhost:5173');
  
  colorLog('green', '\n✅ Setup abgeschlossen! Viel Erfolg mit Ihrem Energiesparkompass! 🎉');
}

main().catch((error) => {
  colorLog('red', `❌ Fehler beim Setup: ${error.message}`);
  process.exit(1);
}); 