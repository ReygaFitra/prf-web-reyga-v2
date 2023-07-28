import Hero from '@/components/ui/Hero/Hero';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

const HeroFragment = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box w="full" h="full" py="50px" px="100px" borderRadius="md" border={'3px dashed'} borderColor={tertiaryColor}>
        <Hero name="Reyga Fitra Ramadhan" nameColor={primaryColor} nameFont="Changa" roleColor={tertiaryColor} roleSequence={['< Software Engineer />', 3000, '< Fullstack Developer />', 3000]} />
      </Box>
    </Flex>
  );
};

export default HeroFragment;
