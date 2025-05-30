// Form options for FundingWizard and other components

export const buildingTypeOptions = [
  { value: 'einfamilienhaus', label: 'Einfamilienhaus' },
  { value: 'mehrfamilienhaus', label: 'Mehrfamilienhaus' },
  { value: 'reihenhaus', label: 'Reihenhaus' },
  { value: 'doppelhaushaelfte', label: 'Doppelhaushälfte' },
  { value: 'wohnung', label: 'Eigentumswohnung' }
]

export const energyCertificateOptions = [
  { value: 'verbrauchsausweis', label: 'Verbrauchsausweis' },
  { value: 'bedarfsausweis', label: 'Bedarfsausweis' },
  { value: 'keiner', label: 'Kein Ausweis vorhanden' }
]

export const titleOptions = [
  { value: 'herr', label: 'Herr' },
  { value: 'frau', label: 'Frau' },
  { value: 'divers', label: 'Divers' }
]

export const ownershipOptions = [
  { value: 'eigentuemer', label: 'Eigentümer' },
  { value: 'mieter', label: 'Mieter' },
  { value: 'verwalter', label: 'Verwalter' }
]

export const householdSizeOptions = [
  { value: '1', label: '1 Person' },
  { value: '2', label: '2 Personen' },
  { value: '3', label: '3 Personen' },
  { value: '4', label: '4 Personen' },
  { value: '5+', label: '5+ Personen' }
]

export const stateOptions = [
  { value: 'baden-wuerttemberg', label: 'Baden-Württemberg' },
  { value: 'bayern', label: 'Bayern' },
  { value: 'berlin', label: 'Berlin' },
  { value: 'brandenburg', label: 'Brandenburg' },
  { value: 'bremen', label: 'Bremen' },
  { value: 'hamburg', label: 'Hamburg' },
  { value: 'hessen', label: 'Hessen' },
  { value: 'mecklenburg-vorpommern', label: 'Mecklenburg-Vorpommern' },
  { value: 'niedersachsen', label: 'Niedersachsen' },
  { value: 'nordrhein-westfalen', label: 'Nordrhein-Westfalen' },
  { value: 'rheinland-pfalz', label: 'Rheinland-Pfalz' },
  { value: 'saarland', label: 'Saarland' },
  { value: 'sachsen', label: 'Sachsen' },
  { value: 'sachsen-anhalt', label: 'Sachsen-Anhalt' },
  { value: 'schleswig-holstein', label: 'Schleswig-Holstein' },
  { value: 'thueringen', label: 'Thüringen' }
]

export const investmentOptions = [
  { value: 'unter-10000', label: 'Unter 10.000 €' },
  { value: '10000-25000', label: '10.000 - 25.000 €' },
  { value: '25000-50000', label: '25.000 - 50.000 €' },
  { value: '50000-100000', label: '50.000 - 100.000 €' },
  { value: '100000-200000', label: '100.000 - 200.000 €' },
  { value: 'ueber-200000', label: 'Über 200.000 €' }
]

export const capitalOptions = [
  { value: 'unter-5000', label: 'Unter 5.000 €' },
  { value: '5000-15000', label: '5.000 - 15.000 €' },
  { value: '15000-30000', label: '15.000 - 30.000 €' },
  { value: '30000-50000', label: '30.000 - 50.000 €' },
  { value: '50000-100000', label: '50.000 - 100.000 €' },
  { value: 'ueber-100000', label: 'Über 100.000 €' }
]

export const timelineOptions = [
  { value: 'sofort', label: 'Sofort' },
  { value: '3-monate', label: 'In den nächsten 3 Monaten' },
  { value: '6-monate', label: 'In den nächsten 6 Monaten' },
  { value: '12-monate', label: 'In den nächsten 12 Monaten' },
  { value: 'spaeter', label: 'Später als 12 Monate' }
]

export const monumentOptions = [
  { value: 'ja', label: 'Ja' },
  { value: 'nein', label: 'Nein' },
  { value: 'unbekannt', label: 'Unbekannt' }
]

export const renovationScopeOptions = [
  { 
    value: 'einzelmassnahmen', 
    label: 'Einzelmaßnahmen', 
    description: 'Gezielte Verbesserungen in einzelnen Bereichen' 
  },
  { 
    value: 'teilsanierung', 
    label: 'Teilsanierung', 
    description: 'Sanierung mehrerer Bereiche' 
  },
  { 
    value: 'vollsanierung', 
    label: 'Vollsanierung', 
    description: 'Umfassende energetische Sanierung' 
  }
]

export const fundingTypeOptions = [
  { 
    value: 'zuschuss', 
    label: 'Zuschuss (nicht rückzahlbar)' 
  },
  { 
    value: 'kredit', 
    label: 'Günstiger Kredit' 
  },
  { 
    value: 'beides', 
    label: 'Zuschuss + Kredit' 
  }
]

export const availableMeasures = [
  { id: 'daemmung_dach', label: 'Dachdämmung', icon: '🏠' },
  { id: 'daemmung_fassade', label: 'Fassadendämmung', icon: '🧱' },
  { id: 'fenster', label: 'Fenster & Türen', icon: '🪟' },
  { id: 'heizung', label: 'Heizungsmodernisierung', icon: '🔥' },
  { id: 'waermepumpe', label: 'Wärmepumpe', icon: '♨️' },
  { id: 'solar', label: 'Solarthermie', icon: '☀️' },
  { id: 'photovoltaik', label: 'Photovoltaik-Anlage', icon: '⚡' },
  { id: 'lueftung', label: 'Lüftungsanlage', icon: '💨' }
]

// Energieausweis-spezifische Optionen
export const energyPassBuildingTypeOptions = [
  { value: 'freistehendes-efh', label: 'Freistehendes Einfamilienhaus' },
  { value: 'doppelhaushaelfte', label: 'Doppelhaushälfte' },
  { value: 'reihenhaus-ende', label: 'Reihenhaus (Endhaus)' },
  { value: 'reihenhaus-mitte', label: 'Reihenhaus (Mittelhaus)' }
]

// Mehrfamilienhaus-spezifische Gebäudetypen
export const multiEnergyPassBuildingTypeOptions = [
  { value: 'mehrfamilienhaus-klein', label: 'Mehrfamilienhaus (3-6 WE)' },
  { value: 'mehrfamilienhaus-mittel', label: 'Mehrfamilienhaus (7-20 WE)' },
  { value: 'mehrfamilienhaus-gross', label: 'Mehrfamilienhaus (über 20 WE)' },
  { value: 'wohnblock', label: 'Wohnblock/Plattenbau' },
  { value: 'hochhaus', label: 'Hochhaus' }
]

// Eigentümerschaft-Optionen für Mehrfamilienhäuser
export const ownershipTypeOptions = [
  { value: 'weg', label: 'Wohnungseigentümergemeinschaft (WEG)' },
  { value: 'vermieter', label: 'Vermieter/Eigentümer' },
  { value: 'einzeleigentuemer', label: 'Einzeleigentümer einer Wohnung' },
  { value: 'hausverwaltung', label: 'Hausverwaltung' },
  { value: 'wohnungsbaugesellschaft', label: 'Wohnungsbaugesellschaft' }
]

// Zentrale vs. dezentrale Versorgung
export const heatingDistributionOptions = [
  { value: 'zentral-alle', label: 'Zentral für alle Wohnungen' },
  { value: 'zentral-teilweise', label: 'Zentral + einzelne Etagenheizungen' },
  { value: 'dezentral-etage', label: 'Etagenheizungen' },
  { value: 'dezentral-wohnung', label: 'Einzelöfen/Wohnungsheizungen' },
  { value: 'gemischt', label: 'Gemischte Systeme' }
]

