import TitleSection from '@/components/Title/TitleSection';
import { Box, Flex, HStack, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const DashboardFragment = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  const baseColor = useColorModeValue('base.light', 'base.dark');
  return (
    <>
      <TitleSection width="180px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Dashboard" />
      <Flex justifyContent="center" my="20px" gap={3}>
        <Box bgColor={secondaryColor} w="100%" h="100px" rounded="md" color={tertiaryColor} p="20px">
          <Heading size="md" fontFamily="changa">
            Coding Hours
          </Heading>
          <Text>---</Text>
        </Box>
        <Box bgColor={secondaryColor} w="100%" h="100px" rounded="md" color={tertiaryColor} p="20px">
          <Heading size="md" fontFamily="changa">
            All Time Views
          </Heading>
          <Text>---</Text>
        </Box>
      </Flex>
      <Heading size="md" fontFamily="changa" color={secondaryColor}>
        Music
      </Heading>
      <Box bgColor={secondaryColor} w="100%" rounded="md" color={tertiaryColor} p="10px" my="10px">
        <Text>Not playing music - Spotify</Text>
      </Box>
      <Box w="100%" rounded="sm" color={secondaryColor} my="20px">
        <Heading size="md" fontFamily="changa">
          Top Tracks
        </Heading>
        <Text px="10px" py="25px">
          Music List
        </Text>
        <hr />
        <Text px="10px" py="25px">
          Music List
        </Text>
        <hr />
        <Text px="10px" py="25px">
          Music List
        </Text>
        <hr />
        <Text px="10px" py="25px">
          Music List
        </Text>
        <hr />
      </Box>
    </>
  );
};

export default DashboardFragment;
