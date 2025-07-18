import { Button, Alert, Badge, Card, Icon, Container, Grid, Stack, Heading, Text, SimpleHero } from '../components/ui'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const HeizungscheckPage = ({ onBackToMain }) => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation 
        onBackToMain={onBackToMain}
        showQuickCheck={false}
        ctaText="Beratung"
        ctaAction={() => window.open('tel:+49123456789', '_self')}
      />

      {/* Hero Section */}
      <SimpleHero 
        badge={{
          text: "Heizungscheck 2.0",
          variant: "secondary",
          className: "bg-primary-100 text-primary-800 border-primary-200"
        }}
        title={{
          main: "Effizienz prüfen,",
          highlight: "Gesetz erfüllen!"
        }}
        subtitle="Professionelle Heizungsoptimierung für maximale Effizienz"
        description="Bringen Sie Ihre Heizungsanlage auf den Prüfstand – schnell, unkompliziert und mit echtem Mehrwert."
        primaryAction={{
          text: "Heizungscheck starten",
          icon: "fire",
          onClick: () => console.log("Heizungscheck starten")
        }}
        secondaryAction={{
          text: "Beratung anfordern",
          icon: "phone",
          onClick: () => window.open('tel:+49123456789', '_self')
        }}
        image={{
          src: "/assets/images/heizungscheck-hero.webp",
          alt: "Heizkörperthermostat wird eingestellt - Heizungscheck und Optimierung",
          overlay: "bg-gradient-to-br from-primary-600/20 to-primary-700/10",
          content: {
            title: "Heizungsoptimierung & Effizienz",
            subtitle: "Thermostat • Hydraulischer Abgleich • GEG-Konformität"
          }
        }}
      />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Heizungscheck 2.0",
          "description": "Professioneller Heizungscheck nach GEG-Vorgaben für maximale Energieeffizienz",
          "provider": {
            "@type": "Organization",
            "name": "Energiesparkompass",
            "url": "https://energiesparkompass.de"
          },
          "areaServed": ["Berlin", "Brandenburg"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Heizungscheck Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heizungscheck GEG",
                  "description": "Gesetzlich vorgeschriebener Heizungscheck nach Gebäudeenergiegesetz"
                }
              }
            ]
          }
        })}
      </script>

      {/* Was ist ein Heizungscheck - Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading as="h2" size="3xl" color="gray-900" className="lg:text-4xl mb-6">
              Was ist ein Heizungscheck?
            </Heading>
            <Text size="xl" color="gray-600" className="leading-relaxed max-w-4xl mx-auto text-center">
              Der <strong>Heizungscheck 2.0</strong> ist eine umfassende Analyse Ihrer Heizungsanlage zur Optimierung der <strong>Energieeffizienz</strong> und Erfüllung der <strong>GEG-Anforderungen</strong>. Unsere zertifizierten Energieberater prüfen alle Komponenten Ihres Heizsystems systematisch vor Ort.
            </Text>
          </div>
          
          <Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
            <Card className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="thermometer" size="xl" className="text-primary-600" />
              </div>
              <Heading as="h3" size="lg" color="gray-900" className="mb-4">
                Heizungsanlagen-Prüfung
              </Heading>
              <Text color="gray-600" className="leading-relaxed">
                Detaillierte Untersuchung aller Heizungskomponenten von Kessel bis Thermostat mit professionellen Messgeräten und modernster Technik.
              </Text>
            </Card>
            
            <Card className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="chart" size="xl" className="text-green-600" />
              </div>
              <Heading as="h3" size="lg" color="gray-900" className="mb-4">
                Effizienz-Analyse
              </Heading>
              <Text color="gray-600" className="leading-relaxed">
                Präzise Messung und Bewertung der aktuellen Heizungseffizienz mit konkreten Verbesserungsvorschlägen für optimale Leistung.
              </Text>
            </Card>
            
            <Card className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="document" size="xl" className="text-blue-600" />
              </div>
              <Heading as="h3" size="lg" color="gray-900" className="mb-4">
                GEG-Dokumentation
              </Heading>
              <Text color="gray-600" className="leading-relaxed">
                Rechtssichere Bescheinigung über die Erfüllung aller gesetzlichen Vorgaben des Gebäudeenergiegesetzes.
              </Text>
            </Card>
          </Grid>

          <div className="mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Stack spacing="md">
                <Heading as="h3" size="xl" color="gray-900">
                  Warum ist ein Heizungscheck wichtig?
                </Heading>
                <Text color="gray-600" className="leading-relaxed text-center max-w-3xl mx-auto">
                  Ein regelmäßiger Heizungscheck deckt versteckte Ineffizienzen auf, reduziert Energiekosten um bis zu 15% und stellt die Einhaltung gesetzlicher Vorgaben sicher. Gleichzeitig verlängert er die Lebensdauer Ihrer Heizungsanlage und trägt aktiv zum Klimaschutz bei.
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-lg p-4 mb-3">
                      <Text size="2xl" weight="bold" color="primary-600">15%</Text>
                    </div>
                    <Text size="sm" color="gray-600">Energiekosten sparen</Text>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-lg p-4 mb-3">
                      <Text size="2xl" weight="bold" color="green-600">100%</Text>
                    </div>
                    <Text size="sm" color="gray-600">GEG-konform</Text>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-lg p-4 mb-3">
                      <Text size="2xl" weight="bold" color="blue-600">5-10</Text>
                    </div>
                    <Text size="sm" color="gray-600">Jahre längere Lebensdauer</Text>
                  </div>
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </section>

      {/* Heizungscheck in Zahlen - Stats Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading as="h2" size="3xl" color="gray-900" className="lg:text-4xl mb-6">
              Heizungscheck in Zahlen
            </Heading>
            <Text size="xl" color="gray-600" className="leading-relaxed max-w-3xl mx-auto text-center">
              Über <strong>150 durchgeführte Heizungschecks</strong> sprechen für sich – vertrauen Sie auf unsere Expertise und profitieren Sie von <strong>messbaren Ergebnissen</strong>.
            </Text>
          </div>
          
          <Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-4 mb-16">
            <Card className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="fire" size="xl" className="text-primary-600" />
              </div>
              <Heading as="h3" size="3xl" color="primary-600" className="mb-2 font-bold">
                150+
              </Heading>
              <Text color="gray-600" weight="medium" size="lg" className="mb-2">
                Heizungschecks durchgeführt
              </Text>
              <Text color="gray-500" size="sm">
                Seit 2020 in Berlin & Brandenburg
              </Text>
            </Card>
            
            <Card className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="currency" size="xl" className="text-green-600" />
              </div>
              <Heading as="h3" size="3xl" color="green-600" className="mb-2 font-bold">
                bis zu 15%
              </Heading>
              <Text color="gray-600" weight="medium" size="lg" className="mb-2">
                Durchschnittliche Einsparung
              </Text>
              <Text color="gray-500" size="sm">
                bis zu 300-600€ pro Jahr bei EFH
              </Text>
            </Card>
            
            <Card className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="check" size="xl" className="text-blue-600" />
              </div>
              <Heading as="h3" size="3xl" color="blue-600" className="mb-2 font-bold">
                98%
              </Heading>
              <Text color="gray-600" weight="medium" size="lg" className="mb-2">
                Kundenzufriedenheit
              </Text>
              <Text color="gray-500" size="sm">
                Basierend auf 120+ Bewertungen
              </Text>
            </Card>
            
            <Card className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="lightning" size="xl" className="text-amber-600" />
              </div>
              <Heading as="h3" size="3xl" color="amber-600" className="mb-2 font-bold">
                1 Jahr
              </Heading>
              <Text color="gray-600" weight="medium" size="lg" className="mb-2">
                ROI-Amortisation
              </Text>
              <Text color="gray-500" size="sm">
                Check-Kosten refinanziert
              </Text>
            </Card>
          </Grid>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="text-center mb-12">
              <Heading as="h3" size="2xl" color="gray-900" className="mb-4">
                Potenzielle Einsparungen nach Gebäudetyp
              </Heading>
              <Text color="gray-600" className="max-w-2xl mx-auto">
                Basierend auf real durchgeführten Heizungschecks und dokumentierten Optimierungsmaßnahmen
              </Text>
            </div>
            
            <Grid cols={1} gap="lg" className="md:grid-cols-3">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Heading as="h4" size="xl" color="gray-900" className="mb-2">
                  Einfamilienhaus
                </Heading>
                <Text color="gray-500" size="sm" className="mb-4">bis 150m² Wohnfläche</Text>
                <div className="space-y-3">
                                     <div className="flex justify-between items-center">
                     <Text color="gray-600">Jährliche Einsparung:</Text>
                     <Text weight="bold" color="green-600" size="lg">bis zu 300-600€</Text>
                   </div>
                   <div className="flex justify-between items-center">
                     <Text color="gray-600">CO₂-Reduktion:</Text>
                     <Text weight="bold" color="green-600">bis zu 0,5-1,2t</Text>
                   </div>
                  <div className="flex justify-between items-center">
                    <Text color="gray-600">Check-Kosten:</Text>
                    <Text color="gray-600">150-200€</Text>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Heading as="h4" size="xl" color="gray-900" className="mb-2">
                  Zweifamilienhaus
                </Heading>
                <Text color="gray-500" size="sm" className="mb-4">150-250m² Wohnfläche</Text>
                <div className="space-y-3">
                                     <div className="flex justify-between items-center">
                     <Text color="gray-600">Jährliche Einsparung:</Text>
                     <Text weight="bold" color="green-600" size="lg">bis zu 500-900€</Text>
                   </div>
                   <div className="flex justify-between items-center">
                     <Text color="gray-600">CO₂-Reduktion:</Text>
                     <Text weight="bold" color="green-600">bis zu 0,8-1,8t</Text>
                   </div>
                  <div className="flex justify-between items-center">
                    <Text color="gray-600">Check-Kosten:</Text>
                    <Text color="gray-600">200-250€</Text>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Heading as="h4" size="xl" color="gray-900" className="mb-2">
                  Mehrfamilienhaus
                </Heading>
                <Text color="gray-500" size="sm" className="mb-4">über 250m² Wohnfläche</Text>
                <div className="space-y-3">
                                     <div className="flex justify-between items-center">
                     <Text color="gray-600">Jährliche Einsparung:</Text>
                     <Text weight="bold" color="green-600" size="lg">bis zu 800-1.500€</Text>
                   </div>
                   <div className="flex justify-between items-center">
                     <Text color="gray-600">CO₂-Reduktion:</Text>
                     <Text weight="bold" color="green-600">bis zu 1,5-3,0t</Text>
                   </div>
                  <div className="flex justify-between items-center">
                    <Text color="gray-600">Check-Kosten:</Text>
                    <Text color="gray-600">250-350€</Text>
                  </div>
                </div>
              </div>
            </Grid>
            
            <div className="mt-12 text-center">
              <div className="bg-primary-50 rounded-lg p-6 max-w-2xl mx-auto">
                <Heading as="h4" size="lg" color="primary-800" className="mb-3">
                  💡 Expertentipp
                </Heading>
                                 <Text color="primary-700" className="leading-relaxed">
                   Die meisten Einsparungen werden bereits im ersten Jahr nach dem Heizungscheck erreicht. 
                   Weitere Optimierungen über die Jahre können die Einsparungen auf bis zu 25% steigern.
                 </Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf des Heizungschecks - Process Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading as="h2" size="3xl" color="gray-900" className="lg:text-4xl mb-6">
              So läuft Ihr Heizungscheck ab
            </Heading>
            <Text size="xl" color="gray-600" className="leading-relaxed max-w-3xl mx-auto text-center">
              Unser <strong>systematischer 3-Phasen-Prozess</strong> garantiert eine umfassende Analyse Ihrer Heizungsanlage mit sofortigen Optimierungsempfehlungen und <strong>rechtssicherer GEG-Dokumentation</strong>.
            </Text>
          </div>

          {/* Connecting Line for larger screens */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-16 lg:space-y-24">
              {/* Phase 1: Terminvereinbarung & Vor-Ort-Analyse */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div className="lg:order-1">
                    <Card className="elegant-card p-8 hover:shadow-lg transition-all duration-300">
                      <Stack spacing="lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                            1
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 bg-primary-100 text-primary-800">Phase 1</Badge>
                            <Heading as="h3" size="xl" color="gray-900">Terminvereinbarung & Vor-Ort-Analyse</Heading>
                            <Text size="sm" color="primary-600" weight="medium">Dauer: 45-60 Minuten vor Ort</Text>
                          </div>
                        </div>
                        
                        <Text color="gray-600" className="leading-relaxed">
                          Nach der <strong>unkomplizierten Terminvereinbarung</strong> kommt unser zertifizierter Energieberater zu Ihnen. 
                          Er führt eine detaillierte Untersuchung aller Heizungskomponenten durch – von Kessel über Pumpen bis hin zu Thermostatventilen.
                        </Text>
                        
                        <Stack spacing="sm">
                          <Text weight="semibold" color="gray-900">Was wird geprüft:</Text>
                          {[
                            "Sichtprüfung der gesamten Heizungsanlage",
                            "Messung von Vor- und Rücklauftemperaturen", 
                            "Kontrolle der Umwälzpumpen und Regelung",
                            "Prüfung der Thermostatventile und Heizkörper",
                            "Dokumentation der aktuellen Einstellungen"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Icon name="check" className="text-green-600 mt-1 flex-shrink-0" size="sm" />
                              <Text size="sm" color="gray-600">{item}</Text>
                            </div>
                          ))}
                        </Stack>
                      </Stack>
                    </Card>
                  </div>
                  
                  <div className="mt-8 lg:mt-0 lg:order-2 text-center">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/assets/images/heizungscheck-vorort.jpg" 
                        alt="Energieberater prüft Heizungsanlage vor Ort beim Kunden"
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <Text size="sm" color="gray-500" className="mt-4">Vor-Ort beim Kunden</Text>
                  </div>
                </div>
              </div>

              {/* Phase 2: Datenauswertung & Analyse */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div className="lg:order-2">
                    <Card className="elegant-card p-8 hover:shadow-lg transition-all duration-300">
                      <Stack spacing="lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                            2
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 bg-green-100 text-green-800">Phase 2</Badge>
                            <Heading as="h3" size="xl" color="gray-900">Datenauswertung & Analyse</Heading>
                            <Text size="sm" color="green-600" weight="medium">Dauer: 2-3 Werktage</Text>
                          </div>
                        </div>
                        
                        <Text color="gray-600" className="leading-relaxed">
                          In unserem Büro werden alle <strong>gemessenen Werte professionell ausgewertet</strong>. 
                          Wir vergleichen mit GEG-Vorgaben, berechnen Einsparpotenziale und entwickeln konkrete Optimierungsmaßnahmen für Ihre Anlage.
                        </Text>
                        
                        <Stack spacing="sm">
                          <Text weight="semibold" color="gray-900">Was wird analysiert:</Text>
                          {[
                            "Bewertung der aktuellen Heizungseffizienz",
                            "Vergleich mit GEG-Anforderungen und Standards", 
                            "Berechnung von Einsparpotenzialen",
                            "Entwicklung von Optimierungsmaßnahmen",
                            "Kostenschätzungen für Verbesserungen"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Icon name="check" className="text-green-600 mt-1 flex-shrink-0" size="sm" />
                              <Text size="sm" color="gray-600">{item}</Text>
                            </div>
                          ))}
                        </Stack>
                      </Stack>
                    </Card>
                  </div>
                  
                  <div className="mt-8 lg:mt-0 lg:order-1 text-center">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/assets/images/heizungscheck-auswertung.jpg" 
                        alt="Professionelle Datenauswertung und Analyse der Heizungseffizienz"
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <Text size="sm" color="gray-500" className="mt-4">Professionelle Auswertung</Text>
                  </div>
                </div>
              </div>

              {/* Phase 3: Ergebnisbericht & Beratung */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div className="lg:order-1">
                    <Card className="elegant-card p-8 hover:shadow-lg transition-all duration-300">
                      <Stack spacing="lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                            3
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-800">Phase 3</Badge>
                            <Heading as="h3" size="xl" color="gray-900">Ergebnisbericht & Beratung</Heading>
                            <Text size="sm" color="blue-600" weight="medium">Übergabe + 30 Min. Beratung</Text>
                          </div>
                        </div>
                        
                        <Text color="gray-600" className="leading-relaxed">
                          Sie erhalten einen <strong>detaillierten, GEG-konformen Bericht</strong> mit allen Ergebnissen. 
                          In einem persönlichen Beratungsgespräch erklären wir Ihnen die Optimierungsmöglichkeiten und unterstützen bei der Förderantragstellung.
                        </Text>
                        
                        <Stack spacing="sm">
                          <Text weight="semibold" color="gray-900">Was Sie erhalten:</Text>
                          {[
                            "Ausführlicher schriftlicher Heizungscheck-Bericht",
                            "GEG-konforme Dokumentation für Behörden", 
                            "Konkrete Handlungsempfehlungen mit Prioritäten",
                            "Kostenschätzungen für alle Maßnahmen",
                            "Förderberatung und Unterstützung bei Anträgen"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Icon name="check" className="text-green-600 mt-1 flex-shrink-0" size="sm" />
                              <Text size="sm" color="gray-600">{item}</Text>
                            </div>
                          ))}
                        </Stack>
                      </Stack>
                    </Card>
                  </div>
                  
                  <div className="mt-8 lg:mt-0 lg:order-2 text-center">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/assets/images/heizungscheck-ergebnis.jpg" 
                        alt="Persönliche Beratung und Übergabe des detaillierten Heizungscheck-Berichts"
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <Text size="sm" color="gray-500" className="mt-4">Detaillierter Bericht</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA am Ende der Process Section */}
          <div className="mt-16 text-center">
            <Card className="elegant-card p-8 bg-gradient-to-r from-primary-50 to-blue-50">
              <Stack spacing="lg" align="center">
                <Heading as="h3" size="xl" color="gray-900">
                  Bereit für Ihren Heizungscheck?
                </Heading>
                <Text color="gray-600" className="max-w-2xl mx-auto">
                  Vereinbaren Sie jetzt einen unverbindlichen Termin und starten Sie in eine energieeffizientere Zukunft.
                </Text>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg">
                    <Icon name="phone" size="sm" className="mr-2" />
                    Termin vereinbaren
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="mail" size="sm" className="mr-2" />
                    Kostenlose Beratung
                  </Button>
                </div>
              </Stack>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HeizungscheckPage 