import TitleSection from '@/components/Title/TitleSection';
import { Box, Flex, Text } from '@chakra-ui/react';
import Bio from '@/_data/json/Bio.json';

const BioFragment = () => {
  return (
    <>
      <TitleSection width="100px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="About" dividerColor="#4E4FEB" />
      <Box py="10px" my="20px">
        <Flex direction="column" gap={5}>
          {Bio.map((bio) => (
            <Text key={bio.id} color="#0E2954">
              {bio.content}
            </Text>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default BioFragment;
