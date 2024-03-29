import Frame from '@/components/ui/Frame/Frame';
import TitleSection from '@/components/ui/Title/TitleSection';
import { Box, Button, Flex, Grid, GridItem, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { Projects } from '@/_data/tsx/Projects';
import { HorizontalDivider } from '@/components/ui/Divider/CustomDivider';
import { File, Link, MonitorPlay } from 'lucide-react';
import { Theme } from '@/lib/Theme';

const Project = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const baseColor = useColorModeValue('base.light', 'base.dark');

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const boxShadowColor = isDarkMode ? Theme.colors.primary.dark : Theme.colors.primary.light;

  return (
    <>
      <TitleSection width="140px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Projects" />
      <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} my="20px" gap={7}>
        {Projects.map((project, index) => (
          <GridItem key={index}>
            <Frame bgColor={secondaryColor} maxW="100%" minH="330px" boxShadow={{ shadow: '13px 13px', color: boxShadowColor }} overflow="hidden" p="5px" rounded="sm">
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

export default Project;
