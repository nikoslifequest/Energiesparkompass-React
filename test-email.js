import axios from 'axios';

// Test-Daten für die Email
const testData = {
  formData: {
    firstName: "Max",
    lastName: "Mustermann",
    email: "test@example.com", 
    phone: "+49 123 456789",
    address: "Teststraße 123",
    zipCode: "12345",
    city: "Teststadt",
    buildingType: "Einfamilienhaus",
    constructionYear: "1990",
    livingSpace: "150",
    numberOfUnits: "1",
    monumentStatus: "Nein",
    energyCertificate: "Vorhanden",
    selectedMeasures: [
      "Dämmung der Außenwände",
      "Fenster und Türen erneuern",
      "Heizungsanlage modernisieren"
    ],
    renovationScope: "Vollsanierung",
    ownership: "Eigentümer",
    householdSize: "4",
    state: "Bayern",
    energyProvider: "Stadtwerke München",
    investmentAmount: "50.000 - 100.000 €",
    availableCapital: "20.000 - 50.000 €",
    fundingPreferences: ["Zuschüsse", "Kredite"],
    timeline: "6-12 Monate"
  },
  service: "foerdermittelberatung"
};

async function testEmailFunctionality() {
  console.log('🧪 Teste Email-Funktionalität...\n');
  
  try {
    // Überprüfe Server-Status
    console.log('📡 Überprüfe Server-Status...');
    const healthResponse = await axios.get('http://localhost:3001/health');
    console.log('✅ Server läuft:', healthResponse.data);
    
    // Sende Test-Email
    console.log('\n📧 Sende Test-Email...');
    const emailResponse = await axios.post('http://localhost:3001/api/send-email', testData);
    
    if (emailResponse.data.success) {
      console.log('🎉 EMAIL ERFOLGREICH VERSENDET!');
      console.log('✅ Antwort:', emailResponse.data);
      console.log('\n📮 Bitte überprüfen Sie Ihr iCloud-Postfach:');
      console.log('📧 nikolas.ackermann@icloud.com');
      console.log('\n💡 Die Email sollte folgende Daten enthalten:');
      console.log('- Kontakt: Max Mustermann');
      console.log('- Service: Fördermittelberatung');
      console.log('- Gebäude: Einfamilienhaus von 1990');
      console.log('- Geplante Maßnahmen: 3 ausgewählt');
      console.log('- Professionelles HTML-Design');
    } else {
      console.log('❌ Email-Versand fehlgeschlagen:', emailResponse.data);
    }
    
  } catch (error) {
    console.error('❌ Fehler beim Test:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n🔧 Lösungsvorschlag:');
      console.log('1. Starten Sie den Server: npm run server');
      console.log('2. Warten Sie bis "🚀 Email-Server läuft auf Port 3001" erscheint');
      console.log('3. Führen Sie den Test erneut aus: node test-email.js');
    } else if (error.response) {
      console.log('📝 Server-Antwort:', error.response.data);
    }
  }
}

testEmailFunctionality(); 