// Warmwasserversorgung für Mehrfamilienhäuser
export const hotWaterDistributionOptions = [
  { value: 'zentral-alle', label: 'Zentral für alle Wohnungen' },
  { value: 'zentral-teilweise', label: 'Zentral + einzelne dezentrale' },
  { value: 'dezentral-alle', label: 'Dezentral in jeder Wohnung' },
  { value: 'gemischt', label: 'Gemischte Systeme' }
]

export const constructionYearOptions = [
  { value: 'vor-1919', label: 'vor 1919' },
  { value: '1919-1948', label: '1919 - 1948' },
  { value: '1949-1957', label: '1949 - 1957' },
  { value: '1958-1968', label: '1958 - 1968' },
  { value: '1969-1978', label: '1969 - 1978' },
  { value: '1979-1983', label: '1979 - 1983' },
  { value: '1984-1994', label: '1984 - 1994' },
  { value: '1995-2001', label: '1995 - 2001' },
  { value: '2002-2009', label: '2002 - 2009' },
  { value: '2010-2015', label: '2010 - 2015' },
  { value: 'ab-2016', label: 'ab 2016' }
]

export const wallConstructionOptions = [
  { value: 'mauerwerk-ungedaemmt', label: 'Mauerwerk ungedämmt' },
  { value: 'mauerwerk-gedaemmt', label: 'Mauerwerk gedämmt' },
  { value: 'beton-ungedaemmt', label: 'Beton ungedämmt' },
  { value: 'beton-gedaemmt', label: 'Beton gedämmt' },
  { value: 'holzbau', label: 'Holzbau' },
  { value: 'waermedaemmverbundsystem', label: 'Wärmedämmverbundsystem (WDVS)' }
]

export const roofConstructionOptions = [
  { value: 'steildach-ungedaemmt', label: 'Steildach ungedämmt' },
  { value: 'steildach-gedaemmt', label: 'Steildach gedämmt' },
  { value: 'flachdach-ungedaemmt', label: 'Flachdach ungedämmt' },
  { value: 'flachdach-gedaemmt', label: 'Flachdach gedämmt' }
]

export const windowTypeOptions = [
  { value: 'einfachverglasung', label: 'Einfachverglasung' },
  { value: 'zweifachverglasung-alt', label: 'Zweifachverglasung (vor 1995)' },
  { value: 'zweifachverglasung-waermeschutz', label: 'Zweifachverglasung Wärmeschutz' },
  { value: 'dreifachverglasung', label: 'Dreifachverglasung' }
]

export const heatingSystemOptions = [
  { value: 'gas-niedertemperatur', label: 'Gas-Niedertemperaturkessel' },
  { value: 'gas-brennwert', label: 'Gas-Brennwertkessel' },
  { value: 'oel-niedertemperatur', label: 'Öl-Niedertemperaturkessel' },
  { value: 'oel-brennwert', label: 'Öl-Brennwertkessel' },
  { value: 'waermepumpe-luft', label: 'Luft-Wärmepumpe' },
  { value: 'waermepumpe-erdwaerme', label: 'Erdwärme-Wärmepumpe' },
  { value: 'fernwaerme', label: 'Fernwärme' },
  { value: 'holz-pellets', label: 'Holz/Pellets' },
  { value: 'nachtspeicher', label: 'Nachtspeicherheizung' }
]

export const hotWaterSystemOptions = [
  { value: 'zentral-mit-heizung', label: 'Zentral (mit Heizung gekoppelt)' },
  { value: 'zentral-separat', label: 'Zentral (separater Warmwasserspeicher)' },
  { value: 'dezentral-durchlauferhitzer', label: 'Dezentral (Durchlauferhitzer)' },
  { value: 'dezentral-boiler', label: 'Dezentral (Boiler/Speicher)' }
]

export const ventilationTypeOptions = [
  { value: 'natuerlich', label: 'Natürliche Lüftung (Fenster)' },
  { value: 'mechanisch-abluft', label: 'Mechanische Abluftanlage' },
  { value: 'mechanisch-zuabluft', label: 'Mechanische Zu-/Abluftanlage' },
  { value: 'waermerueckgewinnung', label: 'Lüftung mit Wärmerückgewinnung' }
]

export const basementOptions = [
  { value: 'kein-keller', label: 'Kein Keller' },
  { value: 'unbeheizt-ungedaemmt', label: 'Unbeheizt, ungedämmt' },
  { value: 'unbeheizt-gedaemmt', label: 'Unbeheizt, gedämmt' },
  { value: 'beheizt', label: 'Beheizt' }
]

export const energyPassTypeOptions = [
  { value: 'verbrauchsausweis', label: 'Verbrauchsausweis' },
  { value: 'bedarfsausweis', label: 'Bedarfsausweis' },
  { value: 'beide-vergleich', label: 'Beide zum Vergleich' }
]

export const utilizationOptions = [
  { value: 'eigennutzung', label: 'Eigennutzung' },
  { value: 'vermietung', label: 'Vermietung' },
  { value: 'verkauf', label: 'Verkauf geplant' }
]

export const urgencyOptions = [
  { value: 'sofort', label: 'Sofort benötigt' },
  { value: '1-woche', label: 'Innerhalb 1 Woche' },
  { value: '2-wochen', label: 'Innerhalb 2 Wochen' },
  { value: '1-monat', label: 'Innerhalb 1 Monat' },
  { value: 'flexibel', label: 'Zeitlich flexibel' }
]

// Hydraulischer Abgleich spezifische Optionen
export const hydraulicBalancingBuildingTypeOptions = [
  { value: 'einfamilienhaus', label: 'Einfamilienhaus' },
  { value: 'doppelhaushaelfte', label: 'Doppelhaushälfte' },
  { value: 'reihenhaus', label: 'Reihenhaus' },
  { value: 'mehrfamilienhaus-klein', label: 'Mehrfamilienhaus (bis 6 WE)' },
  { value: 'mehrfamilienhaus-gross', label: 'Mehrfamilienhaus (über 6 WE)' },
  { value: 'gewerbe', label: 'Gewerbegebäude' }
]

export const heatingSystemDetailOptions = [
  { value: 'radiator-einfach', label: 'Radiatorheizung (einfach)' },
  { value: 'radiator-modern', label: 'Radiatorheizung (modern)' },
  { value: 'fussbodenheizung', label: 'Fußbodenheizung' },
  { value: 'gemischt', label: 'Gemischtes System' },
  { value: 'deckenheizung', label: 'Deckenheizung' },
  { value: 'wandheizung', label: 'Wandheizung' }
]

export const heatGeneratorOptions = [
  { value: 'gas-brennwert', label: 'Gas-Brennwertkessel' },
  { value: 'gas-niedertemperatur', label: 'Gas-Niedertemperaturkessel' },
  { value: 'gas-standard', label: 'Gas-Standardkessel' },
  { value: 'oel-brennwert', label: 'Öl-Brennwertkessel' },
  { value: 'oel-niedertemperatur', label: 'Öl-Niedertemperaturkessel' },
  { value: 'waermepumpe-luft', label: 'Luft-Wärmepumpe' },
  { value: 'waermepumpe-erdwaerme', label: 'Erdwärme-Wärmepumpe' },
  { value: 'fernwaerme', label: 'Fernwärme' },
  { value: 'pellets', label: 'Pelletkessel' },
  { value: 'holz', label: 'Scheitholzkessel' }
]

