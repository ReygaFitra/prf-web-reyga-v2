'use client';
import { TabList, Tabs, Tab, TabPanels, TabPanel, TabIndicator, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import HtmlIcon from '@/assets/svg/html.svg';
import CssIcon from '@/assets/svg/css.svg';
import JavascriptIcon from '@/assets/svg/javascript.svg';
import TypescriptIcon from '@/assets/svg/typescript.svg';
import GolangIcon from '@/assets/svg/golang.svg';
import ReactIcon from '@/assets/svg/reactjs.svg';
import NextIcon from '@/assets/svg/nextjs.svg';
import TailwindIcon from '@/assets/svg/tailwindcss.svg';
import ChakraIcon from '@/assets/svg/chakraui.svg';
import RadixuiIcon from '@/assets/svg/radix-ui.svg';
import FramerMotionIcon from '@/assets/svg/framer-motion.svg';
import NodejsIcon from '@/assets/svg/nodejs-icon.svg';
import ExpressIcon from '@/assets/svg/express.svg';
import PostgresIcon from '@/assets/svg/postgresql.svg';
import MysqlIcon from '@/assets/svg/mysql.svg';
import MongodbIcon from '@/assets/svg/mongodb.svg';
import GoIcon from '@/assets/svg/go-2.svg';
import PrismaIcon from '@/assets/svg/prisma.svg';
import FirebaseIcon from '@/assets/svg/firebase.svg';
import GitIcon from '@/assets/svg/git.svg';
import VscodeIcon from '@/assets/svg/visual-studio-code.svg';
import FigmaIcon from '@/assets/svg/figma.svg';
import ArduinoIcon from '@/assets/svg/arduino.svg';

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
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <HtmlIcon />
                <Heading size="lg">HTML</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <CssIcon />
                <Heading size="lg">CSS</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <JavascriptIcon />
                <Heading size="lg">JavaScript</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <TypescriptIcon />
                <Heading size="lg">TypeScript</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <GolangIcon />
                <Heading size="lg">Golang</Heading>
              </HStack>
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel color="#ECF8F9">
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <ReactIcon />
                <Heading size="lg">ReactJS</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <NextIcon />
                <Heading size="lg">NextJS</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <TailwindIcon />
                <Heading size="lg">TailwindCSS</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <ChakraIcon />
                <Heading size="lg">ChakraUI</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <RadixuiIcon />
                <Heading size="lg">Radix UI</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <FramerMotionIcon />
                <Heading size="lg">Framer Motion</Heading>
              </HStack>
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel color="#ECF8F9">
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <NodejsIcon />
                <Heading size="lg">NodeJS</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <ExpressIcon />
                <Heading size="lg">Express</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <PostgresIcon />
                <Heading size="lg">PostgreSQL</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <MysqlIcon />
                <Heading size="lg">MySQL</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <MongodbIcon />
                <Heading size="lg">MongoDB</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <GoIcon />
                <Heading size="lg">GIN Golang</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <GoIcon />
                <Heading size="lg">Gorm</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <PrismaIcon />
                <Heading size="lg">Prisma</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <FirebaseIcon />
                <Heading size="lg">Firebase</Heading>
              </HStack>
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel color="#ECF8F9">
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <GitIcon />
                <Heading size="lg">Git</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <VscodeIcon />
                <Heading size="lg">Visual Studio Code</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <FigmaIcon />
                <Heading size="lg">Figma</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <ArduinoIcon />
                <Heading size="lg">Arduino</Heading>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack _hover={{ cursor: 'pointer', transition: '.5s', color: '#068FFF' }}>
                <ArduinoIcon />
                <Heading size="lg">Internet of Things</Heading>
              </HStack>
            </GridItem>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SkillsFragment;
