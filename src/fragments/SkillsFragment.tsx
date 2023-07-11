'use client';
import { TabList, Tabs, Tab } from '@chakra-ui/react';

const SkillsFragment = () => {
  return (
    <Tabs isFitted>
      <TabList>
        <Tab>Language</Tab>
        <Tab>Frontend</Tab>
        <Tab>Backend</Tab>
        <Tab>Misc.</Tab>
      </TabList>
    </Tabs>
  );
};

export default SkillsFragment;
