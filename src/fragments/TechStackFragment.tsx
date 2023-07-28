import { TabList, Tabs, Tab, TabPanels, TabPanel, TabIndicator, Grid, GridItem, Heading, HStack, Box, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { TechStacks, Stacks } from '@/_data/tsx/TechStacks';
import TitleSection from '@/components/Title/TitleSection';

const TechStackFragment = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  const baseColor = useColorModeValue('base.light', 'base.dark');
  return (
    <>
      <TitleSection width="280px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Technology & Stack" />

      <Tabs isFitted variant="unstyled" index={activeTab} onChange={handleTabChange} my="20px">
        <TabList>
          {Stacks.map((stack) => (
            <Tab key={stack.id} _selected={{ color: primaryColor }}>
              {stack.name}
            </Tab>
          ))}
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg={primaryColor} borderRadius="1px" />

        <TabPanels bgColor={secondaryColor} my="10px" borderRadius="md" p="15px" minH="60vh">
          {TechStacks.map((panel) => (
            <TabPanel key={panel.id} color={tertiaryColor}>
              <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                {panel.panelData.map((data) => (
                  <GridItem key={data.id}>
                    <HStack p="20px" rounded="sm" _hover={{ cursor: 'pointer', transition: '.5s', color: baseColor, bgColor: 'rgba(255, 255, 255, 0.2)' }}>
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

export default TechStackFragment;
