import Frame from '@/components/Frame/Frame';
import TitleSection from '@/components/Title/TitleSection';
import { Grid, GridItem } from '@chakra-ui/react';

const ProjectsFragment = () => {
  return (
    <>
      <TitleSection width="200px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Projects" dividerColor="#4E4FEB" />
      <Grid gridTemplateColumns="repeat(3, 1fr)" my="20px" gap={7}>
        <GridItem>
          <Frame bgColor="#0E2954" maxW="100%" minH="330px" rounded="none" boxShadow="13px 13px #4E4FEB" overflow="hidden">
            Projects
          </Frame>
        </GridItem>
        <GridItem>
          <Frame bgColor="#0E2954" maxW="100%" minH="330px" rounded="none" boxShadow="13px 13px #4E4FEB" overflow="hidden">
            Projects
          </Frame>
        </GridItem>
        <GridItem>
          <Frame bgColor="#0E2954" maxW="100%" minH="330px" rounded="none" boxShadow="13px 13px #4E4FEB" overflow="hidden">
            Projects
          </Frame>
        </GridItem>
        <GridItem>
          <Frame bgColor="#0E2954" maxW="100%" minH="330px" rounded="none" boxShadow="13px 13px #4E4FEB" overflow="hidden">
            Projects
          </Frame>
        </GridItem>
        <GridItem>
          <Frame bgColor="#0E2954" maxW="100%" minH="330px" rounded="none" boxShadow="13px 13px #4E4FEB" overflow="hidden">
            Projects
          </Frame>
        </GridItem>
      </Grid>
    </>
  );
};

export default ProjectsFragment;
