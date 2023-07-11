'use client';
import { TabList, Tabs, Tab, TabPanels, TabPanel, TabIndicator } from '@chakra-ui/react';
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
      <TabPanels>
        <TabPanel>Language tab</TabPanel>
        <TabPanel>Frontend tab</TabPanel>
        <TabPanel>Backend tab</TabPanel>
        <TabPanel>Misc. tab</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SkillsFragment;
