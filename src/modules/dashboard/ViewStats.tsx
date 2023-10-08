import TitleSection from '@/components/ui/Title/TitleSection';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const ViewStats = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');

  return (
    <>
      <TitleSection width="180px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Dashboard" />
      <Flex justifyContent="center" my="20px" gap={3} flexDir={{ base: 'column', md: 'row' }}>
        <Box bgColor={secondaryColor} w="100%" h="100px" rounded="md" color={tertiaryColor} p="20px">
          <Heading size={{ base: 'sm', md: 'md' }} fontFamily="changa">
            Coding Hours
          </Heading>
          <Text>---</Text>
        </Box>
        <Box bgColor={secondaryColor} w="100%" h="100px" rounded="md" color={tertiaryColor} p="20px">
          <Heading size={{ base: 'sm', md: 'md' }} fontFamily="changa">
            All Time Views
          </Heading>
          <Text>---</Text>
        </Box>
      </Flex>
    </>
  );
};

export default ViewStats;
