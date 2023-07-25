import TitleSection from '@/components/Title/TitleSection';
import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/react';

const DashboardFragment = () => {
  return (
    <>
      <TitleSection width="180px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Dashboard" dividerColor="#4E4FEB" />
      <Flex justifyContent="center" my="20px" gap={3}>
        <Box bgColor={'#0E2954'} w="100%" h="100px" rounded="md" color="#ECF8F9" p="20px">
          <Heading size="md">Coding Hours</Heading>
          <Text>---</Text>
        </Box>
        <Box bgColor={'#0E2954'} w="100%" h="100px" rounded="md" color="#ECF8F9" p="20px">
          <Heading size="md">All Time Views</Heading>
          <Text>---</Text>
        </Box>
      </Flex>
      <Box bgColor={'#0E2954'} w="100%" rounded="md" color="#ECF8F9" p="10px" my="10px">
        <Text>Not playing music - Spotify</Text>
      </Box>
      <Box bgColor={'#0E2954'} w="100%" rounded="sm" color="#ECF8F9">
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
