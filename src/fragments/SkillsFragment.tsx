'use client';
import { TabList, Tabs, Tab, TabPanels, TabPanel, TabIndicator, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { TechStacks, Stacks } from '@/_data/tsx/TechStacks';

const SkillsFragment = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Heading size="lg" color="#4E4FEB" py="35px" fontFamily="Changa">
        Technology & Stack
      </Heading>
      <Tabs isFitted variant="unstyled" index={activeTab} onChange={handleTabChange}>
        <TabList>
          {Stacks.map((stack) => (
            <Tab key={stack.id} _selected={{ color: '#4E4FEB' }}>
              {stack.name}
            </Tab>
          ))}
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="#4E4FEB" borderRadius="1px" />

        <TabPanels bgColor="#0E2954" my="10px" borderRadius="md" p="15px" minH="60vh">
          {TechStacks.map((panel) => (
            <TabPanel key={panel.id} color="#ECF8F9">
              <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                {panel.panelData.map((data) => (
                  <GridItem key={data.id}>
                    <HStack p="20px" rounded="sm" _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF', bgColor: 'rgba(255, 255, 255, 0.2)' }}>
                      <data.icon />
                      <Heading size="lg" fontFamily="Changa" fontWeight="light">
                        {data.name}
                      </Heading>
                    </HStack>
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default SkillsFragment;
