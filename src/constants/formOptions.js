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