export const pumpTypeOptions = [
  { value: 'ungeregelteUmwaelzpumpe', label: 'Ungeregelte Umwälzpumpe' },
  { value: 'stufe regelbare', label: 'Stufenweise regelbare Pumpe' },
  { value: 'drehzahlgeregelt', label: 'Drehzahlgeregelte Pumpe' },
  { value: 'differenzdruckgeregelt', label: 'Differenzdruckregelung' },
  { value: 'hocheffizienz', label: 'Hocheffizienzpumpe' },
  { value: 'unbekannt', label: 'Nicht bekannt' }
]

export const valveTypeOptions = [
  { value: 'standardventil', label: 'Standard Thermostatventil' },
  { value: 'voreinstellbar', label: 'Voreinstellbares Thermostatventil' },
  { value: 'elektronisch', label: 'Elektronische Regelung' },
  { value: 'strangregulierventil', label: 'Strangregulierventil vorhanden' },
  { value: 'keineRegelung', label: 'Keine Regelung' }
]

export const heatingDistributionSystemOptions = [
  { value: 'zweirohr-horizontal', label: 'Zweirohrsystem horizontal' },
  { value: 'zweirohr-vertikal', label: 'Zweirohrsystem vertikal' },
  { value: 'einrohr', label: 'Einrohrsystem' },
  { value: 'stern-verteilt', label: 'Sternverteilung' },
  { value: 'stockwerk-verteilt', label: 'Stockwerksverteilung' }
]

export const insulationLevelOptions = [
  { value: 'ungedaemmt', label: 'Ungedämmt (vor 1978)' },
  { value: 'teilgedaemmt', label: 'Teilweise gedämmt (1978-1995)' },
  { value: 'waermeschutz1995', label: 'Wärmeschutz ab 1995' },
  { value: 'enev2002', label: 'EnEV 2002 Standard' },
  { value: 'enev2009', label: 'EnEV 2009 Standard' },
  { value: 'kfw-effizienzhaus', label: 'KfW-Effizienzhaus' },
  { value: 'passivhaus', label: 'Passivhaus-Standard' }
]

export const problemDescriptionOptions = [
  { value: 'einzelne-heizkoerper-kalt', label: 'Einzelne Heizkörper werden nicht warm' },
  { value: 'ungleichmaessige-waerme', label: 'Ungleichmäßige Wärmeverteilung' },
  { value: 'geraeusche', label: 'Geräusche in der Heizung' },
  { value: 'hoher-verbrauch', label: 'Hoher Energieverbrauch' },
  { value: 'temperatur-schwankungen', label: 'Temperaturschwankungen' },
  { value: 'pumpe-laeuft-staendig', label: 'Pumpe läuft ständig' },
  { value: 'neue-foerderung', label: 'Förderung nutzen' },
  { value: 'modernisierung', label: 'Nach Modernisierung/Sanierung' }
]

export const urgencyHydraulicOptions = [
  { value: 'sofort', label: 'Sofort (Heizung funktioniert nicht richtig)' },
  { value: '1-2-wochen', label: '1-2 Wochen' },
  { value: '1-monat', label: 'Innerhalb eines Monats' },
  { value: 'naechste-heizperiode', label: 'Zur nächsten Heizperiode' },
  { value: 'flexibel', label: 'Flexibel' }
]

export const heatingCurveOptions = [
  { value: 'steilkurve', label: 'Steile Heizkurve (über 1,4)' },
  { value: 'standard', label: 'Standard Heizkurve (1,0-1,4)' },
  { value: 'flachkurve', label: 'Flache Heizkurve (unter 1,0)' },
  { value: 'unbekannt', label: 'Einstellung unbekannt' }
]

// Heizungscheck 2.0 - Schornsteinfeger spezifische Optionen
export const heatingCheckServiceTypeOptions = [
  { value: 'standalone', label: 'Einzelner Heizungscheck' },
  { value: 'combined-kehr', label: 'Kombiniert mit Kehrtermin' },
  { value: 'combined-feuerstaetten', label: 'Kombiniert mit Feuerstättenschau' },
  { value: 'combined-abgas', label: 'Kombiniert mit Abgasmessung' },
  { value: 'combined-wartung', label: 'Kombiniert mit Anlagenwartung' }
]

export const heatingCheckUrgencyOptions = [
  { value: 'sofort', label: 'Sofort (innerhalb 2 Wochen)' },
  { value: 'normal', label: 'Normal (innerhalb 4-6 Wochen)' },
  { value: 'geplant', label: 'Geplant (innerhalb 3 Monaten)' },
  { value: 'flexibel', label: 'Flexibel (nach Verfügbarkeit)' }
]

export const existingDocumentationOptions = [
  { value: 'feuerstaettenbescheid', label: 'Feuerstättenbescheid vorhanden' },
  { value: 'abgasmessung', label: 'Letzte Abgasmessung vorhanden' },
  { value: 'wartungsprotokoll', label: 'Wartungsprotokoll vorhanden' },
  { value: 'bedienungsanleitung', label: 'Bedienungsanleitung vorhanden' },
  { value: 'keine', label: 'Keine Dokumentation vorhanden' }
]

export const heatingSystemAccessOptions = [
  { value: 'frei-zugaenglich', label: 'Frei zugänglich' },
  { value: 'schluessel-erforderlich', label: 'Schlüssel erforderlich' },
  { value: 'anwesenheit-erforderlich', label: 'Anwesenheit des Eigentümers erforderlich' },
  { value: 'hausmeister', label: 'Zugang über Hausmeister/Verwaltung' },
  { value: 'besondere-umstaende', label: 'Besondere Umstände (Kommentar erforderlich)' }
]

export const combinedServiceOptions = [
  { value: 'kehrung', label: 'Kehrung/Reinigung' },
  { value: 'abgasmessung', label: 'Abgasmessung' },
  { value: 'feuerstaettenschau', label: 'Feuerstättenschau' },
  { value: 'co-messung', label: 'CO-Messung' },
  { value: 'dichtigkeitspruefung', label: 'Dichtheitsprüfung' },
  { value: 'rauchrohrreinigung', label: 'Rauchrohrreinigung' }
]

