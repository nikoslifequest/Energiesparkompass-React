import { Select, Alert, HelpText } from '../ui'
import {
  monumentProtectionLevelOptions,
  monumentBuildingTypeOptions,
  constructionPeriodOptions,
  heritageAuthorityOptions,
  previousApprovalsOptions
} from '../../constants/formOptions'

const MonumentProtectionStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Denkmalschutz-Status",
    description = "Rechtlicher Status und Behörden",
    helpText = "Der rechtliche Status Ihres Gebäudes bestimmt maßgeblich die Möglichkeiten und Fördermittel für energetische Maßnahmen.",
    fields = {
      protectionLevel: true,
      buildingType: true,
      constructionPeriod: true,
      authority: true,
      previousApprovals: true,
      fundingAlert: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏛️ {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.protectionLevel && fields.buildingType && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Denkmalschutz-Status"
            required
            value={formData.monumentProtectionLevel}
            onChange={(e) => updateFormData('monumentProtectionLevel', e.target.value)}
            options={monumentProtectionLevelOptions}
            helperText="Entscheidend für Fördermöglichkeiten"
          />
          <Select
            label="Art des Denkmals"
            value={formData.monumentBuildingType}
            onChange={(e) => updateFormData('monumentBuildingType', e.target.value)}
            options={monumentBuildingTypeOptions}
          />
        </div>
      )}

      {fields.constructionPeriod && fields.authority && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Bauzeit / Stilepoche"
            value={formData.constructionPeriod}
            onChange={(e) => updateFormData('constructionPeriod', e.target.value)}
            options={constructionPeriodOptions}
            helperText="Wichtig für technische Ansätze"
          />
          <Select
            label="Zuständige Denkmalschutzbehörde"
            value={formData.heritageAuthority}
            onChange={(e) => updateFormData('heritageAuthority', e.target.value)}
            options={heritageAuthorityOptions}
          />
        </div>
      )}

      {fields.previousApprovals && (
        <div>
          <Select
            label="Bisherige Erfahrungen mit Genehmigungen"
            value={formData.previousApprovals}
            onChange={(e) => updateFormData('previousApprovals', e.target.value)}
            options={previousApprovalsOptions}
            helperText="Hilft bei der Einschätzung der Genehmigungsfähigkeit"
          />
        </div>
      )}

      {fields.fundingAlert && (
        <Alert variant="info" title="Denkmalschutz-Förderung">
          <div className="text-sm space-y-1">
            <div>• <strong>Erhöhte Förderquoten:</strong> Bis zu 25% statt 20% bei BAFA-Förderung</div>
            <div>• <strong>Zusätzliche Programme:</strong> Denkmalschutz-AfA, regionale Förderprogramme</div>
            <div>• <strong>Steuervorteile:</strong> Erhöhte Abschreibungsmöglichkeiten</div>
          </div>
        </Alert>
      )}
    </div>
  )
}

export default MonumentProtectionStep 