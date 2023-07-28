import Frame from '@/components/ui/Frame/Frame';
import TitleSection from '@/components/ui/Title/TitleSection';
import { Box, Button, Flex, Grid, GridItem, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { Projects } from '@/_data/tsx/Projects';
import { HorizontalDivider } from '@/components/ui/Divider/CustomDivider';
import { File, Link, MonitorPlay } from 'lucide-react';

const ProjectsFragment = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const baseColor = useColorModeValue('base.light', 'base.dark');
  return (
    <>
      <TitleSection width="140px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Projects" />
      <Grid gridTemplateColumns="repeat(3, 1fr)" my="20px" gap={7}>
        {Projects.map((project, index) => (
          <GridItem key={index}>
            <Frame bgColor={secondaryColor} maxW="100%" minH="330px" boxShadow="13px 13px #454955" overflow="hidden" p="5px" rounded="sm">
              <Image priority={true} src={project.img} alt={`Project Image ${project.id}`} style={{ objectFit: 'cover', minHeight: '250px', width: '100%' }} />
              <Box display="flex" gap={2} my="10px" justifyContent="end">
                <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <Flex alignItems="center" gap={1}>
                    <Text color={baseColor}>Detail</Text>
                    <File color="#ECF8F9" size="20px" />
                  </Flex>
                </Button>
                <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <Flex alignItems="center" gap={1}>
                    <Text color={baseColor}>Demo</Text>
                    <MonitorPlay color="#ECF8F9" size="20px" />
                  </Flex>
                </Button>
                <Button size="sm" variant="ghost" rounded="sm" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <Flex alignItems="center" gap={1}>
                    <Text color={baseColor}>Github</Text>
                    <Link color="#ECF8F9" size="20px" />
                  </Flex>
                </Button>
              </Box>

              <HorizontalDivider width="100%" height="3px" />
            </Frame>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProjectsFragment;
