import { Button, Alert, Badge, Card, Icon, Container, Grid, Stack, Heading, Text, SimpleHero } from './ui'
import Navigation from './Navigation'
import Footer from './Footer'

// Helper component to safely render HTML content
const HTMLContent = ({ content, className = "", ...props }) => {
  if (!content) return null
  
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  )
}

const ServicePageTemplate = ({ 
  config,
  onBackToMain,
  // Navigation handlers
  onNavigateToHeizungscheck = null,
  onNavigateToEnergie = null, 
  onNavigateToHydraulisch = null,
  onNavigateToEnergieausweis = null,
  onNavigateToFoerder = null
}) => {
  const {
    navigation = {},
    hero = {},
    sections = {},
    seo = {}
  } = config

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Structured Data */}
      {seo && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": seo.name || hero.title,
            "description": seo.description || hero.description,
            "provider": {
              "@type": "Organization", 
              "name": "Energiesparkompass",
              "url": "https://energiesparkompass.de"
            },
            "areaServed": seo.areaServed || ["Berlin", "Brandenburg"],
            ...seo.additionalData
          })}
        </script>
      )}

      {/* Navigation */}
      <Navigation 
        onBackToMain={onBackToMain}
        showQuickCheck={navigation.showQuickCheck ?? true}
        ctaText={navigation.ctaText || "Beratung"}
        ctaAction={navigation.ctaAction || (() => window.open('tel:+49123456789', '_self'))}
        onNavigateToHeizungscheck={onNavigateToHeizungscheck}
        onNavigateToEnergie={onNavigateToEnergie}
        onNavigateToHydraulisch={onNavigateToHydraulisch}
        onNavigateToEnergieausweis={onNavigateToEnergieausweis}
        onNavigateToFoerder={onNavigateToFoerder}
      />

      {/* Hero Section */}
      <SimpleHero {...hero} />

      {/* Features Section */}
      {sections.features && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" color="gray-900" className="lg:text-4xl mb-6">
                {sections.features.title}
              </Heading>
              <HTMLContent 
                content={sections.features.description}
                className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-center"
              />
            </div>
            
            <Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
              {sections.features.items.map((feature, index) => (
                <Card key={index} className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className={`bg-secondary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={feature.icon} size="xl" className={'text-secondary-600'} />
                  </div>
                  <Heading as="h3" size="lg" color="gray-900" className="mb-4">
                    {feature.title}
                  </Heading>
                  <HTMLContent 
                    content={feature.description}
                    className="text-gray-600 leading-relaxed"
                  />
                </Card>
              ))}
            </Grid>

            {sections.features.bottomContent && (
              <div className="mt-16">
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <Stack spacing="md">
                    <Heading as="h3" size="xl" color="gray-900">
                      {sections.features.bottomContent.title}
                    </Heading>
                    <HTMLContent 
                      content={sections.features.bottomContent.description}
                      className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto"
                    />
                    {sections.features.bottomContent.stats && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {sections.features.bottomContent.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className={`bg-secondary-100 rounded-lg p-4 mb-3`}>
                              <Text size="2xl" weight="bold" color={'secondary-600'}>{stat.value}</Text>
                            </div>
                            <Text size="sm" color="gray-600">{stat.label}</Text>
                          </div>
                        ))}
                      </div>
                    )}
                  </Stack>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Stats Section */}
      {sections.stats && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" color="gray-900" className="lg:text-4xl mb-6">
                {sections.stats.title}
              </Heading>
              <HTMLContent 
                content={sections.stats.description}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center"
              />
            </div>
            
            <Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-4 mb-16">
              {sections.stats.items.map((stat, index) => (
                <Card key={index} className="elegant-card p-8 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className={`bg-secondary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={stat.icon} size="xl" className={'text-secondary-600'} />
                  </div>
                  <Heading as="h3" size="3xl" color={'secondary-600'} className="mb-2 font-bold">
                    {stat.value}
                  </Heading>
                  <Text color="gray-600" weight="medium" size="lg" className="mb-2">
                    {stat.label}
                  </Text>
                  <Text color="gray-500" size="sm">
                    {stat.sublabel}
                  </Text>
                </Card>
              ))}
            </Grid>

            {sections.stats.detailSection && (
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="text-center mb-12">
                  <Heading as="h3" size="2xl" color="gray-900" className="mb-4">
                    {sections.stats.detailSection.title}
                  </Heading>
                  <HTMLContent 
                    content={sections.stats.detailSection.description}
                    className="text-gray-600 max-w-2xl mx-auto"
                  />
                </div>
                
                <Grid cols={1} gap="lg" className="md:grid-cols-3">
                  {sections.stats.detailSection.items.map((item, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                      <Heading as="h4" size="xl" color="gray-900" className="mb-2">
                        {item.title}
                      </Heading>
                      <Text color="gray-500" size="sm" className="mb-4">{item.subtitle}</Text>
                      <div className="space-y-3">
                        {item.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex justify-between items-center">
                            <Text color="gray-600">{detail.label}:</Text>
                            <Text weight="bold" color={detail.color || 'green-600'} size={detail.size || 'base'}>
                              {detail.value}
                            </Text>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Grid>
                
                {sections.stats.detailSection.tip && (
                  <div className="mt-12 text-center">
                    <div className="bg-primary-50 rounded-lg p-6 max-w-2xl mx-auto">
                      <Heading as="h4" size="lg" color="primary-800" className="mb-3">
                        💡 {sections.stats.detailSection.tip.title}
                      </Heading>
                      <HTMLContent 
                        content={sections.stats.detailSection.tip.description}
                        className="text-primary-700 leading-relaxed"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Process Section */}
      {sections.process && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" color="gray-900" className="lg:text-4xl mb-6">
                {sections.process.title}
              </Heading>
              <HTMLContent 
                content={sections.process.description}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center"
              />
            </div>

            {/* Connecting Line for larger screens */}
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-16 lg:space-y-24">
                {sections.process.phases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                      <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <Card className="elegant-card p-8 hover:shadow-lg transition-all duration-300">
                          <Stack spacing="lg">
                            <div className="flex items-center space-x-4">
                              <div className={`bg-secondary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}>
                                {phase.number}
                              </div>
                              <div>
                                <Badge variant="secondary" className={`mb-2 bg-secondary-100 text-secondary-800`}>
                                  {phase.badge}
                                </Badge>
                                <Heading as="h3" size="xl" color="gray-900">{phase.title}</Heading>
                                <Text size="sm" color={'secondary-600'} weight="medium">
                                  {phase.duration}
                                </Text>
                              </div>
                            </div>
                            
                            <HTMLContent 
                              content={phase.description}
                              className="text-gray-600 leading-relaxed"
                            />
                            
                            {phase.checkList && (
                              <Stack spacing="sm">
                                <Text weight="semibold" color="gray-900">{phase.checkList.title}:</Text>
                                {phase.checkList.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-start space-x-2">
                                    <Icon name="check" className="text-secondary-600 mt-1 flex-shrink-0" size="sm" />
                                    <Text size="sm" color="gray-600">{item}</Text>
                                  </div>
                                ))}
                              </Stack>
                            )}
                          </Stack>
                        </Card>
                      </div>
                      
                      <div className={`mt-8 lg:mt-0 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} text-center`}>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={phase.image.src} 
                            alt={phase.image.alt}
                            className="w-full h-80 object-cover"
                          />
                        </div>
                        <Text size="sm" color="gray-500" className="mt-4">{phase.image.caption}</Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA am Ende der Process Section */}
            {sections.process.cta && (
              <div className="mt-16 text-center">
                <Card className="elegant-card p-8 bg-gradient-to-r from-primary-50 to-blue-50">
                  <Stack spacing="lg" align="center">
                    <Heading as="h3" size="xl" color="gray-900">
                      {sections.process.cta.title}
                    </Heading>
                    <HTMLContent 
                      content={sections.process.cta.description}
                      className="text-gray-600 max-w-2xl mx-auto"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                      {sections.process.cta.buttons.map((button, buttonIndex) => (
                        <Button 
                          key={buttonIndex}
                          variant={button.variant || 'primary'} 
                          size="lg"
                          onClick={button.onClick}
                        >
                          <Icon name={button.icon} size="sm" className="mr-2" />
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  </Stack>
                </Card>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {sections.custom && sections.custom.map((customSection, index) => (
        <section key={index} className={customSection.className || "py-16 lg:py-20 bg-white"}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {customSection.content}
          </div>
        </section>
      ))}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ServicePageTemplate