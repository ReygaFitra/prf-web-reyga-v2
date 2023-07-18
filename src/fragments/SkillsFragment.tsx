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
  const skillsPanels = [
    {
      id: 1,
      panelData: [
        {
          id: 1,
          name: 'HTML',
          icon: HtmlIcon,
        },
        {
          id: 2,
          name: 'CSS',
          icon: CssIcon,
        },
        {
          id: 3,
          name: 'JavaScript',
          icon: JavascriptIcon,
        },
        {
          id: 4,
          name: 'Typescript',
          icon: TypescriptIcon,
        },
        {
          id: 5,
          name: 'Golang',
          icon: GolangIcon,
        },
      ],
    },
    {
      id: 2,
      panelData: [
        {
          id: 1,
          name: 'React JS',
          icon: ReactIcon,
        },
        {
          id: 2,
          name: 'Next JS',
          icon: NextIcon,
        },
        {
          id: 3,
          name: 'TailwindCSS',
          icon: TailwindIcon,
        },
        {
          id: 4,
          name: 'Chakra UI',
          icon: ChakraIcon,
        },
        {
          id: 5,
          name: 'Radix UI',
          icon: RadixuiIcon,
        },
        {
          id: 6,
          name: 'Framer Motion',
          icon: FramerMotionIcon,
        },
      ],
    },
    {
      id: 3,
      panelData: [
        {
          id: 1,
          name: 'Node JS',
          icon: NodejsIcon,
        },
        {
          id: 2,
          name: 'Express JS',
          icon: ExpressIcon,
        },
        {
          id: 3,
          name: 'PostgreSQL',
          icon: PostgresIcon,
        },
        {
          id: 4,
          name: 'MySQL',
          icon: MysqlIcon,
        },
        {
          id: 5,
          name: 'MongoDB',
          icon: MongodbIcon,
        },
        {
          id: 6,
          name: 'Gin Golang',
          icon: GoIcon,
        },
        {
          id: 7,
          name: 'GORM',
          icon: GoIcon,
        },
        {
          id: 8,
          name: 'Prisma',
          icon: PrismaIcon,
        },
        {
          id: 9,
          name: 'Firebase',
          icon: FirebaseIcon,
        },
      ],
    },
    {
      id: 4,
      panelData: [
        {
          id: 1,
          name: 'GIT',
          icon: GitIcon,
        },
        {
          id: 2,
          name: 'VS Code',
          icon: VscodeIcon,
        },
        {
          id: 3,
          name: 'Figma',
          icon: FigmaIcon,
        },
        {
          id: 4,
          name: 'Arduino',
          icon: ArduinoIcon,
        },
        {
          id: 5,
          name: 'IoT',
          icon: ArduinoIcon,
        },
      ],
    },
  ];

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
          <Tab _selected={{ color: '#4E4FEB' }}>Language</Tab>
          <Tab _selected={{ color: '#4E4FEB' }}>Frontend</Tab>
          <Tab _selected={{ color: '#4E4FEB' }}>Backend</Tab>
          <Tab _selected={{ color: '#4E4FEB' }}>Misc.</Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="#4E4FEB" borderRadius="1px" />

        <TabPanels bgColor="#0E2954" my="10px" borderRadius="md" p="15px" minH="60vh">
          {skillsPanels.map((panel) => (
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
