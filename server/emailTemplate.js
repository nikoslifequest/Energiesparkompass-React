export function generateEmailTemplate(formData, serviceName) {
  const currentDate = new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neue Anfrage - ${serviceName}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8fafc;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        
        .header .logo {
            font-size: 32px;
            margin-bottom: 10px;
        }
        
        .content {
            padding: 30px;
        }
        
        .service-badge {
            display: inline-block;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        .section {
            margin-bottom: 25px;
            padding: 20px;
            background-color: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        
        .section h3 {
            color: #1e40af;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
        }
        
        .section h3 .icon {
            margin-right: 8px;
            font-size: 18px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        
        .info-item {
            display: flex;
            flex-direction: column;
        }
        
        .info-label {
            font-size: 12px;
            color: #6b7280;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        
        .info-value {
            font-size: 14px;
            color: #1f2937;
            font-weight: 600;
        }
        
        .measures-list {
            list-style: none;
            padding: 0;
        }
        
        .measures-list li {
            background: #e0f2fe;
            padding: 8px 12px;
            margin: 4px 0;
            border-radius: 6px;
            border-left: 3px solid #0891b2;
            font-size: 14px;
        }
        
        .footer {
            background-color: #1f2937;
            color: #d1d5db;
            padding: 20px 30px;
            text-align: center;
            font-size: 12px;
        }
        
        .timestamp {
            background: #fef3c7;
            color: #92400e;
            padding: 12px;
            border-radius: 6px;
            font-size: 13px;
            text-align: center;
            margin-top: 20px;
        }
        
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            
            .container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .header, .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">⚡</div>
            <h1>Energiesparkompass</h1>
            <p>Neue Kundenanfrage eingegangen</p>
        </div>
        
        <div class="content">
            <div class="service-badge">${serviceName}</div>
            
            <div class="section">
                <h3><span class="icon">👤</span> Kontaktinformationen</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Name</div>
                        <div class="info-value">${formData.firstName} ${formData.lastName}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">E-Mail</div>
                        <div class="info-value">${formData.email}</div>
                    </div>
                    ${formData.phone ? `
                    <div class="info-item">
                        <div class="info-label">Telefon</div>
                        <div class="info-value">${formData.phone}</div>
                    </div>
                    ` : ''}
                    ${formData.company ? `
                    <div class="info-item">
                        <div class="info-label">Unternehmen</div>
                        <div class="info-value">${formData.company}</div>
                    </div>
                    ` : ''}
                </div>
            </div>
            
            ${formData.address ? `
            <div class="section">
                <h3><span class="icon">📍</span> Adresse</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Straße</div>
                        <div class="info-value">${formData.address}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Ort</div>
                        <div class="info-value">${formData.zipCode} ${formData.city}</div>
                    </div>
                </div>
            </div>
            ` : ''}
            
            ${generateServiceSpecificContent(formData, serviceName)}
            
            <div class="timestamp">
                📅 Anfrage eingegangen am: ${currentDate}
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Energiesparkompass</strong> | Ihr Partner für Energieeffizienz</p>
            <p>Diese E-Mail wurde automatisch über das Kontaktformular generiert.</p>
        </div>
    </div>
</body>
</html>`;
}

function generateServiceSpecificContent(formData, serviceName) {
  if (serviceName === 'Fördermittelberatung') {
    return `
      <div class="section">
          <h3><span class="icon">🏠</span> Gebäudedaten</h3>
          <div class="info-grid">
              ${formData.buildingType ? `
              <div class="info-item">
                  <div class="info-label">Gebäudetyp</div>
                  <div class="info-value">${formData.buildingType}</div>
              </div>
              ` : ''}
              ${formData.constructionYear ? `
              <div class="info-item">
                  <div class="info-label">Baujahr</div>
                  <div class="info-value">${formData.constructionYear}</div>
              </div>
              ` : ''}
              ${formData.livingSpace ? `
              <div class="info-item">
                  <div class="info-label">Wohnfläche</div>
                  <div class="info-value">${formData.livingSpace} m²</div>
              </div>
              ` : ''}
              ${formData.numberOfUnits ? `
              <div class="info-item">
                  <div class="info-label">Anzahl Einheiten</div>
                  <div class="info-value">${formData.numberOfUnits}</div>
              </div>
              ` : ''}
              ${formData.ownership ? `
              <div class="info-item">
                  <div class="info-label">Eigentümerstatus</div>
                  <div class="info-value">${formData.ownership}</div>
              </div>
              ` : ''}
              ${formData.householdSize ? `
              <div class="info-item">
                  <div class="info-label">Haushaltsgröße</div>
                  <div class="info-value">${formData.householdSize} Personen</div>
              </div>
              ` : ''}
          </div>
      </div>
      
      ${formData.selectedMeasures && formData.selectedMeasures.length > 0 ? `
      <div class="section">
          <h3><span class="icon">🔧</span> Geplante Maßnahmen</h3>
          <ul class="measures-list">
              ${formData.selectedMeasures.map(measure => `<li>${measure}</li>`).join('')}
          </ul>
      </div>
      ` : ''}
      
      ${formData.renovationScope ? `
      <div class="section">
          <h3><span class="icon">🏗️</span> Sanierungsumfang</h3>
          <div class="info-value">${formData.renovationScope}</div>
      </div>
      ` : ''}
      
      ${formData.investmentAmount || formData.availableCapital ? `
      <div class="section">
          <h3><span class="icon">💰</span> Finanzielle Informationen</h3>
          <div class="info-grid">
              ${formData.investmentAmount ? `
              <div class="info-item">
                  <div class="info-label">Geplante Investition</div>
                  <div class="info-value">${formData.investmentAmount}</div>
              </div>
              ` : ''}
              ${formData.availableCapital ? `
              <div class="info-item">
                  <div class="info-label">Verfügbares Eigenkapital</div>
                  <div class="info-value">${formData.availableCapital}</div>
              </div>
              ` : ''}
              ${formData.fundingPreferences && formData.fundingPreferences.length > 0 ? `
              <div class="info-item">
                  <div class="info-label">Förderinteressen</div>
                  <div class="info-value">${formData.fundingPreferences.join(', ')}</div>
              </div>
              ` : ''}
          </div>
      </div>
      ` : ''}
    `;
  }
  
  return '';
} 