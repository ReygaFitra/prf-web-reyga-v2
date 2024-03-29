import { TabList, Tabs, Tab, TabPanels, TabPanel, TabIndicator, Grid, GridItem, Heading, HStack, Box, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { TechStacks, Stacks } from '@/_data/tsx/TechStacks';
import TitleSection from '@/components/ui/Title/TitleSection';

const TechStack = () => {
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

        <TabPanels bgColor={secondaryColor} my="10px" borderRadius="md" p={{ base: '1px', md: '15px' }} minH={{ base: '40vh', md: '45vh', lg: '60vh' }}>
          {TechStacks.map((panel) => (
            <TabPanel key={panel.id} color={tertiaryColor}>
              <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={{ base: 3, md: 5 }}>
                {panel.panelData.map((data) => (
                  <GridItem key={data.id}>
                    <HStack p={{ base: '7px', md: '10px' }} rounded="sm" _hover={{ cursor: 'pointer', transition: '.5s', color: baseColor, bgColor: 'rgba(255, 255, 255, 0.2)' }}>
                      <data.icon />
                      <Heading size={{ base: 'sm', md: 'md' }} fontFamily="Changa" fontWeight="light">
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

export default TechStack;