// GEG Wizard specific options
export const heatingTypeOptions = [
  { value: '', label: 'Heizungstyp auswählen' },
  { value: 'gas', label: 'Gasheizung' },
  { value: 'oil', label: 'Ölheizung' },
  { value: 'heat_pump', label: 'Wärmepumpe' },
  { value: 'wood_pellets', label: 'Pelletheizung' },
  { value: 'district_heating', label: 'Fernwärme' },
  { value: 'electric', label: 'Elektroheizung' },
  { value: 'hybrid', label: 'Hybridheizung' },
  { value: 'other', label: 'Sonstiges' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const heatingStatusOptions = [
  { value: '', label: 'Status auswählen' },
  { value: 'working', label: 'Funktioniert einwandfrei' },
  { value: 'needs_repair', label: 'Reparaturbedürftig' },
  { value: 'defective', label: 'Defekt / nicht reparierbar' },
  { value: 'over_30_years', label: 'Über 30 Jahre alt' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const communityTypeOptions = [
  { value: '', label: 'Gemeindegröße auswählen' },
  { value: 'large', label: 'Großstadt (>100.000 Einwohner)' },
  { value: 'small', label: 'Kleinere Stadt/Gemeinde (<100.000 Einwohner)' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const heatPlanOptions = [
  { value: '', label: 'Status auswählen' },
  { value: 'yes', label: 'Ja, vorhanden' },
  { value: 'no', label: 'Nein, noch nicht vorhanden' },
  { value: 'planned', label: 'In Planung' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const propertyTypeOptions = [
  { value: '', label: 'Eigentum auswählen' },
  { value: 'owner_occupied', label: 'Eigengenutzt' },
  { value: 'rental', label: 'Vermietet' },
  { value: 'weg', label: 'Wohnungseigentümergemeinschaft (WEG)' },
  { value: 'tenant', label: 'Mieter' },
  { value: 'usufruct', label: 'Nießbrauch' }
]

export const heatingUrgencyOptions = [
  { value: '', label: 'Dringlichkeit auswählen' },
  { value: 'immediate', label: 'Sofort (Heizung defekt)' },
  { value: 'urgent', label: 'Innerhalb 6 Monaten' },
  { value: 'planned', label: 'Innerhalb 1-2 Jahren' },
  { value: 'future', label: 'Längerfristig geplant' },
  { value: 'none', label: 'Noch nicht geplant' }
]

export const consultationReasonOptions = [
  { value: '', label: 'Beratungsgrund auswählen' },
  { value: 'geg_mandatory', label: 'GEG-Pflichtberatung (neue Gas-/Ölheizung)' },
  { value: 'heating_replacement', label: 'Heizungsaustausch geplant' },
  { value: 'general_consultation', label: 'Allgemeine Energieberatung' },
  { value: 'renovation_planning', label: 'Sanierungsplanung' },
  { value: 'funding_advice', label: 'Fördermittelberatung' },
  { value: 'cost_optimization', label: 'Kostenoptimierung' },
  { value: 'getting_to_know', label: 'Kennenlernen / Erstberatung' }
]

export const insulationStatusOptions = [
  { value: '', label: 'Dämmzustand auswählen' },
  { value: 'good', label: 'Gut gedämmt' },
  { value: 'moderate', label: 'Teilweise gedämmt' },
  { value: 'poor', label: 'Schlecht gedämmt' },
  { value: 'none', label: 'Nicht gedämmt' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const windowStatusOptions = [
  { value: '', label: 'Fensterqualität auswählen' },
  { value: 'modern', label: 'Modern (Mehrfachverglasung)' },
  { value: 'standard', label: 'Standard (Doppelverglasung)' },
  { value: 'old', label: 'Alt (Einfachverglasung)' },
  { value: 'mixed', label: 'Gemischt' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const budgetRangeOptions = [
  { value: '', label: 'Budgetrahmen auswählen' },
  { value: 'under_10k', label: 'Unter 10.000 €' },
  { value: '10k_25k', label: '10.000 - 25.000 €' },
  { value: '25k_50k', label: '25.000 - 50.000 €' },
  { value: '50k_100k', label: '50.000 - 100.000 €' },
  { value: 'over_100k', label: 'Über 100.000 €' },
  { value: 'open', label: 'Offen / noch nicht festgelegt' },
  { value: 'no_answer', label: 'Keine Angabe' }
]

export const contactPreferenceOptions = [
  { value: '', label: 'Kontaktart auswählen' },
  { value: 'phone', label: 'Telefonisch' },
  { value: 'email', label: 'Per E-Mail' },
  { value: 'in_person', label: 'Vor-Ort-Termin' },
  { value: 'video', label: 'Videogespräch' },
  { value: 'flexible', label: 'Flexibel' }
]

// Energieberatung Wohngebäude spezifische Optionen
export const consultationTypeOptions = [
  { value: '', label: 'Beratungsart auswählen' },
  { value: 'step_by_step', label: 'Schritt-für-Schritt Sanierung' },
  { value: 'comprehensive', label: 'Umfassende Sanierung' },
  { value: 'efficiency_house', label: 'Effizienzhaus-Standard erreichen' },
  { value: 'first_consultation', label: 'Erstberatung / Orientierung' }
]

export const priorityOptions = [
  { value: '', label: 'Priorität auswählen' },
  { value: 'energy_costs', label: 'Energiekosten senken' },
  { value: 'comfort', label: 'Wohnkomfort erhöhen' },
  { value: 'value_increase', label: 'Immobilienwert steigern' },
  { value: 'climate_protection', label: 'Klimaschutz / CO₂ reduzieren' },
  { value: 'modernization', label: 'Allgemeine Modernisierung' }
]

export const informationSourceOptions = [
  { value: '', label: 'Wie sind Sie auf uns aufmerksam geworden?' },
  { value: 'internet_search', label: 'Internet-Suche' },
  { value: 'recommendation', label: 'Empfehlung von Bekannten' },
  { value: 'craftsman', label: 'Handwerker / Fachunternehmen' },
  { value: 'energy_consultant', label: 'Energieberater' },
  { value: 'municipality', label: 'Gemeinde / Stadtverwaltung' },
  { value: 'consumer_center', label: 'Verbraucherzentrale' },
  { value: 'energy_company', label: 'Energieversorger' },
  { value: 'advertisement', label: 'Werbung / Anzeige' },
  { value: 'fair_event', label: 'Messe / Veranstaltung' },
  { value: 'other', label: 'Sonstiges' }
]

export const heatingIssueOptions = [
  { value: '', label: 'Problem auswählen' },
  { value: 'high_costs', label: 'Hohe Heizkosten' },
  { value: 'cold_rooms', label: 'Einzelne Räume zu kalt' },
  { value: 'warm_rooms', label: 'Einzelne Räume zu warm' },
  { value: 'noise', label: 'Geräusche in der Heizung' },
  { value: 'frequent_defects', label: 'Häufige Defekte' },
  { value: 'old_system', label: 'Sehr alte Anlage' },
  { value: 'no_issues', label: 'Keine besonderen Probleme' }
]

export const comfortIssueOptions = [
  { value: '', label: 'Problem auswählen' },
  { value: 'cold_walls', label: 'Kalte Wände / Zugluft' },
  { value: 'condensation', label: 'Kondenswasser an Fenstern' },
  { value: 'mold_risk', label: 'Schimmelgefahr' },
  { value: 'summer_heat', label: 'Überhitzung im Sommer' },
  { value: 'poor_ventilation', label: 'Schlechte Raumluft' },
  { value: 'noise_protection', label: 'Mangelnder Lärmschutz' },
  { value: 'no_issues', label: 'Keine besonderen Probleme' }
]

export const experienceOptions = [
  { value: '', label: 'Erfahrung auswählen' },
  { value: 'none', label: 'Keine Erfahrung' },
  { value: 'little', label: 'Wenig Erfahrung' },
  { value: 'some', label: 'Einige Erfahrung' },
  { value: 'experienced', label: 'Erfahren' },
  { value: 'professional', label: 'Fachmann' }
]

export const financingOptions = [
  { value: '', label: 'Finanzierung auswählen' },
  { value: 'equity', label: 'Eigenkapital' },
  { value: 'kfw_loan', label: 'KfW-Kredit' },
  { value: 'bank_loan', label: 'Bankkredit' },
  { value: 'subsidy', label: 'Zuschüsse nutzen' },
  { value: 'combination', label: 'Kombinierte Finanzierung' },
  { value: 'undecided', label: 'Noch unentschieden' }
]

export const implementationTimeOptions = [
  { value: '', label: 'Zeitrahmen auswählen' },
  { value: 'immediately', label: 'Sofort' },
  { value: '6_months', label: 'Innerhalb 6 Monate' },
  { value: '1_year', label: 'Innerhalb 1 Jahr' },
  { value: '2_years', label: 'Innerhalb 2 Jahre' },
  { value: '5_years', label: 'Innerhalb 5 Jahre' },
  { value: 'long_term', label: 'Langfristig (über 5 Jahre)' },
  { value: 'undefined', label: 'Noch unbestimmt' }
]

export const preferredMeetingOptions = [
  { value: '', label: 'Bevorzugter Termin' },
  { value: 'morning', label: 'Vormittags (9-12 Uhr)' },
  { value: 'afternoon', label: 'Nachmittags (13-17 Uhr)' },
  { value: 'evening', label: 'Abends (18-20 Uhr)' },
  { value: 'weekend', label: 'Wochenende' },
  { value: 'flexible', label: 'Flexibel' }
]

export const consultationLocationOptions = [
  { value: '', label: 'Beratungsort auswählen' },
  { value: 'on_site', label: 'Vor Ort beim Gebäude' },
  { value: 'office', label: 'In unserem Büro' },
  { value: 'video_call', label: 'Online per Video' },
  { value: 'phone', label: 'Telefonisch' },
  { value: 'mixed', label: 'Kombination verschiedener Formate' }
]

// Nicht-Wohngebäude spezifische Optionen
export const nonResidentialBuildingTypeOptions = [
  { value: '', label: 'Gebäudetyp auswählen' },
  { value: 'office', label: 'Bürogebäude' },
  { value: 'retail', label: 'Einzelhandel / Verkaufsstätte' },
  { value: 'hotel', label: 'Hotel / Beherbergung' },
  { value: 'restaurant', label: 'Restaurant / Gastronomie' },
  { value: 'school', label: 'Schule / Bildungseinrichtung' },
  { value: 'hospital', label: 'Krankenhaus / Gesundheitswesen' },
  { value: 'warehouse', label: 'Lager / Logistik' },
  { value: 'production', label: 'Produktionsstätte / Industrie' },
  { value: 'workshop', label: 'Werkstatt / Handwerk' },
  { value: 'community', label: 'Gemeinschaftsgebäude' },
  { value: 'sports', label: 'Sportstätte' },
  { value: 'culture', label: 'Kulturgebäude' },
  { value: 'mixed_use', label: 'Mischnutzung' },
  { value: 'other', label: 'Sonstiges' }
]

export const companyTypeOptions = [
  { value: '', label: 'Unternehmen auswählen' },
  { value: 'kmu', label: 'Kleine und mittlere Unternehmen (KMU)' },
  { value: 'non_kmu_under_500k', label: 'Nicht-KMU (unter 500.000 kWh/Jahr)' },
  { value: 'municipality', label: 'Kommune / Gebietskörperschaft' },
  { value: 'non_profit', label: 'Gemeinnützige Organisation' },
  { value: 'religious', label: 'Religionsgemeinschaft' },
  { value: 'foundation', label: 'Stiftung' }
]

export const consultationModuleOptions = [
  { value: '', label: 'Beratungsmodul auswählen' },
  { value: 'module1', label: 'Modul 1: Energieaudit DIN EN 16247' },
  { value: 'module2', label: 'Modul 2: Energieberatung DIN V 18599' },
  { value: 'module3', label: 'Modul 3: Contracting-Orientierungsberatung' }
]

export const consultationGoalOptions = [
  { value: '', label: 'Beratungsziel auswählen' },
  { value: 'step_by_step', label: 'Schritt-für-Schritt Sanierung' },
  { value: 'comprehensive', label: 'Umfassende Sanierung' },
  { value: 'new_construction', label: 'Neubauberatung' },
  { value: 'contracting', label: 'Contracting-Orientierung' },
  { value: 'general', label: 'Allgemeine Energieberatung' }
]

export const operatingHoursOptions = [
  { value: '', label: 'Betriebszeiten auswählen' },
  { value: 'normal_office', label: 'Normal (Mo-Fr, 8-18 Uhr)' },
  { value: 'extended_office', label: 'Erweitert (Mo-Sa, 6-20 Uhr)' },
  { value: 'shift_work', label: 'Schichtbetrieb (2-3 Schichten)' },
  { value: 'continuous', label: 'Kontinuierlich (24/7)' },
  { value: 'seasonal', label: 'Saisonal / unregelmäßig' },
  { value: 'weekend_only', label: 'Nur Wochenende' }
]

export const energyConsumptionRangeOptions = [
  { value: '', label: 'Verbrauchsbereich auswählen' },
  { value: 'under_50k', label: 'Unter 50.000 kWh/Jahr' },
  { value: '50k_100k', label: '50.000 - 100.000 kWh/Jahr' },
  { value: '100k_250k', label: '100.000 - 250.000 kWh/Jahr' },
  { value: '250k_500k', label: '250.000 - 500.000 kWh/Jahr' },
  { value: 'over_500k', label: 'Über 500.000 kWh/Jahr' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const coolingSystemOptions = [
  { value: '', label: 'Kühlsystem auswählen' },
  { value: 'none', label: 'Keine Kühlung' },
  { value: 'split_units', label: 'Split-Klimageräte' },
  { value: 'central_cooling', label: 'Zentrale Kühlung' },
  { value: 'chiller', label: 'Kaltwassersatz' },
  { value: 'free_cooling', label: 'Freie Kühlung' },
  { value: 'mixed', label: 'Gemischte Systeme' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const ventilationSystemOptions = [
  { value: '', label: 'Lüftungssystem auswählen' },
  { value: 'natural', label: 'Natürliche Lüftung (Fenster)' },
  { value: 'mechanical_exhaust', label: 'Mechanische Abluft' },
  { value: 'balanced', label: 'Zu-/Abluftanlage' },
  { value: 'heat_recovery', label: 'Mit Wärmerückgewinnung' },
  { value: 'air_conditioning', label: 'Vollklimaanlage' },
  { value: 'mixed', label: 'Gemischte Systeme' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const lightingSystemOptions = [
  { value: '', label: 'Beleuchtung auswählen' },
  { value: 'led_modern', label: 'LED (modern)' },
  { value: 'led_older', label: 'LED (älter)' },
  { value: 'fluorescent', label: 'Leuchtstoffröhren' },
  { value: 'halogen', label: 'Halogenlampen' },
  { value: 'incandescent', label: 'Glühlampen' },
  { value: 'mixed', label: 'Gemischte Beleuchtung' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const itEquipmentOptions = [
  { value: '', label: 'IT-Ausstattung auswählen' },
  { value: 'minimal', label: 'Minimal (wenige PCs/Laptops)' },
  { value: 'standard', label: 'Standard (Büroausstattung)' },
  { value: 'extensive', label: 'Umfangreich (viele Geräte)' },
  { value: 'server_room', label: 'Mit Serverraum' },
  { value: 'data_center', label: 'Rechenzentrum' },
  { value: 'industrial_control', label: 'Industrielle Steuerung' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const productionProcessOptions = [
  { value: '', label: 'Produktionsprozesse auswählen' },
  { value: 'none', label: 'Keine Produktion' },
  { value: 'light_assembly', label: 'Leichte Montage' },
  { value: 'mechanical_processing', label: 'Mechanische Bearbeitung' },
  { value: 'heat_treatment', label: 'Wärmebehandlung' },
  { value: 'chemical_process', label: 'Chemische Prozesse' },
  { value: 'food_processing', label: 'Lebensmittelverarbeitung' },
  { value: 'textile', label: 'Textilverarbeitung' },
  { value: 'other_industrial', label: 'Sonstige Industrieprozesse' }
]

export const energyManagementOptions = [
  { value: '', label: 'Energiemanagement auswählen' },
  { value: 'none', label: 'Kein System vorhanden' },
  { value: 'simple_monitoring', label: 'Einfache Überwachung' },
  { value: 'iso50001', label: 'ISO 50001 zertifiziert' },
  { value: 'emas', label: 'EMAS registriert' },
  { value: 'other_certified', label: 'Anderes zertifiziertes System' },
  { value: 'planned', label: 'Einführung geplant' }
]

export const lastEnergyConsultationOptions = [
  { value: '', label: 'Letzte Beratung auswählen' },
  { value: 'never', label: 'Noch nie' },
  { value: 'under_4_years', label: 'Weniger als 4 Jahre' },
  { value: 'over_4_years', label: 'Über 4 Jahre' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const investmentReadinessOptions = [
  { value: '', label: 'Investitionsbereitschaft auswählen' },
  { value: 'immediate', label: 'Sofort umsetzbar' },
  { value: '1_year', label: 'Innerhalb 1 Jahr' },
  { value: '2_3_years', label: 'Innerhalb 2-3 Jahre' },
  { value: 'long_term', label: 'Langfristig (>3 Jahre)' },
  { value: 'depending_on_results', label: 'Abhängig von Beratungsergebnissen' },
  { value: 'uncertain', label: 'Noch ungewiss' }
]

export const specialRequirementsOptions = [
  { value: '', label: 'Besondere Anforderungen' },
  { value: 'none', label: 'Keine besonderen Anforderungen' },
  { value: 'monument_protection', label: 'Denkmalschutz' },
  { value: 'hygiene_requirements', label: 'Hygieneanforderungen' },
  { value: 'security_requirements', label: 'Sicherheitsanforderungen' },
  { value: 'noise_protection', label: 'Lärmschutz' },
  { value: 'accessibility', label: 'Barrierefreiheit' },
  { value: 'fire_protection', label: 'Brandschutz' },
  { value: 'explosion_protection', label: 'Explosionsschutz' },
  { value: 'cleanroom', label: 'Reinraum-Anforderungen' }
]

// Denkmalschutz spezifische Optionen
export const monumentProtectionLevelOptions = [
  { value: '', label: 'Denkmalschutz-Status auswählen' },
  { value: 'full_monument', label: 'Einzeldenkmal (Vollschutz)' },
  { value: 'ensemble', label: 'Ensembleschutz' },
  { value: 'listed_building', label: 'Kulturdenkmal' },
  { value: 'heritage_area', label: 'Denkmalbereich' },
  { value: 'worthy_preservation', label: 'Erhaltenswert (nicht gelistet)' },
  { value: 'partial_protection', label: 'Teilweise geschützt' },
  { value: 'under_review', label: 'Prüfung läuft' },
  { value: 'unclear', label: 'Status unklar' }
]

export const monumentBuildingTypeOptions = [
  { value: '', label: 'Denkmaltyp auswählen' },
  { value: 'residential_villa', label: 'Wohnhaus / Villa' },
  { value: 'apartment_building', label: 'Mehrfamilienhaus' },
  { value: 'farmhouse', label: 'Bauernhaus / Gutshof' },
  { value: 'castle_palace', label: 'Schloss / Palais' },
  { value: 'church', label: 'Kirche / religiöses Gebäude' },
  { value: 'school_historic', label: 'Historisches Schulgebäude' },
  { value: 'factory_industrial', label: 'Industriedenkmal / Fabrik' },
  { value: 'half_timbered', label: 'Fachwerkhaus' },
  { value: 'historic_center', label: 'Altstadtgebäude' },
  { value: 'public_building', label: 'Öffentliches Gebäude' },
  { value: 'military', label: 'Militärgebäude' },
  { value: 'other_monument', label: 'Sonstiges Denkmal' }
]

export const constructionPeriodOptions = [
  { value: '', label: 'Bauzeit auswählen' },
  { value: 'medieval', label: 'Mittelalter (bis 1500)' },
  { value: 'renaissance', label: 'Renaissance (1500-1650)' },
  { value: 'baroque', label: 'Barock (1650-1770)' },
  { value: 'classicism', label: 'Klassizismus (1770-1840)' },
  { value: 'historicism', label: 'Historismus (1840-1900)' },
  { value: 'art_nouveau', label: 'Jugendstil (1890-1910)' },
  { value: 'early_modern', label: 'Frühe Moderne (1900-1933)' },
  { value: 'post_war', label: 'Nachkriegszeit (1945-1970)' },
  { value: 'modern_monument', label: 'Moderne Denkmäler (ab 1970)' },
  { value: 'mixed_periods', label: 'Verschiedene Bauphasen' },
  { value: 'unknown_period', label: 'Unbekannt' }
]

export const heritageAuthorityOptions = [
  { value: '', label: 'Zuständige Behörde' },
  { value: 'not_contacted', label: 'Noch nicht kontaktiert' },
  { value: 'state_authority', label: 'Landesdenkmalamt' },
  { value: 'regional_authority', label: 'Regionale Denkmalschutzbehörde' },
  { value: 'municipal_authority', label: 'Kommunale Denkmalschutzbehörde' },
  { value: 'church_authority', label: 'Kirchliche Denkmalpflege' },
  { value: 'federal_authority', label: 'Bundesdenkmalamt' },
  { value: 'private_expert', label: 'Privater Sachverständiger' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const previousApprovalsOptions = [
  { value: '', label: 'Vorherige Genehmigungen' },
  { value: 'none', label: 'Keine bisherigen Maßnahmen' },
  { value: 'windows_approved', label: 'Fenster (genehmigt)' },
  { value: 'roof_approved', label: 'Dach (genehmigt)' },
  { value: 'heating_approved', label: 'Heizung (genehmigt)' },
  { value: 'partial_renovation', label: 'Teilrenovierung durchgeführt' },
  { value: 'pending_applications', label: 'Anträge in Bearbeitung' },
  { value: 'rejected_applications', label: 'Abgelehnte Anträge' },
  { value: 'mixed_results', label: 'Gemischte Erfahrungen' }
]

export const technicalRestrictionsOptions = [
  { value: '', label: 'Bekannte Einschränkungen' },
  { value: 'facade_restrictions', label: 'Fassade darf nicht verändert werden' },
  { value: 'window_restrictions', label: 'Originalfenster müssen erhalten bleiben' },
  { value: 'roof_restrictions', label: 'Dachform/-material geschützt' },
  { value: 'interior_restrictions', label: 'Innenräume geschützt' },
  { value: 'structural_restrictions', label: 'Tragwerk darf nicht verändert werden' },
  { value: 'material_requirements', label: 'Spezielle Materialvorgaben' },
  { value: 'color_requirements', label: 'Farbvorgaben' },
  { value: 'technique_restrictions', label: 'Technische Einschränkungen' },
  { value: 'access_restrictions', label: 'Eingeschränkter Zugang' },
  { value: 'seasonal_restrictions', label: 'Saisonale Beschränkungen' },
  { value: 'no_restrictions', label: 'Keine bekannten Einschränkungen' },
  { value: 'unclear', label: 'Einschränkungen unklar' }
]

export const monumentConditionOptions = [
  { value: '', label: 'Zustand des Denkmals' },
  { value: 'excellent', label: 'Sehr gut erhalten' },
  { value: 'good', label: 'Gut erhalten' },
  { value: 'fair', label: 'Befriedigend' },
  { value: 'poor', label: 'Sanierungsbedürftig' },
  { value: 'critical', label: 'Akut gefährdet' },
  { value: 'partial_damage', label: 'Teilweise beschädigt' },
  { value: 'renovated', label: 'Bereits teilrenoviert' },
  { value: 'mixed_condition', label: 'Unterschiedlicher Zustand' },
  { value: 'assessment_needed', label: 'Bewertung erforderlich' }
]

export const specialFeaturesOptions = [
  { value: '', label: 'Besondere Merkmale' },
  { value: 'historic_heating', label: 'Historische Heizungsanlagen' },
  { value: 'ornamental_facade', label: 'Ornamentierte Fassade' },
  { value: 'valuable_interiors', label: 'Wertvolle Innenausstattung' },
  { value: 'timber_frame', label: 'Fachwerk' },
  { value: 'natural_stone', label: 'Natursteinmauerwerk' },
  { value: 'historic_windows', label: 'Historische Fenster' },
  { value: 'listed_roof', label: 'Denkmalgeschütztes Dach' },
  { value: 'archaeological', label: 'Archäologische Substanz' },
  { value: 'artistic_elements', label: 'Künstlerische Elemente' },
  { value: 'technical_monuments', label: 'Technische Denkmäler' },
  { value: 'gardens_landscape', label: 'Denkmalgeschützte Garten-/Landschaftsanlage' },
  { value: 'none_special', label: 'Keine besonderen Merkmale' }
]

export const expertiseAvailableOptions = [
  { value: '', label: 'Verfügbare Expertise' },
  { value: 'heritage_architect', label: 'Denkmalschutz-Architekt vorhanden' },
  { value: 'heritage_engineer', label: 'Denkmalschutz-Ingenieur vorhanden' },
  { value: 'restoration_expert', label: 'Restaurator vorhanden' },
  { value: 'craftsman_specialist', label: 'Spezialisierte Handwerker bekannt' },
  { value: 'planning_team', label: 'Erfahrenes Planungsteam' },
  { value: 'previous_projects', label: 'Erfahrung aus anderen Projekten' },
  { value: 'need_recommendations', label: 'Empfehlungen benötigt' },
  { value: 'no_expertise', label: 'Keine Expertise vorhanden' }
]

export const priorityAspectsOptions = [
  { value: '', label: 'Prioritäten setzen' },
  { value: 'monument_preservation', label: 'Denkmalschutz hat Vorrang' },
  { value: 'energy_efficiency', label: 'Energieeffizienz maximieren' },
  { value: 'cost_optimization', label: 'Kosten minimieren' },
  { value: 'comfort_improvement', label: 'Wohnkomfort verbessern' },
  { value: 'structural_integrity', label: 'Bausubstanz erhalten' },
  { value: 'reversible_measures', label: 'Reversible Maßnahmen bevorzugen' },
  { value: 'authentic_materials', label: 'Authentische Materialien verwenden' },
  { value: 'minimal_intervention', label: 'Minimaler Eingriff' },
  { value: 'future_flexibility', label: 'Zukunftsfähige Lösungen' },
  { value: 'balanced_approach', label: 'Ausgewogener Ansatz' }
]

export const fundingAwarenessOptions = [
  { value: '', label: 'Kenntnis über Fördermöglichkeiten' },
  { value: 'well_informed', label: 'Gut informiert über Denkmalförderung' },
  { value: 'basic_knowledge', label: 'Grundkenntnisse vorhanden' },
  { value: 'some_research', label: 'Eigene Recherche betrieben' },
  { value: 'heard_about', label: 'Davon gehört' },
  { value: 'no_knowledge', label: 'Keine Kenntnisse' },
  { value: 'confused', label: 'Verwirrend / widersprüchliche Infos' },
  { value: 'need_guidance', label: 'Beratung dringend benötigt' }
]

// Heizlastberechnung spezifische Optionen
export const calculationMethodOptions = [
  { value: '', label: 'Berechnungsmethode auswählen' },
  { value: 'din_12831_detailed', label: 'DIN EN 12831 - Detaillierte Berechnung' },
  { value: 'din_12831_simplified', label: 'DIN EN 12831 - Vereinfachte Berechnung' },
  { value: 'din_15378_estimation', label: 'DIN EN 15378 - Überschlägige Berechnung' },
  { value: 'software_based', label: 'Software-basierte Berechnung' },
  { value: 'recommendation_needed', label: 'Empfehlung benötigt' }
]

export const calculationPurposeOptions = [
  { value: '', label: 'Zweck der Berechnung' },
  { value: 'heat_pump_sizing', label: 'Wärmepumpen-Auslegung' },
  { value: 'heating_system_sizing', label: 'Heizungsanlagen-Dimensionierung' },
  { value: 'radiator_sizing', label: 'Heizkörper-Auslegung' },
  { value: 'energy_concept', label: 'Energiekonzept erstellen' },
  { value: 'renovation_planning', label: 'Sanierungsplanung' },
  { value: 'building_permit', label: 'Baugenehmigung' },
  { value: 'funding_application', label: 'Förderantrag' },
  { value: 'energy_consulting', label: 'Energieberatung' },
  { value: 'hydraulic_balancing', label: 'Hydraulischer Abgleich' },
  { value: 'efficiency_analysis', label: 'Effizienzanalyse' }
]

export const heatingSystemPlanOptions = [
  { value: '', label: 'Geplantes Heizsystem' },
  { value: 'air_heat_pump', label: 'Luft-Wasser-Wärmepumpe' },
  { value: 'ground_heat_pump', label: 'Sole-Wasser-Wärmepumpe' },
  { value: 'water_heat_pump', label: 'Wasser-Wasser-Wärmepumpe' },
  { value: 'hybrid_heat_pump', label: 'Hybrid-Wärmepumpe' },
  { value: 'gas_condensing', label: 'Gas-Brennwertkessel' },
  { value: 'oil_condensing', label: 'Öl-Brennwertkessel' },
  { value: 'pellet_boiler', label: 'Pelletkessel' },
  { value: 'wood_boiler', label: 'Holzkessel' },
  { value: 'district_heating', label: 'Fernwärme' },
  { value: 'electric_heating', label: 'Elektroheizung' },
  { value: 'hydrogen_ready', label: 'H2-Ready Gasheizung' },
  { value: 'undecided', label: 'Noch unentschieden' },
  { value: 'multiple_options', label: 'Mehrere Optionen prüfen' }
]

export const currentHeatingSystemOptions = [
  { value: '', label: 'Aktuelle Heizung' },
  { value: 'gas_old', label: 'Alte Gasheizung (>15 Jahre)' },
  { value: 'gas_modern', label: 'Moderne Gasheizung (<15 Jahre)' },
  { value: 'oil_old', label: 'Alte Ölheizung (>15 Jahre)' },
  { value: 'oil_modern', label: 'Moderne Ölheizung (<15 Jahre)' },
  { value: 'electric_old', label: 'Elektroheizung' },
  { value: 'coal_wood', label: 'Kohle-/Holzheizung' },
  { value: 'district_heating', label: 'Fernwärme' },
  { value: 'heat_pump_old', label: 'Alte Wärmepumpe' },
  { value: 'multiple_systems', label: 'Verschiedene Systeme' },
  { value: 'none', label: 'Keine Heizung vorhanden' },
  { value: 'unknown', label: 'Unbekannt' }
]

export const buildingQualityOptions = [
  { value: '', label: 'Gebäudequalität einschätzen' },
  { value: 'passive_house', label: 'Passivhaus-Standard' },
  { value: 'kfw_40', label: 'KfW 40 Effizienzhaus' },
  { value: 'kfw_55', label: 'KfW 55 Effizienzhaus' },
  { value: 'kfw_70', label: 'KfW 70 Effizienzhaus' },
  { value: 'kfw_85', label: 'KfW 85 Effizienzhaus' },
  { value: 'enev_2016', label: 'EnEV 2016 Standard' },
  { value: 'enev_2009', label: 'EnEV 2009 Standard' },
  { value: 'well_insulated', label: 'Gut gedämmt (nach 1995)' },
  { value: 'partially_insulated', label: 'Teilweise gedämmt' },
  { value: 'minimal_insulation', label: 'Wenig gedämmt (1980er)' },
  { value: 'uninsulated', label: 'Ungedämmt (vor 1980)' },
  { value: 'monument_standard', label: 'Denkmalschutz-Standard' },
  { value: 'unknown_quality', label: 'Unbekannt' }
]

export const occupancyProfileOptions = [
  { value: '', label: 'Nutzungsprofil' },
  { value: 'normal_family', label: 'Normale Familienwohnung' },
  { value: 'home_office', label: 'Mit Home-Office' },
  { value: 'elderly_couple', label: 'Älteres Paar (ganztags)' },
  { value: 'single_working', label: 'Berufstätige Einzelperson' },
  { value: 'shift_work', label: 'Schichtarbeit' },
  { value: 'students', label: 'Studenten-WG' },
  { value: 'weekend_house', label: 'Wochenendhaus' },
  { value: 'vacation_rental', label: 'Ferienvermietung' },
  { value: 'low_occupancy', label: 'Selten bewohnt' },
  { value: 'high_occupancy', label: 'Überdurchschnittlich bewohnt' }
]

export const roomTemperaturePreferencesOptions = [
  { value: '', label: 'Temperaturwünsche' },
  { value: 'standard_20', label: 'Standard (20°C Wohnräume)' },
  { value: 'comfort_22', label: 'Komfort (22°C Wohnräume)' },
  { value: 'energy_saving_18', label: 'Energiesparend (18°C)' },
  { value: 'variable_zones', label: 'Unterschiedliche Zonen' },
  { value: 'individual_control', label: 'Individuelle Raumregelung' },
  { value: 'elderly_comfort', label: 'Seniorengerecht (höhere Temperaturen)' },
  { value: 'child_friendly', label: 'Kinderfreundlich (konstant warm)' },
  { value: 'health_requirements', label: 'Gesundheitliche Anforderungen' }
]

export const buildingComplexityOptions = [
  { value: '', label: 'Gebäudekomplexität' },
  { value: 'simple_box', label: 'Einfache Gebäudeform' },
  { value: 'moderate_complexity', label: 'Mittlere Komplexität' },
  { value: 'complex_geometry', label: 'Komplexe Geometrie' },
  { value: 'multiple_levels', label: 'Verschiedene Ebenen' },
  { value: 'mixed_use', label: 'Gemischte Nutzung' },
  { value: 'historic_structure', label: 'Historische Bausubstanz' },
  { value: 'extensions', label: 'An-/Umbauten vorhanden' },
  { value: 'unusual_features', label: 'Besondere Gebäudeteile' }
]

export const timeframeUrgencyOptions = [
  { value: '', label: 'Zeitrahmen' },
  { value: 'very_urgent', label: 'Sehr dringend (sofort)' },
  { value: 'urgent', label: 'Dringend (diese Woche)' },
  { value: 'planning_phase', label: 'Planungsphase (1-2 Wochen)' },
  { value: 'project_preparation', label: 'Projektvorbereitung (1 Monat)' },
  { value: 'tender_preparation', label: 'Ausschreibungsvorbereitung' },
  { value: 'next_heating_period', label: 'Zur nächsten Heizperiode' },
  { value: 'flexible', label: 'Flexibel' }
]

export const previousCalculationsOptions = [
  { value: '', label: 'Vorherige Berechnungen' },
  { value: 'none', label: 'Noch keine Berechnung' },
  { value: 'rough_estimate', label: 'Grobe Schätzung vorhanden' },
  { value: 'old_calculation', label: 'Alte Berechnung (>5 Jahre)' },
  { value: 'recent_calculation', label: 'Aktuelle Berechnung (<2 Jahre)' },
  { value: 'software_calculation', label: 'Software-Berechnung durchgeführt' },
  { value: 'expert_calculation', label: 'Fachmann-Berechnung vorhanden' },
  { value: 'contradictory_results', label: 'Widersprüchliche Ergebnisse' },
  { value: 'verification_needed', label: 'Verifikation gewünscht' }
]

export const dataAvailabilityOptions = [
  { value: '', label: 'Verfügbare Unterlagen' },
  { value: 'complete_plans', label: 'Vollständige Baupläne' },
  { value: 'basic_plans', label: 'Grundrisse vorhanden' },
  { value: 'energy_certificate', label: 'Energieausweis verfügbar' },
  { value: 'u_values_known', label: 'U-Werte bekannt' },
  { value: 'consumption_data', label: 'Verbrauchsdaten vorhanden' },
  { value: 'thermal_images', label: 'Thermografieaufnahmen' },
  { value: 'building_survey', label: 'Gebäudeaufnahme durchgeführt' },
  { value: 'minimal_data', label: 'Nur Grunddaten verfügbar' },
  { value: 'no_documentation', label: 'Keine Unterlagen' },
  { value: 'partial_documentation', label: 'Unvollständige Unterlagen' }
]

export const specialBuildingFeaturesOptions = [
  { value: '', label: 'Besonderheiten' },
  { value: 'none', label: 'Keine Besonderheiten' },
  { value: 'large_windows', label: 'Große Fensterflächen' },
  { value: 'high_ceilings', label: 'Hohe Räume (>3m)' },
  { value: 'thermal_bridges', label: 'Bekannte Wärmebrücken' },
  { value: 'ventilation_system', label: 'Lüftungsanlage vorhanden' },
  { value: 'underfloor_heating', label: 'Fußbodenheizung' },
  { value: 'radiant_heating', label: 'Strahlungsheizung' },
  { value: 'swimming_pool', label: 'Schwimmbad/Pool' },
  { value: 'conservatory', label: 'Wintergarten' },
  { value: 'basement_heating', label: 'Beheizte Keller' },
  { value: 'garage_heating', label: 'Beheizte Garage' },
  { value: 'workshop_spaces', label: 'Werkstatt-/Hobbyräume' }
]

export const softwarePreferenceOptions = [
  { value: '', label: 'Software-Präferenz' },
  { value: 'any_professional', label: 'Beliebige Profi-Software' },
  { value: 'specific_software', label: 'Bestimmte Software gewünscht' },
  { value: 'manufacturer_software', label: 'Hersteller-Software' },
  { value: 'open_source', label: 'Open-Source bevorzugt' },
  { value: 'simple_tools', label: 'Einfache Tools ausreichend' },
  { value: 'manual_calculation', label: 'Manuelle Berechnung' },
  { value: 'no_preference', label: 'Keine Präferenz' }
] 