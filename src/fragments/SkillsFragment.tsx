'use client';
import { TabList, Tabs, Tab, TabPanels, TabPanel, TabIndicator, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useState } from 'react';

const SkillsFragment = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs isFitted variant="unstyled" index={activeTab} onChange={handleTabChange}>
      <TabList>
        <Tab _selected={{ color: '#4E4FEB' }}>Language</Tab>
        <Tab _selected={{ color: '#4E4FEB' }}>Frontend</Tab>
        <Tab _selected={{ color: '#4E4FEB' }}>Backend</Tab>
        <Tab _selected={{ color: '#4E4FEB' }}>Misc.</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="#4E4FEB" borderRadius="1px" />
      <TabPanels bgColor="#0E2954" my="10px" borderRadius="md" p="15px">
        <TabPanel color="#ECF8F9">
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <Heading size="lg">HTML</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">CSS</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">JavaScript</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">TypeScript</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Golang</Heading>
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel color="#ECF8F9">
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <Heading size="lg">ReactJS</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">NextJS</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">TailwindCSS</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">ChakraUI</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">RadixUI</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Framer Motion</Heading>
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel color="#ECF8F9">
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <Heading size="lg">NodeJS</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">ExpressJS</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">PostgreSQL</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">MySQL</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">MongoDB</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Gin Golang</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">GORM</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Prisma ORM</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Firebase</Heading>
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel color="#ECF8F9">
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <Heading size="lg">GIT</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Visual Studio Code</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Figma</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Arduino</Heading>
            </GridItem>
            <GridItem>
              <Heading size="lg">Internet of Things</Heading>
            </GridItem>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SkillsFragment;
