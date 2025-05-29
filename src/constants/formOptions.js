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