import TitleSection from '@/components/ui/Title/TitleSection';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Bio from '@/_data/json/Bio.json';

const BioFragment = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  return (
    <>
      <TitleSection width="100px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="About" />
      <Box py="10px" my="20px">
        <Flex direction="column" gap={5}>
          {Bio.map((bio) => (
            <Text key={bio.id} color={tertiaryColor}>
              {bio.content}
            </Text>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default BioFragment;
