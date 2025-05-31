import { 
  Button, 
  Card, 
  Alert,
  Heading, 
  Text, 
  Container, 
  Grid, 
  Stack, 
  Flex, 
  Divider,
  Icon 
} from './ui'

const ModernDesignDemo = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <Container size="lg" padding="lg">
        <Stack spacing="xl">
          {/* Hero Section mit neuer Farbpalette */}
          <div className="text-center py-16">
            <Stack spacing="lg" align="center">
              <div className="bg-energy-gradient w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Icon name="leaf" size="2xl" color="white" />
              </div>
              
              <Heading as="h1" size="5xl" color="primary-900" weight="extrabold">
                Moderne Energieberatung
              </Heading>
              
              <Text size="xl" color="primary-700" className="max-w-2xl">
                Entdecken Sie unsere neue, nachhaltige Farbpalette und modernisierte 
                Design-Sprache für die Zukunft der Energie.
              </Text>
              
              <Flex gap="md" justify="center" className="mt-8">
                <Button className="btn-energy">
                  <Icon name="lightning" size="sm" className="mr-2" />
                  Jetzt starten
                </Button>
                <Button variant="outline" className="border-primary-600 text-primary-700 hover:bg-primary-50">
                  <Icon name="eco" size="sm" className="mr-2" />
                  Mehr erfahren
                </Button>
              </Flex>
            </Stack>
          </div>

          {/* Neue Farbpalette Showcase */}
          <Card className="card-energy" padding="lg">
            <Stack spacing="lg">
              <Heading as="h2" size="3xl" color="primary-800">
                Neue Evergreen-Farbpalette
              </Heading>
              
              <Divider />
              
              <Grid cols={3} gap="lg">
                {/* Primary Colors */}
                <Card padding="md" shadow="sm">
                  <Stack spacing="md">
                    <Heading as="h3" size="lg" color="primary-700">Primary Grün</Heading>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-50 rounded-lg border border-primary-200"></div>
                        <Text size="sm">primary-50</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-300 rounded-lg"></div>
                        <Text size="sm">primary-300</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
                        <Text size="sm" weight="bold">primary-600 (Main)</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-800 rounded-lg"></div>
                        <Text size="sm">primary-800</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-950 rounded-lg"></div>
                        <Text size="sm">primary-950 (Evergreen)</Text>
                      </div>
                    </div>
                  </Stack>
                </Card>

                {/* Accent Colors */}
                <Card padding="md" shadow="sm">
                  <Stack spacing="md">
                    <Heading as="h3" size="lg" color="accent-600">Accent Orange</Heading>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent-100 rounded-lg border border-accent-200"></div>
                        <Text size="sm">accent-100</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent-300 rounded-lg"></div>
                        <Text size="sm">accent-300</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent-500 rounded-lg"></div>
                        <Text size="sm" weight="bold">accent-500 (Energy)</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent-700 rounded-lg"></div>
                        <Text size="sm">accent-700</Text>
                      </div>
                    </div>
                  </Stack>
                </Card>

                {/* Semantic Colors */}
                <Card padding="md" shadow="sm">
                  <Stack spacing="md">
                    <Heading as="h3" size="lg" color="gray-700">Status Farben</Heading>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-success-500 rounded-lg"></div>
                        <Text size="sm" color="success-600">Success</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-warning-500 rounded-lg"></div>
                        <Text size="sm" color="warning-600">Warning</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-error-500 rounded-lg"></div>
                        <Text size="sm" color="error-600">Error</Text>
                      </div>
                    </div>
                  </Stack>
                </Card>
              </Grid>
            </Stack>
          </Card>

          {/* Neue Icons */}
          <Card className="card-energy" padding="lg">
            <Stack spacing="lg">
              <Heading as="h2" size="3xl" color="primary-800">
                Neue Energie-Icons
              </Heading>
              
              <Divider />
              
              <Grid cols={6} gap="md">
                <Flex direction="col" align="center" gap="sm" className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                  <Icon name="leaf" size="2xl" color="primary-600" />
                  <Text size="sm" weight="medium">Leaf</Text>
                </Flex>
                
                <Flex direction="col" align="center" gap="sm" className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                  <Icon name="sun" size="2xl" color="accent-500" />
                  <Text size="sm" weight="medium">Sun</Text>
                </Flex>
                
                <Flex direction="col" align="center" gap="sm" className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                  <Icon name="eco" size="2xl" color="primary-600" />
                  <Text size="sm" weight="medium">Eco</Text>
                </Flex>
                
                <Flex direction="col" align="center" gap="sm" className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                  <Icon name="lightning" size="2xl" color="accent-600" />
                  <Text size="sm" weight="medium">Lightning</Text>
                </Flex>
                
                <Flex direction="col" align="center" gap="sm" className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                  <Icon name="home" size="2xl" color="primary-700" />
                  <Text size="sm" weight="medium">Home</Text>
                </Flex>
                
                <Flex direction="col" align="center" gap="sm" className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                  <Icon name="chart" size="2xl" color="primary-600" />
                  <Text size="sm" weight="medium">Chart</Text>
                </Flex>
              </Grid>
            </Stack>
          </Card>

          {/* Moderne Button-Varianten */}
          <Card className="card-energy" padding="lg">
            <Stack spacing="lg">
              <Heading as="h2" size="3xl" color="primary-800">
                Moderne Button-Stile
              </Heading>
              
              <Divider />
              
              <Grid cols={2} gap="lg">
                <Stack spacing="md">
                  <Heading as="h3" size="lg">Standard Buttons</Heading>
                  <Stack spacing="sm">
                    <Button variant="primary">
                      <Icon name="phone" size="sm" className="mr-2" />
                      Primary Button
                    </Button>
                    <Button variant="outline">
                      <Icon name="mail" size="sm" className="mr-2" />
                      Outline Button
                    </Button>
                    <Button variant="ghost">
                      <Icon name="download" size="sm" className="mr-2" />
                      Ghost Button
                    </Button>
                  </Stack>
                </Stack>

                <Stack spacing="md">
                  <Heading as="h3" size="lg">Energy Buttons</Heading>
                  <Stack spacing="sm">
                    <button className="btn-energy">
                      <Icon name="lightning" size="sm" className="mr-2" />
                      Energy Button
                    </button>
                    <Button className="bg-energy-gradient text-white font-medium px-6 py-3 rounded-lg hover:shadow-energy-lg transition-energy">
                      <Icon name="leaf" size="sm" className="mr-2" />
                      Gradient Button
                    </Button>
                    <Button className="glass-energy text-primary-800 font-medium px-6 py-3 rounded-lg transition-energy">
                      <Icon name="eco" size="sm" className="mr-2" />
                      Glass Button
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Stack>
          </Card>

          {/* Status Messages mit neuen Farben */}
          <Card className="card-energy" padding="lg">
            <Stack spacing="lg">
              <Heading as="h2" size="3xl" color="primary-800">
                Moderne Status Messages
              </Heading>
              
              <Divider />
              
              <Stack spacing="md">
                <Alert variant="success" title="Energieeinsparung erfolgreich!">
                  Ihre neuen Energiespar-Maßnahmen wurden erfolgreich implementiert und sparen bereits 25% Energie.
                </Alert>
                
                <Alert variant="info" title="Moderne Designsprache">
                  Das neue Evergreen-Design vermittelt Nachhaltigkeit, Innovation und Vertrauen.
                </Alert>
                
                <Alert variant="warning" title="Design-Update verfügbar">
                  Eine neue Version des Design Systems mit verbesserten Farbkontrasten ist verfügbar.
                </Alert>
              </Stack>
            </Stack>
          </Card>

          {/* Design Highlights */}
          <Card className="bg-energy-gradient text-white" padding="lg">
            <Stack spacing="lg" align="center">
              <Icon name="leaf" size="2xl" color="white" />
              <Heading as="h2" size="3xl" color="white" className="text-center">
                Nachhaltiges Design für die Zukunft
              </Heading>
              <Text size="lg" color="white" className="text-center max-w-3xl">
                Unsere neue Evergreen-Farbpalette kombiniert die Kraft der Natur mit moderner 
                Designsprache. Jede Farbe wurde sorgfältig ausgewählt, um Vertrauen zu schaffen 
                und unsere Mission für eine nachhaltige Zukunft zu unterstreichen.
              </Text>
              <Flex gap="md" justify="center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Icon name="chart" size="lg" color="white" className="mb-2" />
                  <Text color="white" weight="bold">25% mehr Effizienz</Text>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Icon name="sun" size="lg" color="white" className="mb-2" />
                  <Text color="white" weight="bold">100% Erneuerbar</Text>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Icon name="eco" size="lg" color="white" className="mb-2" />
                  <Text color="white" weight="bold">Klimaneutral</Text>
                </div>
              </Flex>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  )
}

export default ModernDesignDemo 