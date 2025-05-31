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

const DesignSystemDemo = () => {
  return (
    <Container size="lg" padding="lg">
      <Stack spacing="xl">
        {/* Typography Demo */}
        <Card padding="lg">
          <Stack spacing="lg">
            <Heading as="h1" size="4xl" color="primary-600">
              Typography System
            </Heading>
            
            <Divider />
            
            <Stack spacing="md">
              <Heading as="h1" size="3xl">Heading H1 - 3xl</Heading>
              <Heading as="h2" size="2xl">Heading H2 - 2xl</Heading>
              <Heading as="h3" size="xl">Heading H3 - xl</Heading>
              <Heading as="h4" size="lg">Heading H4 - lg</Heading>
              
              <Text size="lg" weight="medium">
                Large Text - Medium Weight
              </Text>
              <Text size="base">
                Regular body text - This is the default text size for paragraphs and content.
              </Text>
              <Text size="sm" color="gray-600">
                Small text - Usually for captions, meta information, or secondary content.
              </Text>
            </Stack>
          </Stack>
        </Card>

        {/* Layout Demo */}
        <Card padding="lg">
          <Stack spacing="lg">
            <Heading as="h2" size="2xl" color="primary-600">
              Layout System
            </Heading>
            
            <Divider />
            
            {/* Grid Demo */}
            <Stack spacing="md">
              <Heading as="h3" size="lg">Grid Layout</Heading>
              <Grid cols={3} gap="md">
                <Card padding="md" shadow="sm">
                  <Text>Grid Item 1</Text>
                </Card>
                <Card padding="md" shadow="sm">
                  <Text>Grid Item 2</Text>
                </Card>
                <Card padding="md" shadow="sm">
                  <Text>Grid Item 3</Text>
                </Card>
              </Grid>
            </Stack>

            {/* Flex Demo */}
            <Stack spacing="md">
              <Heading as="h3" size="lg">Flex Layout</Heading>
              <Flex justify="between" align="center" className="p-4 bg-gray-50 rounded-lg">
                <Text weight="medium">Flex Start</Text>
                <Button variant="outline" size="sm">Center Button</Button>
                <Text size="sm" color="gray-600">Flex End</Text>
              </Flex>
            </Stack>
          </Stack>
        </Card>

        {/* Icons Demo */}
        <Card padding="lg">
          <Stack spacing="lg">
            <Heading as="h2" size="2xl" color="primary-600">
              Icon System
            </Heading>
            
            <Divider />
            
            <Grid cols={4} gap="md">
              <Flex direction="col" align="center" gap="sm" className="p-4 border rounded-lg">
                <Icon name="lightning" size="xl" color="primary-600" />
                <Text size="sm">Lightning</Text>
              </Flex>
              
              <Flex direction="col" align="center" gap="sm" className="p-4 border rounded-lg">
                <Icon name="home" size="xl" color="primary-600" />
                <Text size="sm">Home</Text>
              </Flex>
              
              <Flex direction="col" align="center" gap="sm" className="p-4 border rounded-lg">
                <Icon name="chart" size="xl" color="primary-600" />
                <Text size="sm">Chart</Text>
              </Flex>
              
              <Flex direction="col" align="center" gap="sm" className="p-4 border rounded-lg">
                <Icon name="phone" size="xl" color="primary-600" />
                <Text size="sm">Phone</Text>
              </Flex>
            </Grid>

            {/* Icon Sizes Demo */}
            <Stack spacing="md">
              <Heading as="h3" size="lg">Icon Sizes</Heading>
              <Flex gap="lg" align="center">
                <Flex direction="col" align="center" gap="xs">
                  <Icon name="lightning" size="xs" />
                  <Text size="xs">xs</Text>
                </Flex>
                <Flex direction="col" align="center" gap="xs">
                  <Icon name="lightning" size="sm" />
                  <Text size="xs">sm</Text>
                </Flex>
                <Flex direction="col" align="center" gap="xs">
                  <Icon name="lightning" size="md" />
                  <Text size="xs">md</Text>
                </Flex>
                <Flex direction="col" align="center" gap="xs">
                  <Icon name="lightning" size="lg" />
                  <Text size="xs">lg</Text>
                </Flex>
                <Flex direction="col" align="center" gap="xs">
                  <Icon name="lightning" size="xl" />
                  <Text size="xs">xl</Text>
                </Flex>
                <Flex direction="col" align="center" gap="xs">
                  <Icon name="lightning" size="2xl" />
                  <Text size="xs">2xl</Text>
                </Flex>
              </Flex>
            </Stack>
          </Stack>
        </Card>

        {/* Components with Icons */}
        <Card padding="lg">
          <Stack spacing="lg">
            <Heading as="h2" size="2xl" color="primary-600">
              Enhanced Components
            </Heading>
            
            <Divider />
            
            <Grid cols={2} gap="lg">
              {/* Buttons with Icons */}
              <Stack spacing="md">
                <Heading as="h3" size="lg">Buttons with Icons</Heading>
                <Stack spacing="sm">
                  <Button variant="primary">
                    <Icon name="phone" size="sm" className="mr-2" />
                    Jetzt anrufen
                  </Button>
                  <Button variant="outline">
                    <Icon name="mail" size="sm" className="mr-2" />
                    E-Mail senden
                  </Button>
                  <Button variant="ghost">
                    <Icon name="download" size="sm" className="mr-2" />
                    Herunterladen
                  </Button>
                </Stack>
              </Stack>

              {/* Alerts with proper Icons */}
              <Stack spacing="md">
                <Heading as="h3" size="lg">Status Messages</Heading>
                <Stack spacing="sm">
                  <Alert variant="success" title="Erfolgreich">
                    Ihre Anfrage wurde erfolgreich übermittelt.
                  </Alert>
                  <Alert variant="warning" title="Achtung">
                    Bitte überprüfen Sie Ihre Eingaben.
                  </Alert>
                  <Alert variant="info" title="Information">
                    Weitere Details finden Sie in der Dokumentation.
                  </Alert>
                </Stack>
              </Stack>
            </Grid>
          </Stack>
        </Card>

        {/* Usage Examples */}
        <Card padding="lg" className="bg-gray-50">
          <Stack spacing="lg">
            <Heading as="h2" size="2xl" color="primary-600">
              Verwendungsbeispiele
            </Heading>
            
            <Divider />
            
            <Grid cols={1} gap="lg">
              <Card padding="md">
                <Stack spacing="sm">
                  <Text weight="bold" size="lg">Importieren:</Text>
                  <Text as="pre" className="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto">
{`import { 
  Heading, 
  Text, 
  Container, 
  Grid, 
  Stack, 
  Flex, 
  Icon,
  Button,
  Card 
} from './ui'`}
                  </Text>
                </Stack>
              </Card>

              <Card padding="md">
                <Stack spacing="sm">
                  <Text weight="bold" size="lg">Verwendung:</Text>
                  <Text as="pre" className="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto">
{`<Container size="lg">
  <Stack spacing="xl">
    <Heading as="h1" size="4xl" color="primary-600">
      Ihr Titel
    </Heading>
    
    <Grid cols={3} gap="md">
      <Card padding="lg">
        <Flex align="center" gap="md">
          <Icon name="lightning" size="lg" color="primary-600" />
          <Text>Energiesparend</Text>
        </Flex>
      </Card>
    </Grid>
  </Stack>
</Container>`}
                  </Text>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
}

export default DesignSystemDemo 