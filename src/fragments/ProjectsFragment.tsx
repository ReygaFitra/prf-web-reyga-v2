import Frame from '@/components/Frame/Frame';
import TitleSection from '@/components/Title/TitleSection';
import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Projects } from '@/_data/tsx/Projects';
import { HorizontalDivider } from '@/components/Divider/CustomDivider';
import { File, Link, MonitorPlay } from 'lucide-react';

const ProjectsFragment = () => {
  return (
    <>
      <TitleSection width="140px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Projects" dividerColor="#4E4FEB" />
      <Grid gridTemplateColumns="repeat(3, 1fr)" my="20px" gap={7}>
        {Projects.map((project, index) => (
          <GridItem key={index}>
            <Frame bgColor="#0E2954" maxW="100%" minH="330px" boxShadow="13px 13px #4E4FEB" overflow="hidden" p="5px" rounded="sm">
              <Image priority={true} src={project.img} alt={`Project Image ${project.id}`} style={{ objectFit: 'cover', minHeight: '250px', width: '100%' }} />
              <Box display="flex" gap={2} my="10px" justifyContent="end">
                <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <Flex alignItems="center" gap={1}>
                    <Text color={'#ECF8F9'}>Detail</Text>
                    <File color="#ECF8F9" size="20px" />
                  </Flex>
                </Button>
                <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <Flex alignItems="center" gap={1}>
                    <Text color={'#ECF8F9'}>Demo</Text>
                    <MonitorPlay color="#ECF8F9" size="20px" />
                  </Flex>
                </Button>
                <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <Flex alignItems="center" gap={1}>
                    <Text color={'#ECF8F9'}>Github</Text>
                    <Link color="#ECF8F9" size="20px" />
                  </Flex>
                </Button>
              </Box>

              <HorizontalDivider width="100%" height="3px" color="#4E4FEB" />
            </Frame>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProjectsFragment;
