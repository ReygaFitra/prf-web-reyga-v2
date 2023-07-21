'use client';
import Hero from '@/components/Hero/Hero';
import { Box, Flex } from '@chakra-ui/react';

const HeroFragment = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" width="100%">
      <Box minW="60vw" minH="75vh" borderRadius="sm" p="20px">
        <Hero name="Reyga Fitra Ramadhan" nameColor="#4E4FEB" nameFont="Changa" roleColor="#068FFF" roleSequence={['< Software Engineer />', 3000, '< Fullstack Developer />', 3000]} />
      </Box>
    </Flex>
  );
};

export default HeroFragment;
